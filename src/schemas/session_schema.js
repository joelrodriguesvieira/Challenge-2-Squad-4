const mongoose = require('mongoose');

const sessionSchema = new mongoose.Schema({
    capacity: {
        type: Number,
        required: true,
    },
    movieTheater: {
        type: String,
        required: true,   
    },    
    time: {
        type: Date,
        required: true,    
    },
    movie: {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'Movies',
        required: true,
    }
    
});

module.exports = mongoose.model('Sessions', sessionSchema);