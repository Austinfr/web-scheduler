const { Schema, model } = require('mongoose');

const appointmentSchema = new Schema({
    id: {
        type: Number,
        required: true,
        unique: true,
        trim: true
    },
    appointmentDate: {
        type: Date,
        required: true,
    },
    appointmentType: {
        type: String,
        required: true,
    }
});

const Appointment = model('Appointment' , appointmentSchema);

module.exports = Appointment;