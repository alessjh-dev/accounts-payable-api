const { Model, DataTypes, Sequelize } = require('sequelize');
const { Provider } = require('./providers.model');

const REQUEST_TABLE = 'request';

class Request extends Model {
    static config(sequelize) {
        return {
            sequelize,
            tableName: REQUEST_TABLE,
            modelName: 'Request',
            timestamps: true
        }
    }
} 

const RequestSchema = {
    id: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: DataTypes.INTEGER
    },
    ammount: {
        allowNull: false,
        type: DataTypes.DOUBLE,
        field:'ammount'
    },
    invoiceNumber: {
        allowNull: false,
        type: DataTypes.STRING,
        field:'invoiceNumber'
    },
    exchangeRate:{ 
        allowNull:true,
        type: DataTypes.DOUBLE,
        field: 'exchangeRate'
    },
    emmissionDate:{
        allowNull: false,
        type: DataTypes.DATE,
        field: 'emmissionDate'
    } ,
    currency:{
        allowNull: false,
        type: DataTypes.STRING,
        field: 'currency'
    },
    expenseType:{
        allowNull: false,
        type: DataTypes.STRING,
        field: 'expenseType'
    },
    providerId:{
        allowNull: false,
        type: DataTypes.INTEGER,
        field: 'providerId',
        references: {
            model: Provider,
            key: 'id'
          }
    } ,
    paymentType:{
        allowNull: false,
        type: DataTypes.STRING,
        field: 'paymentType'
    } 
}
  
module.exports = { Request, RequestSchema };