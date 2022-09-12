
const express = require('express')
const {request , response} = require('express')
const cors = require('cors')
const bodyParser = require('body-parser')

const {getLivros} = require('./modulos/livros')


const app = express()

app.use((request,response, next) => {
    
    response.header('Access-Control-Allow-Origin', '*')
    response.header('Access-Control-Allow-Methods', 'GET, PUT, POST, DELETE,OPTIONS')
    
    app.use(cors())
    next()

})  

app.get('/livros/:book', cors(), async function(request, response, next){

    let chave = request.params.book

    let liv = getLivros(chave)
    let livJSON = {}

    if(liv){
        livJSON.liv = liv
        response.status(200)
        response.json(liv)
    }
    else{
        response.status(404)
        response.json('{message : Nenhum item encontrado}')
    }

})

app.listen(8080, function (){
    console.log('Servidor aguardando requisições')
})
