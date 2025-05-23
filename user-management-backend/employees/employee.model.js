// DELUNA - Employee Model
const { DataTypes } = require('sequelize');

module.exports = (sequelize) => {
    const Employee = sequelize.define('Employee', {
        id: {
            type: DataTypes.INTEGER,
            autoIncrement: true,
            primaryKey: true
        },
        employeeId: {
            type: DataTypes.STRING,
            allowNull: false,
            unique: true
        },
        userId: {
            type: DataTypes.INTEGER,
            allowNull: false,
            references: {
                model: 'accounts',
                key: 'id'
            }
        },
        position: {
            type: DataTypes.STRING,
            allowNull: false
        },
        departmentId: {
            type: DataTypes.INTEGER,
            allowNull: true,
            references: {
                model: 'departments',
                key: 'id'
            }
        },
        hireDate: {
            type: DataTypes.DATE,
            allowNull: false
        },
        status: {
            type: DataTypes.ENUM('Active', 'Inactive'),
            defaultValue: 'Active'
        }
    });

    // Add model methods
    Employee.transfer = async function(id, departmentId) {
        const employee = await Employee.findByPk(id);
        
        // Validate
        if (!employee) throw 'Employee not found';
        
        // Update department
        employee.departmentId = departmentId;
        
        // Save
        await employee.save();
        
        return employee;
    };

    return Employee;
};