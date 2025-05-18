const { DataTypes } = require('sequelize');

function initRequestModel(sequelize) {
    const Request = sequelize.define('Request', {
        id: { type: DataTypes.INTEGER, autoIncrement: true, primaryKey: true },
        requestNumber: { 
            type: DataTypes.STRING,
            unique: true,
            allowNull: false
        },
        type: { 
            type: DataTypes.STRING, 
            allowNull: false,
            validate: {
                isIn: [['Equipment', 'Leave', 'Resources']]
            }
        },
        status: { 
            type: DataTypes.STRING, 
            allowNull: false,
            defaultValue: 'Pending',
            validate: {
                isIn: [['Pending', 'Submitted', 'In Progress', 'Approved', 'Rejected', 'Completed', 'Cancelled']]
            }
        },
        employeeId: {
            type: DataTypes.INTEGER,
            allowNull: false
        },
        createdDate: { 
            type: DataTypes.DATE, 
            allowNull: false, 
            defaultValue: DataTypes.NOW 
        },
        lastModifiedDate: {
            type: DataTypes.DATE,
            allowNull: true
        }
    });
    return Request;
}

function initRequestItemModel(sequelize) {
    const RequestItem = sequelize.define('RequestItem', {
        id: { type: DataTypes.INTEGER, autoIncrement: true, primaryKey: true },
        name: { 
            type: DataTypes.STRING, 
            allowNull: false,
            validate: {
                notEmpty: true,
                len: [1, 100]
            }
        },
        quantity: { 
            type: DataTypes.INTEGER, 
            allowNull: false,
            validate: {
                min: 1
            }
        },
        requestId: {
            type: DataTypes.INTEGER,
            allowNull: false
        }
    });
    return RequestItem;
}

module.exports = (sequelize, Employee) => {
    const Request = initRequestModel(sequelize);
    const RequestItem = initRequestItemModel(sequelize);

    // Associations
    Request.hasMany(RequestItem, { 
        foreignKey: 'requestId', 
        as: 'items', 
        onDelete: 'CASCADE' 
    });
    RequestItem.belongsTo(Request, { 
        foreignKey: 'requestId',
        as: 'request'
    });
    Request.belongsTo(Employee, { 
        foreignKey: 'employeeId',
        as: 'employee'
    });

    return { Request, RequestItem };
};