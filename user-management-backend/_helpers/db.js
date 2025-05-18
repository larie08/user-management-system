const config = require('config.json');
const mysql = require('mysql2/promise');
const { Sequelize } = require('sequelize');

module.exports = db = {};

initialize();

async function initialize() {
    try {
        //create db if it doesn't already exist
        const { host, port, user, password, database } = {
            host: process.env.DB_HOST || config.database.host,
            port: process.env.DB_PORT || config.database.port,
            user: process.env.DB_USER || config.database.user,
            password: process.env.DB_PASSWORD || config.database.password,
            database: process.env.DB_NAME || config.database.database
        };
        
        const connection = await mysql.createConnection({ host, port, user, password });
        await connection.query(`CREATE DATABASE IF NOT EXISTS \`${database}\`;`);

        //connect to db
        const sequelize = new Sequelize(database, user, password, { 
            host,
            port,
            dialect: 'mysql',
            logging: false, // Disable logging in production
            define: {
                timestamps: true,
                underscored: true
            }
        });

        //init models and add them to the exported db project
        db.Account = require('../accounts/account.model')(sequelize);
        db.RefreshToken = require('../accounts/refresh-token.model')(sequelize);
        db.Department = require('../departments/department.model')(sequelize);
        db.Employee = require('../employees/employee.model')(sequelize);
        db.Workflow = require('../workflows/workflow.model')(sequelize);

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
        await sequelize.sync({ alter: true, force: false });
        console.log('Database synchronized successfully');
    } catch (error) {
        console.error('Error initializing database:', error);
        throw error;
    }
}