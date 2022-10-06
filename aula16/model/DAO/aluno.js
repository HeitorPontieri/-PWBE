/*
Objetivo : Arquivo responsável pela manipulação de dados com o banco de dados (insert,update,delete,select)
Autor : HeitorPontieri
Data_criação : 06/10/2022
Versão : 1.0
*/

// Função para inserir um novo registro no banco de dados
const insertAluno = async function (aluno) {

} 
// Função para atualizar um registro no BD
const updateAluno = async function(aluno){

}
// Função para apagar um registro no BD
const deleteAluno = async function(id){

}
// Função para retornar todos os registros no BD
const selectAllAlunos = async function(){
    // Import da classe prismaClient, que é responsável pelas interações com BD
    const  {PrismaClient} = require('@prisma/client')
    
    // Instância da classe PrismaClient
    const prisma = new PrismaClient()

    // Criamos um objeto do tipo RecordSet(rsAlunos) para receber os dados do BD
    // atraves do script SQL(select)
    // $queryRaw nos permite escrever um script direto para o BD
    const rsAlunos = await prisma.$queryRaw `select * from tbl_aluno`

    if(rsAlunos.length > 0) {
        return rsAlunos
    }
    else{
        return false
    }
}

module.exports ={
    selectAllAlunos,
    deleteAluno,
    updateAluno,
    insertAluno
}