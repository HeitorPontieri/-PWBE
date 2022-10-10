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
        message = 'Nenhum aluno encontrado'
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

    headerContentType = request.headers['content-type']

    if(headerContentType == 'application/json'){
        let dadosBody = request.body
        
        if(dadosBody == undefined){
             statusCode = 200
            message ='Sucesso'
        }
        else{
            statusCode = 400
            message = ' Este tipo de requisição precisa de conteúdo no body '
        }
       
    }
    else{
        statusCode = 415
        message = ' Tipo de mídia não suportado. Esta requisição aceita apenas (application/json) '
    }
    response.status(statusCode)
    response.json(message)
})

// Ativa o servidor para receber requisições HTTP   
app.listen(8080, function(){
    console.log('Servidor aguardando requisições')
})