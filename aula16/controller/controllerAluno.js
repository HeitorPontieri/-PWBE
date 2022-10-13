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

    // Validação de campos obrigatórios 
    if (aluno.nome == '' ||aluno.nome == undefined ||aluno.foto == undefined || aluno.foto == '' || aluno.rg == ''||aluno.rg == undefined ||  aluno.cpf == '' || aluno.cpf == undefined || aluno.email == ''|| aluno.email == undefined || aluno.data_nascimento == ''|| aluno.data_nascimento == undefined ) {
        return false
    }
    // Validação para verificar email válido
    else if (!aluno.email.includes('@')) {
        return false
    }
    else {
        // Chama a função para inserir um novo aluno
        const novoAluno = insertAluno
        const result = novoAluno(aluno)

        if (result) {
            return true
        }
        else {
            return false
        }
    }
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
