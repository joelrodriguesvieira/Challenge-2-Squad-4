const mongoose = require('mongoose');

const ticketSchema = new mongoose.Schema({
    seat: {
        type: String,
        required: true,   
    },
    value: {
        type: Number,
        required: true,
    },    
    session: {
        type: mongoose.Schema.Types.Mixed,
        ref: 'Session',
        required: true,    
    },
    movie: {
        type: mongoose.Schema.Types.Mixed,
        ref: 'Movie',
        required: true,
    }
    
});

module.exports = mongoose.model('Tickets', ticketSchema);