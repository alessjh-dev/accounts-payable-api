const { Model, DataTypes, Sequelize } = require('sequelize');

const BILLS_TABLE = 'bills';

class Bills extends Model {
    static config(sequelize) {
        return {
            sequelize,
            tableName: BILLS_TABLE,
            modelName: 'Bills',
            timestamps: false
        }
    }
} 

const BillsSchema = {
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
    type: {
        allowNull: false,
        type: DataTypes.STRING
    },
    file: {
        allowNull: false,
        type: DataTypes.BLOB,
        field:'file'
    }
}
  
module.exports = { Bills, BillsSchema };