const express = require('express');
const statisticsController = require('../controllers/stats');

const router = express.Router();

router.get('/stats', stats.getStatistics);

module.exports = router;
