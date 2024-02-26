const express = require('express');
const router = express.Router();
const pieService = require('../services/pieService');

router.get('/pie', async (req, res) => {
  try {
    const { month } = req.query;
    const pieChartData = await pieService.getPieChartData(month);
    res.json(pieChartData);
  } catch (error) {
    console.error('Error fetching pie chart data:', error);
    res.status(500).json({ message: 'Internal server error' });
  }
});

module.exports = router;
