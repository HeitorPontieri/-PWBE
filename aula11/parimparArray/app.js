/******************************************** 
* Objetivo : CGerenciador de númeres ímpares e pares
* Autor : HeitorPontieri
* Data de Criação : 11/08/2022
* Versão : 1.0
***********************************************/

'use strict'

console.log('###### Par & Ímpar #######')
const { exit } = require('process')
const { imparpar, par, impar } = require('./modulos/imparparArray.js')

const readline = require('readline')
const entradaDados = readline.createInterface({
    input: process.stdin,
    output: process.stdout
})

entradaDados.question('Digite o valor inicial da separação\n', function (valor1) {
    let valorinicial = parseFloat(valor1)

    entradaDados.question('Digite o valor final da separação\n', function (valor2) {
        let valorfinal = parseFloat(valor2)

        let pAr = par(valorinicial, valorfinal)
       let imPar = impar(valorinicial, valorfinal)
        let imparPar = imparpar(imPar,pAr)

        console.log(imparPar)
    })
})