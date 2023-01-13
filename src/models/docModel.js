const { Model, DataTypes } = require('sequelize');
/*
*/
const sequelize = require("../database")
/*
* 
*
*
*/
class Doc extends Model { }
/*
* 
* 
*
*/
Doc.init({
    id: {
        type: DataTypes.INTEGER,
        primaryKey: true,
        autoIncrement: true,
    },
    author: {
        type: DataTypes.STRING(255),
        required: true,
        unique: true,
        notNull: true,
    },
    email: {
        type: DataTypes.STRING(255),
        required: true,
        unique: true,
        notNull: true,
    }
}, {
    sequelize, modelName: 'docs', freezeTableName: true,
});

sequelize.sync()

module.exports = {
    Doc
}