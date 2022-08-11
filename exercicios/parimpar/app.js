/******************************************** 
* Objetivo : CGerenciador de númeres ímpares e pares
* Autor : HeitorPontieri
* Data de Criação : 11/08/2022
* Versão : 1.0
***********************************************/

'use strict'

console.log('###### Tabuada Online #######')
const { exit } = require('process')
const  {parimpar} = require('./modulos/parimpar')
const readline = require('readline')
const entradaDados = readline.createInterface({
    input: process.stdin,
    output: process.stdout
})
entradaDados.question('Digite o valor inicial da separação\n', function(valor1){
    let valorinicial = valor1
    entradaDados.question('Digite o valor final da separação\n', function(valor2){
        let valorfinal = valor2


        parimpar(valorinicial,valorfinal)
    })
})