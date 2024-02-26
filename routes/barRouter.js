const express = require('express');
const barChartController = require('../controllers/barChart');

const router = express.Router();

router.get('/bar', barChart.getBarChartData);

module.exports = router;
