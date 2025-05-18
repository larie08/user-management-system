const express = require('express');
const router = express.Router();
const workflowService = require('./workflow.service');
const authorize = require('_middleware/authorize');

router.post('/create', authorize(), createWorkflow);
router.get('/', authorize(), getAllWorkflows);
router.get('/employee/:employeeId', authorize(), getWorkflowsByEmployeeId);
router.get('/:id', authorize(), getWorkflowById);
router.put('/:id', authorize(), updateWorkflow);
router.delete('/:id', authorize(), deleteWorkflow);

module.exports = router;

function createWorkflow(req, res, next) {
    const workflow = {
        ...req.body,
        initiatedBy: req.user.id
    };
    
    workflowService.create(workflow)
        .then(workflow => res.json(workflow))
        .catch(err => next(err));
}

function getAllWorkflows(req, res, next) {
    workflowService.getAll()
        .then(workflows => res.json(workflows))
        .catch(err => next(err));
}

function getWorkflowById(req, res, next) {
    workflowService.getById(req.params.id)
        .then(workflow => workflow ? res.json(workflow) : res.sendStatus(404))
        .catch(err => next(err));
}

function updateWorkflow(req, res, next) {
    workflowService.update(req.params.id, req.body)
        .then(workflow => res.json(workflow))
        .catch(err => next(err));
}

function deleteWorkflow(req, res, next) {
    workflowService.delete(req.params.id)
        .then(() => res.json({ message: 'Workflow deleted successfully' }))
        .catch(err => next(err));
}

function getWorkflowsByEmployeeId(req, res, next) {
    console.log('Getting workflows for employee ID:', req.params.employeeId);
    const db = require('_helpers/db');
    db.Workflow.findAll({
        where: { employeeId: req.params.employeeId },
        order: [['createdAt', 'DESC']]
    })
    .then(workflows => {
        console.log(`Found ${workflows.length} workflows for employee ${req.params.employeeId}`);
        console.log('Workflow data:', JSON.stringify(workflows, null, 2));
        res.json(workflows);
    })
    .catch(err => {
        console.error('Error fetching workflows:', err);
        next(err);
    });
}
