const { Model, DataTypes, Sequelize } = require('sequelize');

const USERS_TABLE = 'users';

class Users extends Model {
    static config(sequelize) {
        return {
            sequelize,
            tableName: USERS_TABLE,
            modelName: 'Users',
            timestamps: false
        }
    }
} 

const UsersSchema = {
    id: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: DataTypes.INTEGER
    },
    name: {
        allowNull: false,
        type: DataTypes.STRING
    },
    lastname: {
        allowNull: false,
        type: DataTypes.STRING
    },
    username: {
        allowNull: false,
        type: DataTypes.STRING
    },
    password: {
        allowNull: false,
        type: DataTypes.STRING
    },
    role: {
        allowNull: false,
        type: DataTypes.STRING
    },
}
  
module.exports = { Users, UsersSchema };