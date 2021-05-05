const router = require('express').Router();
const userRoutes = require('./userRoutes');
const projectRoutes = require('./projectRoutes');
const bidRoutes = require('./bidRoutes');

router.use('/users', userRoutes);
router.use('/projects', projectRoutes);
router.use('/bids', bidRoutes);

module.exports = router;
