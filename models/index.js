const User = require('./User');
const Project = require('./Project');
const Bid = require('./Bid');

User.hasMany(Project, {
  foreignKey: 'user_id',
  onDelete: 'CASCADE'
});

User.hasMany(Bid, {
  foreignKey: 'user_id',
  onDelete: 'CASCADE'
});

Project.hasMany(Bid, {
  foreignKey: 'project_id',
  onDelete: 'CASCADE'
});


Project.belongsTo(User, {
  foreignKey: 'user_id'
});

Bid.belongsTo(User, {
  foreignKey: 'user_id'
});

Bid.belongsTo(Project, {
  foreignKey: 'project_id'
});

module.exports = { User, Project, Bid };
