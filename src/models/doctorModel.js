const mongoose = require('mongoose');
const bcrypt = require('bcrypt');

const doctorSchema = new mongoose.Schema({
    username: { type: String, required: true, unique: true },
    password: { type: String, required: true }
});

// Hash the password before saving to the database
doctorSchema.pre('save', async function (next) {
    const doctor = this;
    if (doctor.isModified('password')) {
        doctor.password = await bcrypt.hash(doctor.password, 10);
    }
    next();
});

const Doctor = mongoose.model('Doctor', doctorSchema);

module.exports = Doctor;
