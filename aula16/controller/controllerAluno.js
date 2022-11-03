/*
//////////////// DOCUMENTAÇÃO \\\\\\\\\\\\\\\\\\\\\

Objetivo : Arquivo responsável pela manipulação de recebimento, tratamento e retorno de dados
entre a API e a model
Autor : HeitorPontieri
Data_criação : 06/10/2022
Versão : 1.0
*/


const { MESSAGE_ERROR, MESSAGE_SUCESS } = require('../modulo/config.js')


// Função para gerar um novo aluno
const novoAluno = async function (aluno) {

    // Validação de campos obrigatórios 
    if (aluno.nome == '' || aluno.nome == undefined || aluno.foto == undefined || aluno.foto == '' || aluno.rg == '' || aluno.rg == undefined || aluno.cpf == '' || aluno.cpf == undefined || aluno.email == '' || aluno.email == undefined || aluno.data_nascimento == '' || aluno.data_nascimento == undefined) {
        return { status: 400, message: MESSAGE_ERROR.REQUIRED_FIELDS }
    }
    // Validação para verificar email válido
    else if (!aluno.email.includes('@')) {
        return { status: 400, message: MESSAGE_ERROR.INVALID_EMAIL }
    }
    else {

        // Chama a função para inserir um novo aluno
        const novoAluno = require('../model/DAO/aluno.js')

        // Import da model alunoCurso(tabela de relação entre aluno e curso)
        const novoAlunoCurso = require('../model/DAO/aluno_curso.js')

        const resultNovoAluno = await novoAluno.insertAluno(aluno)
      
        // Verifica se os dados do novo aluno foi inserido no BD
        if (resultNovoAluno) {
            // Chamaa a função que verifica qual foi o ID gerado para o novo aluno
            let IdNovoAluno = await novoAluno.selectLastID()
            

            if (IdNovoAluno > 0) {
                // Cria um objeto JSON
                let alunoCurso = {}
                // Retorna o ano corrente 
                let ano_matricula = new Date().getFullYear()
                // Cria a matrícula do aluno (id_aluno+ id_curso + ano corrente)
                let numero_matricula = `${IdNovoAluno}${aluno.curso[0].id_curso}${ano_matricula}`
                // Cria o objeto JSON com todas as chaves e valores
                alunoCurso.id_aluno = IdNovoAluno
                alunoCurso.id_curso = aluno.curso[0].id_curso
                alunoCurso.matricula = numero_matricula
            
                if(alunoCurso.id_aluno){
                    alunoCurso.status_aluno = 'Cursando'
                }
                else{
                    alunoCurso.status_alunos = 'Inexistente'
                }
                
                
                // Chama a função para inserir na tabela alunoCurso
                const resultNovoAlunoCurso = await novoAlunoCurso.insertAlunoCursoID(alunoCurso)
             
                if (resultNovoAlunoCurso) {
                    return { status: 201, message: MESSAGE_SUCESS.INSERT_ITEM }
                }
                else {
                    // Caso aconteça neste processo, obrigatoriamente deverá ser excluído do BD o registro do aluno
                    await excluirAluno(alunoCurso.id_aluno)
                    return { status: 500, message: MESSAGE_ERROR.INTERNAL_ERROR_DB }
                }
            }
            else{
               await excluirAluno(IdNovoAluno)
               return { status: 500, message: MESSAGE_ERROR.INTERNAL_ERROR_DB }
            }
        }

        else {
            return { status: 500, message: MESSAGE_ERROR.INTERNAL_ERROR_DB }
        }
    }
}
// Função para atualizar um registro
const atualizarAluno = async function (aluno) {

    // Validação para o ID como campo obrigatório
    if (aluno.id == '' || aluno.id == undefined) {
        return { status: 400, message: MESSAGE_ERROR.REQUIRED_ID }
    }

    // Validação de campos obrigatórios 
    if (aluno.nome == '' || aluno.nome == undefined || aluno.foto == undefined || aluno.foto == '' || aluno.rg == '' || aluno.rg == undefined || aluno.cpf == '' || aluno.cpf == undefined || aluno.email == '' || aluno.email == undefined || aluno.data_nascimento == '' || aluno.data_nascimento == undefined) {
        return { status: 400, message: MESSAGE_ERROR.REQUIRED_FIELDS }
    }
    // Validação para verificar email válido
    else if (!aluno.email.includes('@')) {
        return { status: 400, message: MESSAGE_ERROR.INVALID_EMAIL }
    }
    else {
        // Chama a função para atualizar um aluno
        const atualizarAluno = require('../model/DAO/aluno.js')
        const result = await atualizarAluno.updateAluno(aluno)

        if (result) {
            return { status: 200, message: MESSAGE_SUCESS.UPDATE_ITEM }
        }
        else {
            return { status: 500, message: MESSAGE_ERROR.INTERNAL_ERROR_DB }
        }
    }
}

// Função para excluir um registro
const excluirAluno = async function (id) {
    // Validação para o ID como campo obrigatório
    if (id == '' || id == undefined) {
        return { status: 400, message: MESSAGE_ERROR.REQUIRED_ID }
    }
    else {

        // Validdação para verificar se o ID existe no BD
        const buscarAluno = await listarAlunosById(id)

        // Valida se foi encontrado um registro válido
        if (buscarAluno) {
            // Chama a função para apagar um aluno
            const deletarAluno = require('../model/DAO/aluno.js')
            const result = await deletarAluno.deleteAluno(id)

            if (result) {
                return { status: 200, message: MESSAGE_SUCESS.DELETE_ITEM }
            }
            else {
                return { status: 500, message: MESSAGE_ERROR.INTERNAL_ERROR_DB }
            }
        }
        else {
            return { status: 404, message: MESSAGE_ERROR.NOT_FOUND_DB }
        }
    }
}

// Função para retornar todos os registros
const listarAlunos = async function () {
    let dadosAlunosJSON = {}

    const result = require('../model/DAO/aluno.js')
   
    const dadosAlunos = await result.selectAllAlunos()


    if (dadosAlunos) {
         // Conversao do tipo de dados BigInt para int 
        // dadosAlunos.forEach(element => {
        //     element.id = Number(element.id)
        // })
        // dadosAlunos.reverse()

        AlunoCurso

        dadosAlunosJSON.alunos = dadosAlunos
        return dadosAlunosJSON
    }
    else {
        return false
    }

};

// Função para retornar um registro  baseado no ID
const listarAlunosById = async function (id) {
    let dadosAlunoJSON = {}


    if (id == '' || id == undefined) {
        return { status: 400, message: MESSAGE_ERROR.REQUIRED_ID }
    }
    else {
        const result = require('../model/DAO/aluno.js')
        const select = require('../model/DAO/aluno_curso.js')
        const dadosAluno = await result.selectAlunosById(id)
       
        if (dadosAluno) {
            const dadosAlunoCurso = await select.selectAlunoCurso(id)
            console.log(dadosAlunoCurso);
            if(dadosAluno){
                dadosAluno[0].curso = dadosAlunoCurso
                dadosAlunoJSON.aluno = dadosAluno
                return dadosAlunoJSON
                
            }
            else{
                dadosAlunoJSON = dadosAluno
                return dadosAlunoJSON
            }
            
        
        }
       
        else {
            return false
        }
    }
}


module.exports = {
    listarAlunos,
    novoAluno,
    excluirAluno,
    atualizarAluno,
    listarAlunosById
}
