const express = require('express');
const transactController = require('../controllers/transact');

const router = express.Router();


router.get('/transacts', transact.listTransactions);

module.exports = router;