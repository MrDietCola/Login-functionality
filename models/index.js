const User = require('./User');
const Task = require('./Task');
const TaskForUser = require('./TaskForUser')

Task.belongsTo(User, {
  foreignKey: 'author_id'
})

User.hasMany(Task, {
  foreignKey: 'author_id'
})

User.belongsToMany(Task, {
  through: {
    model: TaskForUser,
    unique: false
  },
  as: 'task_by_user'
});

Task.belongsToMany(User, {
  through: {
    model: TaskForUser,
    unique: false
  },
  as: 'user_by_task'
})



module.exports = { User, Task, TaskForUser };
