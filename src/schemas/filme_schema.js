const mongoose = require('mongoose');

const filmeSchema = new mongoose.Schema({
    nome: {
        type: String,
        required: true,
        maxlength: 50,    
    },
    imagem: {
        type: String,
        required: true,    
    },
    descricao: {
        type: String,
        required: true,
        maxlength: 500,    
    },
    atores: [{
            type: String,
            required: true,
    }],
    genero: {
        type: String,
        required: true,    
    },
});

module.exports = mongoose.model('Filmes', filmeSchema);