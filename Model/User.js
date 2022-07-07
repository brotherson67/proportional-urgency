// import sequelize object
const Sequelize = require("sequelize");
//import connection to db
const sequelize = require("../config/connection");

class User extends Sequelize.Model {}

User.init(
  // Add the model data here
  {
    // add system_user_id as primary key
    id: {
      type: Sequelize.DataTypes.INTEGER,
      autoIncrement: true,
      primaryKey: true,
    },
    // add username to log in
    username: {
      type: Sequelize.DataTypes.STRING,
      allowNull: false,
    },
    email: {
      type: Sequelize.DataTypes.STRING,
    },
    password: {
      type: Sequelize.DataTypes.STRING,
    },
  },
  {
    // connection to the DB
    sequelize,
    // freeze the name of this model so it's not defaulted to plural
    freezeTableName: true,
  }
);

module.exports = User;
