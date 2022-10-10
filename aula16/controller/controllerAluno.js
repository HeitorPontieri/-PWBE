/*
Objetivo : Arquivo responsável pela manipulação de recebimento, tratamento e retorno de dados
entre a API e a model
Autor : HeitorPontieri
Data_criação : 06/10/2022
Versão : 1.0
*/
const { selectAllAlunos, deleteAluno, updateAluno, insertAluno } = require('../model/DAO/aluno.js')

// Função para gerar um novo aluno
const novoAluno = async function (aluno) {

}
// Função para atualizar um registro
const atualizarAluno = async function (aluno) {

}

// Função para excluir um registro
const excluirAluno = async function (id) {

}

// Função para retornar todos os registros
const listarAlunos = async function () {
    let dadosAlunosJSON = {}

    const dadosAlunos = await selectAllAlunos()




if (dadosAlunos) {
    // Conversao do tipo de dados  BigInt para int 
    dadosAlunos.forEach(element => {
        element.id = Number(element.id)
    })
    dadosAlunosJSON.alunos = dadosAlunos

    return dadosAlunosJSON
}
else {
    return false
}

};


module.exports = {
    listarAlunos
}
