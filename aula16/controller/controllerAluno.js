/*
//////////////// DOCUMENTAÇÃO \\\\\\\\\\\\\\\\\\\\\

Objetivo : Arquivo responsável pela manipulação de recebimento, tratamento e retorno de dados
entre a API e a model
Autor : HeitorPontieri
Data_criação : 06/10/2022
Versão : 1.0
*/


const {MESSAGE_ERROR, MESSAGE_SUCESS} = require('../modulo/config.js')   

// Função para gerar um novo aluno
const novoAluno = async function (aluno) {

    // Validação de campos obrigatórios 
    if (aluno.nome == '' ||aluno.nome == undefined ||aluno.foto == undefined || aluno.foto == '' || aluno.rg == ''||aluno.rg == undefined ||  aluno.cpf == '' || aluno.cpf == undefined || aluno.email == ''|| aluno.email == undefined || aluno.data_nascimento == ''|| aluno.data_nascimento == undefined ) {
        return { status: 400, message: MESSAGE_ERROR.REQUIRED_FIELDS}
    }
    // Validação para verificar email válido
    else if (!aluno.email.includes('@')) {
        return{status : 400, message :MESSAGE_ERROR.INVALID_EMAIL} 
    }
    else {
        // Chama a função para inserir um novo aluno
        const novoAluno = require('../model/DAO/aluno.js')
        const result = await novoAluno.insertAluno(aluno)

        if (result) {
            return {status : 201 , message: MESSAGE_SUCESS.INSERT_ITEM}
        }
        else {
            return {status : 500, message :MESSAGE_ERROR.INTERNAL_ERROR_DB} 
        }
    }
}
// Função para atualizar um registro
const atualizarAluno = async function (aluno) {
    
    // Validação para o ID como campo obrigatório
    if(aluno.id == '' || aluno.id == undefined){
        return { status: 400, message: MESSAGE_ERROR.REQUIRED_ID}
    }
    
    // Validação de campos obrigatórios 
    if (aluno.nome == '' ||aluno.nome == undefined ||aluno.foto == undefined || aluno.foto == '' || aluno.rg == ''||aluno.rg == undefined ||  aluno.cpf == '' || aluno.cpf == undefined || aluno.email == ''|| aluno.email == undefined || aluno.data_nascimento == ''|| aluno.data_nascimento == undefined ) {
        return { status: 400, message: MESSAGE_ERROR.REQUIRED_FIELDS}
    }
    // Validação para verificar email válido
    else if (!aluno.email.includes('@')) {
        return{status : 400, message :MESSAGE_ERROR.INVALID_EMAIL} 
    }
    else {
        // Chama a função para atualizar um aluno
        const atualizarAluno = require('../model/DAO/aluno.js')
        const result = await atualizarAluno.updateAluno(aluno)

        if (result) {
            return {status : 200 , message: MESSAGE_SUCESS.INSERT_ITEM}
        }
        else {
            return {status : 500, message :MESSAGE_ERROR.INTERNAL_ERROR_DB} 
        }
    }
}

// Função para excluir um registro
const excluirAluno = async function (id) {

}

// Função para retornar todos os registros
const listarAlunos = async function () {
    let dadosAlunosJSON = {}

    const result = require('../model/DAO/aluno.js')
    const dadosAlunos = await result.selectAllAlunos()

    if (dadosAlunos) {
        // Conversao do tipo de dados BigInt para int 
        dadosAlunos.forEach(element => {
            element.id = Number(element.id)
        })
        // dadosAlunos.reverse()
        dadosAlunosJSON.alunos = dadosAlunos
        return dadosAlunosJSON
    }
    else {
        return false
    }

};

module.exports = {
    listarAlunos,
    novoAluno,
    excluirAluno,
    atualizarAluno
}
