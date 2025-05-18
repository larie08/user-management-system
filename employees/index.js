// DELUNA - Employee Management System
const express = require('express');
const router = express.Router();
const db = require('../_helpers/db');
const authorize = require('../_middleware/authorize');
const Role = require('../_helpers/role');

router.post('/', authorize(Role.Admin), create);
router.get('/', authorize(), getAll);
router.get('/:id', authorize(), getById);
router.put('/:id', authorize(Role.Admin), update);
router.delete('/:id', authorize(Role.Admin), _delete);
// Add this new route handler for transferring employees
router.post('/:id/transfer', authorize(), transferEmployee);

async function create(req, res, next) {
    try {
        const employee = await db.Employee.create(req.body);
        
        // Create onboarding workflow
        await db.Workflow.create({
            requestType: 'ONBOARDING',
            requestId: employee.id.toString(),
            status: 'PENDING',
            initiatedBy: req.user.id,
            description: `Onboarding workflow for ${employee.firstName} ${employee.lastName}`,
            workflowData: {
                departmentId: req.body.departmentId,
                employeeId: employee.id
            }
        });

        res.status(201).json(employee);
    } catch (err) { next(err); }
}

async function getAll(req, res, next) {
    try {
        const employees = await db.Employee.findAll({
            include: [
                { model: db.Account, attributes: ['email'] },
                { model: db.Department, attributes: ['name'] }
            ]
        });
        res.json(employees);
    } catch (err) { next(err); }
}

async function getById(req, res, next) {
    try {
        const employee = await db.Employee.findByPk(req.params.id, {
            include: [
                { model: db.Account, attributes: ['email'] },
                { model: db.Department, attributes: ['name'] }
            ]
        });
        if (!employee) throw new Error('Employee not found');
        res.json(employee);
    } catch (err) { next(err); }
}

async function update(req, res, next) {
    try {
        const employee = await db.Employee.findByPk(req.params.id);
        if (!employee) throw new Error('Employee not found');
        await employee.update(req.body);
        res.json(employee);
    } catch (err) { next(err); }
}

async function _delete(req, res, next) {
    try {
        const employee = await db.Employee.findByPk(req.params.id);
        if (!employee) throw new Error('Employee not found');
        await employee.destroy();
        res.json({ message: 'Employee deleted' });
    } catch (err) { next(err); }
}

async function transferEmployee(req, res, next) {
    try {
        const { departmentId } = req.body;
        const employeeId = req.params.id;

        if (!departmentId) {
            return res.status(400).json({ message: 'Department ID is required' });
        }

        // Find the employee
        const employee = await db.Employee.findByPk(employeeId, {
            include: [{ model: db.Department, attributes: ['name'] }]
        });

        if (!employee) {
            return res.status(404).json({ message: 'Employee not found' });
        }

        const oldDepartmentId = employee.departmentId;
        const oldDepartmentName = employee.Department?.name;

        // Find the new department
        const newDepartment = await db.Department.findByPk(departmentId);
        if (!newDepartment) {
            return res.status(404).json({ message: 'New department not found' });
        }

        // Create transfer workflow
        await db.Workflow.create({
            requestType: 'TRANSFER',
            requestId: employeeId.toString(),
            status: 'PENDING',
            initiatedBy: req.user.id,
            description: `Department transfer request: ${oldDepartmentName || 'Previous Dept'} → ${newDepartment.name}`,
            workflowData: {
                employeeId: employeeId,
                fromDepartmentId: oldDepartmentId,
                toDepartmentId: departmentId,
                fromDepartmentName: oldDepartmentName,
                toDepartmentName: newDepartment.name
            }
        });

        // Update employee's department
        await employee.update({ departmentId });

        res.json({
            message: 'Employee transferred successfully',
            employee: {
                id: employee.id,
                departmentId: departmentId,
                departmentName: newDepartment.name
            }
        });
    } catch (err) {
        console.error('Transfer error:', err);
        next(err);
    }
}

module.exports = router;
