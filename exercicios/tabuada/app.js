
/******************************************** 
* Objetivo : Calcular a média e retornar o status do aluno
* Autor : HeitorPontieri
* Data de Criação : 22/08/2022
* Versão : 1.0.1
***********************************************/

'use strict'

console.log('###### Tabuada Online #######')
const { exit } = require('process')
const  {calcTabuada} = require('./modulos/tabuadaLista')
const readline = require('readline')
const entradaDados = readline.createInterface({
    input: process.stdin,
    output: process.stdout
})

entradaDados.question('Digite um número para ser multiplicado, entre 2 e 100\n' , function(valor1){
    let num1 = parseFloat(valor1)
    entradaDados.question('Digite outro número para ser multiplicado, entre 2 e 100 \n', function(valor2){
        let num2 = parseFloat(valor2)
        entradaDados.question('Digite um número para ser o multiplicador dos dois últimos\n', function(multipli){
            let multiplicador = parseFloat(multipli)

            if (num1 < 2 || num2 < 2|| num1 > 100 || num2 > 100) {
                console.log('ERRO : números inválidos')
                exit()
            }
            else if(num1 == '' || num2 == '' || multiplicador == '' ){
                console.log('ERRO : Espaços deixados em branco')
                exit()
            }
            else if (multiplicador>50){
                console.log('ERRO : números inválidos ')
                exit()
            }

            calcTabuada(num1, num2, multiplicador)
        })
    })
})