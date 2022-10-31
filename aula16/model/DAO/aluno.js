/*

//////////////// DOCUMENTAÇÃO \\\\\\\\\\\\\\\\\\\\\
Objetivo : Arquivo responsável pela manipulação de dados com o banco de dados (insert,update,delete,select)
Autor : HeitorPontieri
Data_criação : 06/10/2022
Versão : 1.0
*/

// Função para inserir um novo registro no banco de dados
const insertAluno = async function (aluno) {
    try {
        // Import da classe prismaClient, que é responsável pelas interações com BD
        const { PrismaClient } = require('@prisma/client')

        // Instância da classe PrismaClient
        const prisma = new PrismaClient()

        // Guarda o script SQL em uma variável 
        let sql = `insert into tbl_aluno(nome,foto,rg,cpf,email,data_nascimento,telefone, sexo)
                values('${aluno.nome}','${aluno.foto}','${aluno.rg}','${aluno.cpf}','${aluno.email}','${aluno.data_nascimento}','${aluno.telefone}','${aluno.sexo}')`

        // Executa o scipt SQL no banco de dados ($executeRawUnsafe permite encaminhar uma variavel contendo o script)
        const result = await prisma.$executeRawUnsafe(sql)

        // Verifica se o script foi executado com sucesso
        if (result) {
            return true
        }
        else {
            // Retorna falso pq nao consegue criar 
            return false
        }
    } catch (error) {
        // Retorna false por algum problema na programação 
        return false
    }
}
// Função para atualizar um registro no BD
const updateAluno = async function (aluno) {

    try {
        // Import da classe prismaClient, que é responsável pelas interações com BD
        const { PrismaClient } = require('@prisma/client')

        // Instância da classe PrismaClient
        const prisma = new PrismaClient()

        // Guarda o script SQL em uma variável 
        let sql = `update tbl_aluno set nome ='${aluno.nome}',foto ='${aluno.foto}',rg ='${aluno.rg}',cpf ='${aluno.cpf}',email ='${aluno.email}',data_nascimento ='${aluno.data_nascimento}',telefone ='${aluno.telefone}',sexo ='${aluno.sexo}' where id = '${aluno.id}'

`
        // Executa o scipt SQL no banco de dados ($executeRawUnsafe permite encaminhar uma variavel contendo o script)
        const result = await prisma.$executeRawUnsafe(sql)
        
        // Verifica se o script foi executado com sucesso
        if (result) {
            return true
        }
        else {
            // Retorna falso pq nao consegue criar 
            return false
        }
    } catch (error) {
        // Retorna false por algum problema na programação 
        return false
    }

}
// Função para apagar um registro no BD
const deleteAluno = async function (id) {
    try {
        // Import da classe prismaClient, que é responsável pelas interações com BD
        const { PrismaClient } = require('@prisma/client')

        // Instância da classe PrismaClient
        const prisma = new PrismaClient()

        // Guarda o script SQL em uma variável 
        let sql = `delete from tbl_aluno where id = '${id}' `
        
        // Executa o scipt SQL no banco de dados ($executeRawUnsafe permite encaminhar uma variavel contendo o script)
        const result = await prisma.$executeRawUnsafe(sql)
        
        // Verifica se o script foi executado com sucesso
        if (result) {
            return true
        }
        else {
            // Retorna falso pq nao consegue criar 
            return false
        }
    } catch (error) {
        // Retorna false por algum problema na programação 
        return false
    }
}
// Função para retornar todos os registros no BD
const selectAllAlunos = async function () {
    // Import da classe prismaClient, que é responsável pelas interações com BD
    const { PrismaClient } = require('@prisma/client')

    // Instância da classe PrismaClient
    const prisma = new PrismaClient()

    const rsAluno = await prisma.$queryRaw `select cast(id as float) as id, nome,foto,sexo,rg,cpf,email,telefone,data_nascimento from tbl_aluno order by id desc`

    if (rsAluno.length > 0) {
        return rsAluno
    }
    else {
        return false
    }
}
// Função para retornar apenas o registro baseado no ID
const selectAlunosById = async function (id){
     // Import da classe prismaClient, que é responsável pelas interações com BD
     const { PrismaClient } = require('@prisma/client')

     // Instância da classe PrismaClient
     const prisma = new PrismaClient()

     let sql = `select cast(id as float) as id, 
                                            nome,
                                            foto,
                                            sexo,
                                            rg,
                                            cpf,
                                            email,
                                            telefone,
                                            data_nascimento from tbl_aluno where id = ${id}`

     const rsAlunos = await prisma.$queryRawUnsafe (sql)
 
     if (rsAlunos.length > 0) {
         return rsAlunos
     }
     else {
         return false
     }
}

module.exports = {
    selectAllAlunos,
    deleteAluno,
    updateAluno,
    insertAluno,
    selectAlunosById
}