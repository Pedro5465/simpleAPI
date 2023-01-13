const { Sequelize } = require("sequelize")
require('dotenv').config()

const sequelize = new Sequelize(process.env.DATABASE_DB,  process.env.USER_DB, process.env.PASS_DB, {
    host: process.env.HOST_DB,
    dialect: "mysql"  // mysql, mariadb, db2, mssql, oracle, postgres, snowflake, sqlite
});

module.exports = sequelize