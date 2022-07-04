const User = require("./User");
const Tasks = require("./Tasks");

// Table associations

// each user will have many tasks
User.hasMany(Tasks, {
  // foreign keys are defined using the target model when using 'hasMany'
  foreignKey: "user_id",
});

// each task will have a single creator
Tasks.belongsTo(User, {
  // foreign keys are defined using the source model when using 'belongsTo'
  foreignKey: "user_id",
});

module.exports = { User, Tasks };
