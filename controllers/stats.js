const statsService = require('../services/statsService');

const getStatistics = async (req, res) => {
  const { month } = req.query;
  const statistics = await statsService.getStatistics(month);
  res.status(200).json(statistics);
};

module.exports = {
  getStatistics,
};
