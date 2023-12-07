const Report = require('../models/reportModel');

exports.getAllReportsByStatus = async (req, res) => {
    try {
        const { status } = req.params;
        const reports = await Report.find({ status }).sort({ date: 'asc' });
        res.json({ reports });
    } catch (error) {
        console.error(error);
        res.status(500).json({ error: 'Internal Server Error' });
    }
};
