const mongoose = require('mongoose')
require('dotenv').config()

async function conectaBancoDeDados(){
    try{
        console.log('A conexão iniciou')
        await mongoose.connect(process.env.MONGO_URL)
        console.log('Conectado com sucesso!')
    }catch(erro){
        console.log(erro)
    }
}
module.exports = conectaBancoDeDados