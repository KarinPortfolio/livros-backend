const express = require("express")
const router = express.Router()

const app = express()
const porta = 3333

function mostraLivros(request, response) {
 response.json({
    nome: 'Joaninha Inha',
    autor: 'Eliete Elizete',
    imagem: 'sem imagem',
    resumo: 'Desvendando a vida da joaninha Inha'
 })
}

function mostraPorta() {
    console.log("Servidor criado e rodando na porta ", porta)
}

app.use(router.get('/mulher', mostraLivros))
app.listen(porta, mostraPorta)