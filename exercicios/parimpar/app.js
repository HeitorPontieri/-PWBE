/******************************************** 
* Objetivo : CGerenciador de númeres ímpares e pares
* Autor : HeitorPontieri
* Data de Criação : 11/08/2022
* Versão : 1.0
***********************************************/

'use strict'

console.log('###### Par & Ímpar #######')
const { exit } = require('process')
const  {parimpar} = require('./modulos/parimpar.js')

const readline = require('readline')
const entradaDados = readline.createInterface({
    input: process.stdin,
    output: process.stdout
})

entradaDados.question('Digite o valor inicial da separação\n', function(valor1){
    let valorinicial = parseFloat(valor1)
    entradaDados.question('Digite o valor final da separação\n', function(valor2){
        let valorfinal = parseFloat(valor2)
        entradaDados.question('Qual será a ordem para a separação dos números  [pares, ímpares ou ambos] \n ', function(decision){
            let decisao = decision
        
            
            
                if (valorinicial > 501) {
                    console.log('ERRO : Valor fora do limite')
                    exit()
                }
                else if (valorfinal < 99) {
                    console.log('ERRO : Valor fora do limite')
                    exit()
                }
                else if (valorfinal > 1001){
                    console.log('ERRO : Valor fora do limite')
                    exit()
                }
                else if (valorinicial == valorfinal) {
                    console.log('ERRO : Os dois números digitados são iguais')
                }
            
                parimpar(valorinicial,valorfinal,decisao)
        
        })

       
    })
})