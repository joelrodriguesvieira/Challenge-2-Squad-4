const mongoose = require('mongoose');

const ingressoSchema = new mongoose.Schema({
    cadeira: {
        type: String,
        required: true,   
    },
    valor: {
        type: Number,
        required: true,
    },    
    sessao: {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'Sessoes',
        required: true,    
    },
    filme: {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'Filmes',
        required: true,
    }
    
});

module.exports = mongoose.model('Ingressos', ingressoSchema);