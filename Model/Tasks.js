// import Sequelize Object
const Sequelize = require("sequelize");
// import connection to DB
const sequelize = require("../config/connection");

class Tasks extends Sequelize.Model {}

Tasks.init(
  // Pass Tasks table data
  {
    title: {
      type: Sequelize.DataTypes.STRING,
      // Don't force the user to add a value so a default name will be created
      allowNull: true,
      defaultValue: "Your Task",
    },
    description: {
      type: Sequelize.DataTypes.TEXT,
      allowNull: false,
    },
    date_created: {
      // adds the current timestamp when entity is created
      type: Sequelize.DataTypes.NOW,
    },
    date_due: {
      // allow the user to decide when they need this done
      type: Sequelize.DataTypes.DATE,
      allowNull: false,
    },
    difficulty: {
      // user will enter anticipated difficulty to help anticipate length of time required
      // the interface will have a select designation that corresponds to a number
      type: Sequelize.DataTypes.SMALLINT,
    },
    urgency: {
      // user will choose how urgent the task is
      type: Sequelize.DataTypes.INTEGER,
      allowNull: false,
    },
    importance: {
      // user will rate how important the task is
      type: Sequelize.DataTypes.INTEGER,
      allowNull: false,
    },
  },
  // pass model options
  {
    // add connection to the database
    sequelize,
    // freeze the table/model name so its not changed by default
    freezeTableName: true,

    // DO I WANT TO SYNC THE TABLES AUTOMATICALLY?
  }
);

// export model
module.exports = Tasks;
