const db = require('_helpers/db');
const Workflow = db.Workflow;

module.exports = {
    create,
    getAll,
    getById,
    getByEmployeeId,
    update,
    delete: _delete
};

async function create(workflowParam) {
    const workflow = new Workflow(workflowParam);
    await workflow.save();
    return workflow;
}

async function getAll() {
    return await Workflow.find()
        .populate('initiatedBy', 'firstName lastName email')
        .populate('assignedTo', 'firstName lastName email')
        .sort('-createdAt');
}

async function getById(id) {
    return await Workflow.findById(id)
        .populate('initiatedBy', 'firstName lastName email')
        .populate('assignedTo', 'firstName lastName email');
}

async function update(id, workflowParam) {
    const workflow = await Workflow.findById(id);
    
    if (!workflow) throw 'Workflow not found';
    
    Object.assign(workflow, {
        ...workflowParam,
        updatedAt: Date.now()
    });
    
    await workflow.save();
    return workflow;
}

async function _delete(id) {
    await Workflow.findByIdAndRemove(id);
}

async function getByEmployeeId(employeeId) {
    // Using Sequelize to find workflows related to an employee
    return await Workflow.findAll({
        where: {
            // Using requestId field which should contain the employee ID
            // This is based on the workflow model structure
            requestId: employeeId.toString()
        },
        order: [['createdAt', 'DESC']]
    });
}
