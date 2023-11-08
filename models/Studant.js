const DataTypes = require('sequelize');
const sequelize = require('../database')

const Student = sequelize.define('Student', {
    matricula: {
        type: DataTypes.INTEGER,
        allowNull: false,
    },
    nome: {
        type: DataTypes.STRING,
        allowNull: false,
    },
    email:{
        type: DataTypes.STRING,
        allowNull: false,
        unique: true
    },
    senha:{
        type: DataTypes.STRING,
        allowNull: false
    },
    
}, { timestamps: false });

module.exports = Student;