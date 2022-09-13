//  Objetivo : Montar um API buscando livros por uma palavra-chave
//  Autor : HeitorPontieri
//  Data : 12/09/22
//  Versão : 1.2
// 
// 
// 
// 

const express = require('express')
const { request, response } = require('express')

const cors = require('cors')
const bodyParser = require('body-parser')

const { getLivros } = require('./modulos/livros')


const app = express()

app.use((request, response, next) => {

    response.header('Access-Control-Allow-Origin', '*')
    response.header('Access-Control-Allow-Methods', 'GET, PUT, POST, DELETE,OPTIONS')

    app.use(cors())
    next()

})

app.get('/livros/:nome', cors(), async function (request, response, next) {

    // Recebe a variavel que será enviada na requisição por parametro de URL
    let chave = request.params.nome
    let liv = getLivros(chave)
    let livJSON = {}

    if (liv) {
        livJSON.liv = liv
        response.status(200)
        response.json(liv)
    }
    else {
        response.status(404)
        response.json('{message : Nenhum item encontrado}')
    }

})


app.get('/livros/', cors(), async function (request, response, next){
    
    // Recebe a variavel que será enviada na requisição por QueryString(indicada quando precisamos criar filtros)
    let chave = request.query.nome
    let liv = getLivros(chave)
    let livJSON = {}

    if (liv) {
        livJSON.liv = liv
        response.status(200)
        response.json(liv)
    }
    else {
        response.status(404)
        response.json('{message : Nenhum item encontrado}')
    }

})
    



app.listen(8080, function () {
    console.log('Servidor aguardando requisições')
})
