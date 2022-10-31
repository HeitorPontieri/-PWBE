/*

//////////////// DOCUMENTAÇÃO \\\\\\\\\\\\\\\\\\\\\
Objetivo : Arquivo responsável pela manipulação de dados com o banco de dados (insert,update,delete,select)
Autor : HeitorPontieri
Data_criação : 27/10/2022
Versão : 1.0

*/

const insertCurso = async function (curso) {

    try {
        const { PrismaClient } = require('@prisma/client')

        const prisma = new PrismaClient()

        let sql = `insert into tbl_curso(nome,carga_horaria,icone,sigla) values ('${curso.nome}', '${curso.carga_horaria}', '${curso.icone}', '${curso.sigla}')`

        const result = await prisma.$queryRawUnsafe(sql)

        if (result) {
            return true
        }
        else {
            return false
        }

    } catch (error) {
        return false
    }
}

const updateCurso = async function (curso) {

    try {
        const { PrismaClient } = require('@prisma/client')

        const prisma = new PrismaClient()


        let sql = `update tbl_curso set nome = '${curso.nome}', carga_horaria = '${curso.carga_horaria}',icone = '${curso.icone}', sigla = '${curso.sigla}' where id = '${curso.id}'`

        const result = await prisma.$queryRawUnsafe(sql)

        if (result) {
            return true
        }
        else {
            return false
        }
    } catch (error) {
        return false
    }
}

const deleteCurso = async function (id) {

    try {
        const { PrismaClient } = require('@prisma/client')

        const prisma = new PrismaClient()

        let sql = `delete from tbl_curso where id = '${id}' `
        console.log(sql)
        
        let result = await prisma.$queryRawUnsafe(sql)

        if (result) {
            return true
        }
        else {
            return false
        }

    } catch (error) {
        return false
    }
}

const selectCurso = async function () {
    const { PrismaClient } = require('@prisma/client')

    const prisma = new PrismaClient()

    let sql = `select cast(id as float) as id, nome, carga_horaria,icone,sigla from tbl_curso`

    const result = await prisma.$queryRawUnsafe(sql)


    if (result.length > 0) {
        return result
    }
    else {
        return false
    }
}

const selectCursoById = async function (id) {

    const { PrismaClient } = require('@prisma/client')

    const prisma = new PrismaClient()

    let sql = `select cast(id as float) as id, 
    nome, carga_horaria, icone, sigla from tbl_curso where id = ${id}`

    const rsCursos = await prisma.$queryRawUnsafe(sql)
    console.log(rsCursos)
    
    if (rsCursos.length > 0) {
        return rsCursos
    }
    else {
        return false
    }

}


module.exports = {
    insertCurso,
    updateCurso,
    deleteCurso,
    selectCurso,
    selectCursoById
}