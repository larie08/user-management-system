const config =  require('config.json');
const mysql = require('mysql2/promise');
const { Sequelize } = require('sequelize');

module.exports = db = {};

initialize();

async function initialize() {
    //create db if it doesn't already exist
    const { host, port, user, password, database } = config.database;
    const connection = await mysql.createConnection({ host, port, user, password });
    await connection.query(`CREATE DATABASE IF NOT EXISTS \`${database}\`;`);

    //connect to db
    const sequelize = new Sequelize(database, user, password, { dialect: 'mysql' });

    //init models and add them to the exported db project
    db.Account = require('../accounts/account.model')(sequelize);
    db.RefreshToken = require('../accounts/refresh-token.model')(sequelize);
    db.Department = require('../departments/department.model')(sequelize);
    db.Workflow = require('../workflows/workflow.model')(sequelize);
    db.Employee = require('../employees/employee.model')(sequelize);

    // Request and RequestItem models
    const { Request, RequestItem } = require('../requests/request.model')(sequelize, db.Employee);
    db.Request = Request;
    db.RequestItem = RequestItem;

    // define relationships
    db.Account.hasMany(db.RefreshToken, { onDelete: 'CASCADE' });
    db.RefreshToken.belongsTo(db.Account);

    // Account-Employee relationship
    db.Account.hasOne(db.Employee, { foreignKey: 'userId' });
    db.Employee.belongsTo(db.Account, { foreignKey: 'userId' });

    // Department-Employee relationship
    db.Department.hasMany(db.Employee, { foreignKey: 'departmentId', onDelete: 'SET NULL' });
    db.Employee.belongsTo(db.Department, { foreignKey: 'departmentId' });

    // Workflow relationships
    db.Account.hasMany(db.Workflow, { foreignKey: 'initiatedBy', as: 'initiator' });
    db.Workflow.belongsTo(db.Account, { foreignKey: 'initiatedBy', as: 'initiator' });
    db.Account.hasMany(db.Workflow, { foreignKey: 'assignedTo', as: 'assignee' });
    db.Workflow.belongsTo(db.Account, { foreignKey: 'assignedTo', as: 'assignee' });
    
    // Employee-Workflow relationship
    db.Employee.hasMany(db.Workflow, { foreignKey: 'employeeId' });
    db.Workflow.belongsTo(db.Employee, { foreignKey: 'employeeId' });

    // sync all models with database
    await sequelize.sync({ alter: true });
}