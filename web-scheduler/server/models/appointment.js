const { Schema, model } = require('mongoose');

const appointmentSchema = new Schema({
    appointmentType: {
        type: String,
        required: true,
    },
    appointmentDate: {
        type: Date,
        required: true,
    }
});

const Appointment = model('Appointment' , appointmentSchema);

module.exports = Appointment;