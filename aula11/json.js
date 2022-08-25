'use strict'

// trabalhando com JSON
const listaContatos = [{
    nome: 'Heitor Pontieri',
    idade: 16,
    email: 'heitorpontieri1@gmail.com',
    telefone: '11 988775638',
    carros :[{
        placa : 'FHUEM-3759',
        modelo : 'Gol Sapão',
        cor : 'Verde Escuro com neon amarelo embaixo'

    },{
        placa : 'YTUQJ-666',
        modelo : 'Saveiro',
        cor : 'rosa'
    }]

},{
    nome: 'Antony Little Banana',
    idade: 16,
    email: 'tonybananinha@gmail.com',
    telefone: '11 991899895'
    
},{
    nome: 'leu',
    idade: 16,
    email: 'leupokapika@gmail.com',
    telefone: '11 996336638'
}]



console.log(listaContatos)

// Modo de chamar uma chave do JSON    
console.log('Nome do contato : ' + listaContatos.nome)
console.log('O email cadastrado : ' + listaContatos.email)

// Adiciona elementos ao JSON em execução
listaContatos.altura = 1.72
console.log(listaContatos)

// Apaga elementos ao JSON em execução
delete(listaContatos.altura)
console.log(listaContatos)


console.log('Placa : ' + listaContatos[0].carros[0].placa)
