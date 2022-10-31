/*
//////////////// DOCUMENTAÇÃO \\\\\\\\\\\\\\\\\\\\\

Objetivo : Arquivo responsável pela manipulação de recebimento, tratamento e retorno de dados
entre a API e a model da tabela de cursos
Autor : HeitorPontieri
Data_criação : 27/10/2022
Versão : 1.0

*/

const { MESSAGE_ERROR, MESSAGE_SUCESS } = require('../modulo/config.js')
const dao = require('../model/DAO/curso')


const novoCurso = async function (curso) {
    if (curso.nome == '' || curso.nome == undefined || curso.carga_horaria == '' || curso.carga_horaria == undefined) {
        return { status: 400, message: MESSAGE_ERROR.REQUIRED_FIELDS }
    }
    else {
        const dadosCurso = await dao.insertCurso(curso)

        if (dadosCurso) {
            return { status: 201, message: MESSAGE_SUCESS.INSERT_ITEM }
        }
        else {
            return { status: 500, message: MESSAGE_ERROR.INTERNAL_ERROR_DB }
        }
    }

}

const atualizarCurso = async function (curso) {

    if (curso.id == '' || curso == undefined) {
        return { status: 400, message: MESSAGE_ERROR.REQUIRED_ID }
    }
    if (curso.nome == '' || curso.nome == undefined || curso.carga_horaria == '' || curso.carga_horaria == undefined) {
        return { status: 400, message: MESSAGE_ERROR.REQUIRED_FIELDS }
    }
    else {
        const dadosCurso = await dao.updateCurso(curso)
        if (dadosCurso) {
            return { status: 200, message: MESSAGE_SUCESS.UPDATE_ITEM }
        }
        else {
            return { status: 500, message: MESSAGE_ERROR.INTERNAL_ERROR_DB }
        }
    }
}

const excluirCurso = async function (id) {
   
    if (id == '' || id == undefined) {
        return { status: 400, message: MESSAGE_ERROR.REQUIRED_ID }
    }
    else {
        const curso = await listarCursoById(id)
        if (curso) {
            const result = await dao.deleteCurso(id)
            console.log(result)
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

const listarCursoById = async function (id) {
    let dadosCursoJSON = {}

    if (id == '' || id == undefined) {
        return { status: 400, message: MESSAGE_ERROR.REQUIRED_ID }
    }
    else {
        const curso = await dao.selectCursoById(id)
        if (curso) {
            dadosCursoJSON.curso = curso
            return dadosCursoJSON
        }
        else {
            return false
        }
    }
}

const listarCursos = async function () {

    let dadosCursoJSON = {}

    const dadosCurso = await dao.selectCurso()

    if (dadosCurso) {

        dadosCursoJSON.curso = dadosCurso

        return dadosCursoJSON
    }
    else {
        return false
    }
}


module.exports = {
    novoCurso,
    atualizarCurso,
    excluirCurso,
    listarCursoById,
    listarCursos

}