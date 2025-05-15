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

async function transfer(req, res, next) {
    try {
        const employee = await db.Employee.findByPk(req.params.id);
        if (!employee) throw new Error('Employee not found');
        await employee.update({ departmentId: req.body.departmentId });
        await db.Workflow.create({
            employeeId: employee.id,
            type: 'Transfer',
            details: { newDepartmentId: req.body.departmentId }
        });
        res.json({ message: 'Employee transferred' });
    } catch (err) { next(err); }
}

function transferEmployee(req, res, next) {
    // Get the employee ID from the URL
    const id = parseInt(req.params.id);
    
    // Get the new department ID from the request body
    const { departmentId } = req.body;
    
    if (!departmentId) {
        return res.status(400).json({ message: 'Department ID is required' });
    }

    db.Employee.transfer(id, parseInt(departmentId))
        .then(() => res.json({ message: 'Employee transferred successfully' }))
        .catch(err => {
            console.error('Transfer error:', err);
            next(err);
        });
}

module.exports = router;
