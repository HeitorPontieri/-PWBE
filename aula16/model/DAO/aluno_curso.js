/*
//////////////// DOCUMENTAÇÃO \\\\\\\\\\\\\\\\\\\\\

Objetivo : Arquivo responsável pela manipulação de recebimento, tratamento e retorno de dados
entre as duas tabelas (tbl_aluno e tbl_curso)
Autor : HeitorPontieri
Data_criação : 31/10/2022
Versão : 1.0
*/

// Função para inserir um novo registro no banco de dados
const insertAlunoCursoID = async function (alunoCurso) {
    try {
        // Import da classe prismaClient, que é responsável pelas interações com BD
        const { PrismaClient } = require('@prisma/client')

        // Instância da classe PrismaClient
        const prisma = new PrismaClient()

        // Guarda o script SQL em uma variável 
        let sql = `insert into tbl_aluno(id_aluno,id_curso) values('${alunoCurso.id_aluno}','${alunoCurso.id_curso}`

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

module.exports ={
    insertAlunoCursoID
}
