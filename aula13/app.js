/*

Objetivo : Aprender a fazer uma API
autor : HeitorPontierii
Data : 01/09/22
Versão : 1.0

*/

/*
    bibliotecas necessárias para criar uma API
        É uma biblioteca para criar aplicações em node em formato de API
                express - npm install express -- save
                
        É uma biblioteca para manipular as permissões do protocolo http 
                cors - npm install cors --save

        É uma biblioteca que permite manipular o corpo do protocolo http
                body-parser - npm install body-parser --save
        
*/

// Import da biblioteca do express para criar a API
const express = require('express')

// Import da biblioteca do cors para manipular as permissoes do protocolo http
const cors = require('cors')

// Import da biblioteca do body-parser qie irá manipular o conteúdo das requisicoes do protocolo http
const bodyParser = require('body-parser')
const { request, response } = require('express')

// Cria um objeto criado app que será especialista nas funções do express
const app = express()

// request - recebe dados
// response - devolve dados
app.use((request, response, next) => {
        
        // Permite especificar quem serão os IPs que podem acessar a API
                // * = todos 
        response.header('Access-Control-Allow-Origin','*')
        
        // Permite especificar quais serão os verbos(métodos) que a API irá reconhecer
        response.header('Access-Control-Allow-Methods','GET, PUT, POST, DELETE , OPTIONS')

        // Estabelece que as permissões acima serão representadas pelo cors
        app.use(cors())

        next()
})

// EndPoints
        // São 'ouvidos' colocados dentro da API, esperando uma palavra ser requisitada para fazer algo

app.get('/estados', cors(), async function(request,response){

        let message = {mensagem : 'Bem-vindo a API dos estados'}
        
        
        response.status(200)
        response.json(message)
})
app.get('/cidades', cors(), async function(request,response){

        let message = {mensagem : 'Bem-vindo a API das cidades'}
        
        
        response.status(200)
        response.json(message)
})

// Para que os endpoints possam estar funcionando, precisamos obrigatoriamente finalizar a API essa function, que represemta o start da API
app.listen(8080, function(){
        console.log(' Servidor aguardando requisições')
})

