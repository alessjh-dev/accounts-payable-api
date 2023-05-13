const { Model, DataTypes, Sequelize } = require('sequelize');

const PROVIDER_TABLE = 'provider';

class Provider extends Model {
    static config(sequelize) {
        return {
            sequelize,
            tableName: PROVIDER_TABLE,
            modelName: 'Provider',
            timestamps: true
        }
    }
} 

const ProviderSchema = {
    id: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: DataTypes.INTEGER
    },
    name: {
        allowNull: false,
        type: DataTypes.STRING,
        field:'name'
    },
    phone:{ 
        allowNull:false,
        type: DataTypes.INTEGER,
        field: 'phone'
    },
    email:{
        allowNull: true,
        type: DataTypes.STRING,
        field: 'email'
    } ,
    nit:{
        allowNull: true,
        type: DataTypes.STRING,
        field: 'nit'
    },
    lineOfBusiness:{
        allowNull: true,
        type: DataTypes.STRING,
        field: 'lineOfBusiness'
    },
    addresses:{
        allowNull: true,
        type: DataTypes.JSON,
        field: 'addresses'
    } ,
    accounts:{
        allowNull: true,
        type: DataTypes.JSON,
        field: 'accounts'
    } 
}
  
module.exports = { Provider, ProviderSchema };