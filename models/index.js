const dotenv = require("dotenv");
const { Sequelize } = require("sequelize");
dotenv.config({ path: ".env" });
require("dotenv").config();
 
const sequelize = new Sequelize({
  dialect: "postgres",
  host: process.env.DB_HOST,
  port: process.env.PORT,
  username: process.env.DB_USER,
  password: process.env.DB_PASSWORD,
  database: process.env.DATABASE,
});


const db = {};

db.Sequelize = Sequelize;
db.sequelize = sequelize;


db.data = require("../models/tb_data.js")(sequelize, Sequelize);
module.exports = db;