const { Model, DataTypes, Sequelize } = require('sequelize');

const ACCOUNTS_TABLE = 'accounts';

class Accounts extends Model {
    static config(sequelize) {
        return {
            sequelize,
            tableName: ACCOUNTS_TABLE,
            modelName: 'Accounts',
            timestamps: false
        }
    }
} 

const AccountsSchema = {
    id: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: DataTypes.INTEGER
    },
    accountNumber: {
        allowNull: false,
        type: DataTypes.STRING
    },
    bank: {
        allowNull: false,
        type: DataTypes.STRING
    },
    accountType: {
        allowNull: false,
        type: DataTypes.STRING
    },
    titularName: {
        allowNull: false,
        type: DataTypes.STRING
    },
    ammount: {
        allowNull: false,
        type: DataTypes.DOUBLE
    },
}
  
module.exports = { Accounts, AccountsSchema };