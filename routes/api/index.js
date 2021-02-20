const router = require('express').Router();

const quizRoutes = require('./quiz');

router.use('/quiz', quizRoutes);

module.exports = router;
