const db = require('../_helpers/db');

module.exports = {
    create,
    getAll,
    getById,
    getByEmployeeId,
    update,
    delete: _delete
};

async function create(workflowParam) {
    return await db.Workflow.create(workflowParam);
}

async function getAll() {
    return await db.Workflow.findAll({
        include: [
            {
                model: db.Account,
                as: 'initiator',
                attributes: ['firstName', 'lastName', 'email']
            },
            {
                model: db.Account,
                as: 'assignee',
                attributes: ['firstName', 'lastName', 'email']
            }
        ],
        order: [['createdAt', 'DESC']]
    });
}

async function getById(id) {
    return await db.Workflow.findByPk(id, {
        include: [
            {
                model: db.Account,
                as: 'initiator',
                attributes: ['firstName', 'lastName', 'email']
            },
            {
                model: db.Account,
                as: 'assignee',
                attributes: ['firstName', 'lastName', 'email']
            }
        ]
    });
}

async function getByEmployeeId(employeeId) {
    return await db.Workflow.findAll({
        where: { employeeId },
        include: [
            {
                model: db.Account,
                as: 'initiator',
                attributes: ['firstName', 'lastName', 'email']
            },
            {
                model: db.Account,
                as: 'assignee',
                attributes: ['firstName', 'lastName', 'email']
            }
        ],
        order: [['createdAt', 'DESC']]
    });
}

async function update(id, workflowParam) {
    const workflow = await db.Workflow.findByPk(id);
    
    if (!workflow) throw 'Workflow not found';
    
    await workflow.update(workflowParam);
    return workflow;
}

async function _delete(id) {
    const workflow = await db.Workflow.findByPk(id);
    if (workflow) {
        await workflow.destroy();
    }
}