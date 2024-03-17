const { Schema, model } = require('mongoose');

const workerSchema = new Schema({
    fullName: {
        type: String,
        required: true
    },
    specialty: {
        type: String,
        required: true
    },
    schedule:{
        dayOfWeek: {
            type: String,
            required: true
        },
        start: {
            type: String,
            required: true
        },
        end: {
            type: String,
            required: true
        },
    },
    office:{
        type: Number,
        required: true,
    },
    area: {
        type: String,
        required: true
    }
},
{
    timestamp: true
})

module.exports = model('workers', workerSchema);