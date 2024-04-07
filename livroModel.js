const mongoose = require('mongoose')
const LivroSchema = new mongoose.Schema({
    nome:{
        type: String,
        required: true
    },
    autor:{
        type: String,
        required: true
    },
    imagem:{
        type: String,
        required: true
    },
    resumo:{
        type: String,
        required: true
    }
})
module.exports = mongoose.model('livro', LivroSchema)