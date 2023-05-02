const user = require('./user');
const comment = require('./comment');
const post = require('./post');

user.hasMany(post, {
    foreignKey: 'user_id'
});

user.hasMany(comment, {
    foreignKey: 'user_id'
});

comment.belongsTo(user, {
    foreignKey: 'user_id',
    onDelete: 'cascade',
});

comment.belongsTo(post, {
    foreignKey: 'post_id',
    onDelete: 'cascade'
});

post.belongsTo(user, {
    foreignKey: 'user_id',
    onDelete: 'cascade',
});

post.hasMany(comment, {
    foreignKey: 'post_id',
    onDelete: 'cascade'
});

module.exports = { user, post, comment };


