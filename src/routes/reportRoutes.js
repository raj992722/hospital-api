const express = require('express');
const router = express.Router();
const reportController = require('../controllers/reportController');

// Routes
router.get('/:status', reportController.getAllReportsByStatus);

module.exports = router;
