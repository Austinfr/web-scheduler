const { Schema, model } = require('mongoose');

const stockSchema = new Schema({
    id: {
        type: Number,
        required: true,
        unique: true,
        trim: true
    },
    name: {
        type: String,
        required: true,
        unique: true,
        trim: true,
    },
    quantity: {
        type: Number,
        trim: true,
    },
    description: {
        type: String,
        trim: true,
    }
});

const Stock = model('Stock', stockSchema);

module.exports = Stock;