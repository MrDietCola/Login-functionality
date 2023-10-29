const router = require('express').Router();

const userRoutes = require('./userRoutes');
const taskRoutes = require('./taskRoutes');
const taskForUserRoutes = require('./taskForUsersRoutes')

router.use('/users', userRoutes);
router.use('/task', taskRoutes);
router.use('/taskForUser', taskForUserRoutes)


module.exports = router;
