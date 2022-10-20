/*
//////////////// DOCUMENTAÇÃO \\\\\\\\\\\\\\\\\\\\\

Objetivo : API responsável pela manipulação de dados do back-End
    (GET, POST , PUT, DELETE)
Autor : HeitorPontieri
Data_criação : 10/10/2022
Versão : 1.0

////////////////// ANOTAÇÕES \\\\\\\\\\\\\\\\\\\\

npm install express --save
 npm install cors -- save
 npm install body-parser --save
 
 Para manipular o acesso a BD podemos utizar o Prisma
    Para instalar o prisma, devemos rodar os seguintes comandos
         npm install prisma --save
         npx prisma
         npx init prisma
         npm install @prisma/client
        
        
 Modelo de Trabalho 
     MVC
    ||> Model -> Manipula dados com o BD
     ||> View -> Dados de manipulação do usuário (front-end)
     ||> Controller -> Recebe, trata, busca dados (back-end)


        View (HTML,CSS, JS) --> API --> Controller (Node.js) --> Model(Insert, Select, Update e Delete) --> Banco de Dados


*/

// Import das bibliotecas
const express = require('express')
const bodyParser = require('body-parser')
const cors = require('cors')
const { json } = require('body-parser')

// Arquivo de mensagens padronizadas 
const {MESSAGE_ERROR, MESSAGE_SUCESS} = require('./modulo/config.js')

const app = express()

// Configuração de cors para liberar o acesso a API 
app.use((request, response, next) =>{
    response.header('Acess-Control-Allow-Origin', '*')
    response.header('Acess-Control-Allow-Methods', 'GET,PUT,POST,DELETE,OPTIONS')
    app.use(cors())
    next()
})

// Criamos um objeto que permite receber um json no body das requisições 

const jsonParser = bodyParser.json()
// ROTAS PARA CRUD (Create, Read, Update e Delete) DE ALUNOS \\ 
// Data : 10/10/22 \\

// EndPoint para listar todos os alunos
app.get('/alunos',cors(), async function(request,response){

   let statusCode
   let message
   
    // Import do aquivo controllerAluno
    const controllerAluno = require ('./controller/controllerAluno.js')

    // Retorna todos os alunos existentes no Banco de Dados
    const dadosAlunos = await controllerAluno.listarAlunos()

    if(dadosAlunos){
        // Status 200
        statusCode = 200
        message = dadosAlunos
    }
    else{
        // Status 400
        statusCode = 400
        message = MESSAGE_ERROR.NOT_FOUND_DB
    }     
    // Retorna os dados da API
    response.status(statusCode)
    response.json(message)
})

// EndPoint para receber um novo aluno
app.post('/aluno', cors(),jsonParser,async function(request, response){
    let statusCode
    let message
    
    // Content-Type é a variável que traz o formato de dados da requisição
    let headerContentType

    // Recebe o tipo de content type que foi enviado no header da requisição 
    headerContentType = request.headers['content-type']

    // Valida o tipo do content type é do tipo application/json
    if(headerContentType == 'application/json'){
        // Recebe do corpo da mensagem o conteúdo,
        let dadosBody = request.body
        
        // Realiza um processo de conversão de dados para conseguir comparar o json vazio
        if(JSON.stringify(dadosBody) != '{}'){
            // Import do arquivo da controller
            const controllerAluno = require('./controller/controllerAluno.js')
            // Chama a funcao novoAluno da controller e encaminha os dados do body
            const novoAluno = await controllerAluno.novoAluno(dadosBody)
            statusCode = novoAluno.status
            message = novoAluno.message
        }
        else{
            statusCode = 400
            message = MESSAGE_ERROR.EMPTY_BODY
        }
    }
    else{
        statusCode = 415
        message = MESSAGE_ERROR.CONTENT_TYPE
    }
    response.status(statusCode)
    response.json(message)
})

app.put('/atualizar/aluno', cors(),jsonParser,async function(request, response){
    let statusCode
    let message
    
    // Content-Type é a variável que traz o formato de dados da requisição
    let headerContentType

    // Recebe o tipo de content type que foi enviado no header da requisição 
    headerContentType = request.headers['content-type']

    // Valida o tipo do content type é do tipo application/json
    if(headerContentType == 'application/json'){
        // Recebe do corpo da mensagem o conteúdo,
        let dadosBody = request.body
        
        // Realiza um processo de conversão de dados para conseguir comparar o json vazio
        if(JSON.stringify(dadosBody) != '{}'){
            // Import do arquivo da controller
            const controllerAluno = require('./controller/controllerAluno.js')
            // Chama a funcao novoAluno da controller e encaminha os dados do body
            const atualizarAluno = await controllerAluno.atualizarAluno(dadosBody)
            statusCode = atualizarAluno.status
            message = atualizarAluno.message
        }
        else{
            statusCode = 400
            message = MESSAGE_ERROR.EMPTY_BODY
        }
    }
    else{
        statusCode = 415
        message = MESSAGE_ERROR.CONTENT_TYPE
    }
    response.status(statusCode)
    response.json(message)
})


// Ativa o servidor para receber requisições HTTP   
app.listen(8080, function(){
    console.log('Servidor aguardando requisições')
}) 