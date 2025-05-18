const { DataTypes } = require('sequelize');

module.exports = model;

function model(sequelize) {
    const attributes = {
        requestType: { 
            type: DataTypes.STRING, 
            allowNull: false,
            validate: {
                isIn: [['ONBOARDING', 'TRANSFER', 'REQUEST']]
            }
        },
        requestId: { 
            type: DataTypes.STRING, 
            allowNull: false 
        },
        status: { 
            type: DataTypes.STRING,
            allowNull: false,
            defaultValue: 'PENDING',
            validate: {
                isIn: [['PENDING', 'APPROVED', 'REJECTED']]
            }
        },
        initiatedBy: {
            type: DataTypes.INTEGER,
            allowNull: false
        },
        assignedTo: {
            type: DataTypes.INTEGER,
            allowNull: true
        },
        description: { 
            type: DataTypes.TEXT, 
            allowNull: false 
        },
        workflowData: {
            type: DataTypes.JSON,
            allowNull: true,
            comment: 'Additional data specific to the workflow type (e.g., department transfer details)'
        },
        employeeId: {
            type: DataTypes.INTEGER,
            allowNull: false
        },
        createdAt: {
            type: DataTypes.DATE,
            allowNull: false,
            defaultValue: DataTypes.NOW
        },
        updatedAt: {
            type: DataTypes.DATE,
            allowNull: false,
            defaultValue: DataTypes.NOW
        }
    };

    const options = {
        timestamps: true,
        defaultScope: {
            // exclude hash by default
            attributes: { exclude: [] }
        },
        scopes: {
            // include hash with this scope
            withHash: { attributes: {} }
        }
    };

    return sequelize.define('Workflow', attributes, options);
}
