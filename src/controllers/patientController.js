const Patient = require('../models/patientModel');
const Report = require('../models/reportModel');

exports.register = async (req, res) => {
    try {
        const { phoneNumber } = req.body;
        let patient = await Patient.findOne({ phoneNumber });
        if (!patient) {
            patient = new Patient({ phoneNumber });
            await patient.save();
        }
        res.status(201).json({ patient });
    } catch (error) {
        console.error(error);
        res.status(500).json({ error: 'Internal Server Error' });
    }
};

exports.createReport = async (req, res) => {
    try {
        const { id } = req.params;
        const { createdByDoctor, status } = req.body;
        const report = new Report({ createdByDoctor, patient: id, status });
        await report.save();
        res.status(201).json({ report });
    } catch (error) {
        console.error(error);
        res.status(500).json({ error: 'Internal Server Error' });
    }
};

exports.getAllReports = async (req, res) => {
    try {
        const { id } = req.params;
        const reports = await Report.find({ patient: id }).sort({ date: 'asc' });
        res.json({ reports });
    } catch (error) {
        console.error(error);
        res.status(500).json({ error: 'Internal Server Error' });
    }
};
