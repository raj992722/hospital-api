const express = require('express');
const router = express.Router();
const patientController = require('../controllers/patientController');

// Routes
router.post('/register', patientController.register);
router.post('/create_report/:id', patientController.createReport);
router.get('/all_reports/:id', patientController.getAllReports);

module.exports = router;
