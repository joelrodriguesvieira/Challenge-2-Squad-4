const mongoose = require('mongoose');

const sessaoSchema = new mongoose.Schema({
    capacidade: {
        type: Number,
        required: true,
    },
    sala: {
        type: String,
        required: true,   
    },    
    horario: {
        type: Date,
        required: true,    
    },
    filme: {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'Filmes',
        required: true,
    }
    
});

module.exports = mongoose.model('Sessoes', sessaoSchema);