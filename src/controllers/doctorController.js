const Doctor = require('../models/doctorModel');
const jwt = require('jsonwebtoken');
const bcrypt = require('bcrypt');

exports.register = async (req, res) => {
    try {
        const { username, password } = req.body;
        const doctor = new Doctor({ username, password });
        await doctor.save();
        res.status(201).json({ message: 'Doctor registered successfully!' });
    } catch (error) {
        console.error(error);
        res.status(500).json({ error: 'Internal Server Error' });
    }
};

exports.login = async (req, res) => {
    try {
        const { username, password } = req.body;
        const doctor = await Doctor.findOne({ username });
        if (!doctor) {
            return res.status(401).json({ error: 'Invalid credentials' });
        }
        // const isPasswordValid = await bcrypt.compare(password, doctor.password);
        // if (!isPasswordValid) {
        //     return res.status(401).json({ error: 'Invalid credentials' });
        // }
        const token = jwt.sign({ doctorId: doctor._id }, process.env.JWT_SECRET);
        res.json({ token,doctor});
    } catch (error) {
        console.error(error);
        res.status(500).json({ error: 'Internal Server Error' });
    }
};
