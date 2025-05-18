const express = require('express');
const router = express.Router();
const authorize = require('../_middleware/authorize');
const Role = require('../_helpers/role');
const departmentService = require('./departments.service');

// routes
router.post('/', authorize(Role.Admin), create);
router.get('/', authorize(), getAll);
router.get('/:id', authorize(), getById);
router.put('/:id', authorize(Role.Admin), update);
router.delete('/:id', authorize(Role.Admin), _delete);

module.exports = router;

function create(req, res, next) {
    departmentService.create(req.body)
        .then(department => res.json(department))
        .catch(next);
}

function getAll(req, res, next) {
    departmentService.getAll()
        .then(departments => res.json(departments))
        .catch(next);
}

function getById(req, res, next) {
    departmentService.getById(req.params.id)
        .then(department => department ? res.json(department) : res.sendStatus(404))
        .catch(next);
}

function update(req, res, next) {
    departmentService.update(req.params.id, req.body)
        .then(department => res.json(department))
        .catch(next);
}

function _delete(req, res, next) {
    departmentService.delete(req.params.id)
        .then(() => res.json({ message: 'Department deleted successfully' }))
        .catch(next);
} 