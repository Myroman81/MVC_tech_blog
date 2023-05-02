const router = require('express').Router();
const userRoutes = require('./user-routes');
//const postRoutes = require('./post-routes');
//const commentRoutes = require('./comment-routes')

// All of these routes are prefixed with '/api'
router.use('/users', userRoutes);
//router.use('/posts', postRoutes);
//router.use('/comments',commentRoutes);

module.exports = router;