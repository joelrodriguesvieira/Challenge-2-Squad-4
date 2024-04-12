const mongoose = require('mongoose');

const movieSchema = new mongoose.Schema({
    name: {
        type: String,
        required: true,
        maxlength: 50,    
    },
    image: {
        type: String,
        required: true,    
    },
    description: {
        type: String,
        required: true,
        maxlength: 500,    
    },
    cast: [{
            type: String,
            required: true,
    }],
    genre: {
        type: String,
        required: true,    
    },
});

module.exports = mongoose.model('Movie', movieSchema);