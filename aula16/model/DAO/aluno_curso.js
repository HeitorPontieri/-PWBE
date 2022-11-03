/*
//////////////// DOCUMENTAÇÃO \\\\\\\\\\\\\\\\\\\\\

Objetivo : Arquivo responsável pela manipulação de recebimento, tratamento e retorno de dados
entre as duas tabelas (tbl_aluno e tbl_curso)
Autor : HeitorPontieri
Data_criação : 31/10/2022
Versão : 1.0
*/

 // Import da classe prismaClient, que é responsável pelas interações com BD
 const { PrismaClient } = require('@prisma/client')

// Função para inserir um novo registro no banco de dados
const insertAlunoCursoID = async function (alunoCurso) {
    try {
        // Instância da classe PrismaClient
        const prisma = new PrismaClient()

        // Guarda o script SQL em uma variável 
        let sql = `insert into tbl_aluno_curso(id_aluno,id_curso,matricula, status_aluno) 
                    values('${alunoCurso.id_aluno}','${alunoCurso.id_curso}',
                            '${alunoCurso.matricula}', '${alunoCurso.status_aluno}');`


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

// Função para buscar os dados de curso referente a um aluno
const selectAlunoCurso = async function (id_aluno){
    try {
        const prisma = new PrismaClient()

        let sql = `select cast(tbl_curso.id as float) as id_curso, tbl_curso.nome as nome_curso,tbl_curso.carga_horaria as carga_horaria,tbl_curso.sigla as sigla_curso,
                        tbl_aluno_curso.matricula,tbl_aluno_curso.status_aluno 
                        
                        from tbl_aluno 
                    
                        inner join tbl_aluno_curso 
                            on tbl_aluno.id = tbl_aluno_curso.id_aluno
                        inner join tbl_curso
                             on tbl_curso.id = tbl_aluno_curso.id_curso
                        
                        where tbl_aluno.id = ${id_aluno};`

        const rsAlunoCurso = prisma.$executeRawUnsafe(sql)
       
    
        if(rsAlunoCurso){
            return rsAlunoCurso
        }
        else{
            return false
        }
    } catch (error) {
        return false
    }
}

module.exports ={
    insertAlunoCursoID,
    selectAlunoCurso
}
