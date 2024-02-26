const barService = require('../services/barService');

const getBarChartData = async (req, res) => {
  const { month } = req.query;
  const barChartData = await barService.getBarChartData(month);
  res.status(200).json(barChartData);
};

module.exports = {
  getBarChartData,
};
