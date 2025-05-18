// DELUNA - requests controller
const express = require('express');
const router = express.Router();
const db = require('../_helpers/db');
const authorize = require('../_middleware/authorize');
const Role = require('../_helpers/role');
const { Op } = require('sequelize');
const jwt = require('jsonwebtoken');

router.post('/', authorize(), create);
router.get('/', authorize(Role.Admin), getAll);
router.get('/:id', authorize(), getById);
router.get('/employee/:employeeId', authorize(), getByEmployeeId);
router.put('/:id', authorize(Role.Admin), update);
router.delete('/:id', authorize(Role.Admin), _delete);

async function create(req, res, next) {
    try {
        let employeeId = req.user.employeeId;
        // If admin, allow employeeId from body
        if (req.user.role === 'Admin' && req.body.employeeId) {
            employeeId = req.body.employeeId;
        }
        const request = await db.Request.create({
            ...req.body,
            employeeId,
            requestNumber: await generateRequestNumber()
        }, {
            include: [{ model: db.RequestItem, as: 'items' }]
        });

        // Create workflow for the request
        await db.Workflow.create({
            requestType: 'REQUEST',
            requestId: request.id.toString(),
            employeeId: employeeId,
            status: 'PENDING',
            initiatedBy: req.user.id,
            description: `Request #${request.requestNumber} - ${request.type}`,
            workflowData: {
                employeeId: employeeId,
                requestNumber: request.requestNumber,
                requestType: request.requestType,
                items: request.items
            }
        });

        res.status(201).json(request);
    } catch (err) { next(err); }
}

async function getAll(req, res, next) {
    try {
        const requests = await db.Request.findAll({
            include: [
                { model: db.RequestItem, as: 'items' },
                { model: db.Employee, as: 'employee', include: [{ model: db.Account, as: 'account' }] }
            ]
        });
        res.json(requests);
    } catch (err) { next(err); }
}

async function getById(req, res, next) {
    try {
        const request = await db.Request.findByPk(req.params.id, {
            include: [{ model: db.RequestItem, as: 'items' }, { model: db.Employee, as: 'employee' }]
        });
        if (!request) throw new Error('Request not found');
        if (req.user.role !== Role.Admin && request.employeeId !== req.user.employeeId) {
            throw new Error('Unauthorized');
        }
        res.json(request);
    } catch (err) { next(err); }
}

async function getByEmployeeId(req, res, next) {
    try {
        const requests = await db.Request.findAll({
            where: { employeeId: req.params.employeeId },
            include: [
                { model: db.RequestItem, as: 'items' },
                { model: db.Employee, as: 'employee', include: [{ model: db.Account, as: 'account' }] }
            ]
        });
        res.json(requests);
    } catch (err) { next(err); }
}

async function update(req, res, next) {
    try {
        const request = await db.Request.findByPk(req.params.id);
        if (!request) throw new Error('Request not found');
        await request.update(req.body);
        if (req.body.items) {
            await db.RequestItem.destroy({ where: { requestId: request.id } });
            await db.RequestItem.bulkCreate(req.body.items.map(item => ({
                ...item,
                requestId: request.id
            })));
        }
        res.json(request);
    } catch (err) { next(err); }
}

async function _delete(req, res, next) {
    try {
        const request = await db.Request.findByPk(req.params.id);
        if (!request) throw new Error('Request not found');
        await request.destroy();
        res.json({ message: 'Request deleted' });
    } catch (err) { next(err); }
}

async function generateRequestNumber() {
    const today = new Date();
    const year = today.getFullYear().toString().slice(-2);
    const month = (today.getMonth() + 1).toString().padStart(2, '0');
    const count = await db.Request.count({
        where: {
            createdDate: {
                [Op.between]: [new Date(today.getFullYear(), today.getMonth(), 1), new Date(today.getFullYear(), today.getMonth() + 1, 0)]
            }
        }
    });
    const sequence = (count + 1).toString().padStart(4, '0');
    return `REQ-${year}-${month}-${sequence}`;
}

module.exports = router;
