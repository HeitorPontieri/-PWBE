'use strict'

// trabalhando com JSON
const listaContatos = {
    nome: 'Heitor Pontieri',
    idade: 16,
    email: 'heitorpontieri1@gmail.com',
    telefone: '11 988577810'

}


console.log(listaContatos)
console.log('Nome do contato : ' + listaContatos.nome)
console.log('O email cadastrado : ' + listaContatos.email)

// Adiciona elementos ao JSON em execução
listaContatos.altura = 1.72
console.log(listaContatos)

// Apaga elementos ao JSON em execução
delete(listaContatos.altura)
console.log(listaContatos)