//import sequelize
const Sequelize = require("sequelize");

// import dotenv
require("dotenv").config();

// define a sequelize variable
let sequelize;

// if the dotenv file has jawsdb infomation define sequelize as a connection to that object
if (process.env.JAWSDB_URL) {
  sequelize = new Sequelize(process.env.JAWSDB_URL);
}
// otherwise define sequelize as a connection to a local db
else {
  sequelize = new Sequelize(
    process.env.DB_NAME,
    process.env.DB_USER,
    process.env.DB_PW,
    {
      host: "localhost",
      dialect: "mysql",
      port: 3005,
    }
  );
}

// export for use elsewhere
module.exports = sequelize;
