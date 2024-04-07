const express = require("express")
const router = express.Router()
const cors = require("cors")
const conectaBancoDeDados = require("./bancoDeDados")
conectaBancoDeDados()

const Livro = require('./livroModel')
const app = express()
app.use(express.json())
app.use(cors())
const porta = 3333

//GET
async function mostraLivros(request, response){
    try{
        const bancoDeDados = await
        Livro.find()
        response.json(bancoDeDados)
    }catch(erro){
        console.log(erro)
    }
}
//POST
async function criaLivro(request, response){
    

        const novoLivro = new Livro({
            nome: request.body.nome,
            autor: request.body.autor,
            imagem: request.body.imagem,
            resumo: request.body.resumo
        })
        try{
            const livroCriado = await novoLivro.save()
            response.status(201).json(livroCriado)
        }
    catch(erro){
        console.log(erro)
    }
}

//PATCH
async function corrigeLivro(request, response){
    try{
        const livroEncontrado = await Livro.findById(request.params.id)
        if(request.body.nome){
            livroEncontrado.nome = request.body.nome
        }
        if(request.body.autor){
            livroEncontrado.autor = request.body.autor
        }
        if(request.body.imagem){
            livroEncontrado.imagem = request.body.imagem
        }
        if(request.body.resumo){
            livroEncontrado.resumo = request.body.resumo
        }
const livroAtualizado = await livroEncontrado.save()
response.json(livroAtualizado)
    }catch(erro){
        console.log(erro)
    }
}
//DELETE
async function deletaLivro(request, response){
    try{
        await Livro.findByIdAndDelete(request.params.id)
        response.json({mensagem: 'Livro deletado com sucesso!'})
    }catch(erro){console.log(erro)}
}

app.use(router.get('/livros', mostraLivros))
app.use(router.post('/livros', criaLivro))
app.use(router.patch('/livros/:id', corrigeLivro))
app.use(router.delete('/livro/:id', deletaLivro))

//PORTA
function mostraPorta(){
    console.log("Servidor rodando na porta ", porta)
}
app.listen(porta, mostraPorta)
