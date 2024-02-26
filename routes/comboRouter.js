const express = require('express');
const router = express.Router();
const { getCombinedData } = require('../controllers/comboApi');

router.get('/combo', getCombinedData);

module.exports = router;
