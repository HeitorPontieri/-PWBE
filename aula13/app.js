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
    response.header('Access - Control - Allow -- Origin','*')
})