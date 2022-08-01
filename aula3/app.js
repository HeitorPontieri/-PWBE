/*
= --> Atribuição
== --> Comparação de conteúdos
=== --> Comparação de conteúdo e tipo de dados

==! --> Os dois primeiros caracteres são relacionados a compararção do conteudo das variáveis e o terceiro é relacionado a tipagem(tipo da variável)


-- toUpperCase() --> converte em MAIUSCULO
-- toLowerCase() --> converte em minusculo

--> isNan --> questiona seu o conteúdo da variável é um número

*/


'use strict'

console.log('Calculaora Simples')


const { exit } = require('process')
var readline = require('readline')

const entradaDados = readline.createInterface({
    input : process.stdin,
    output : process.stdout
})
entradaDados.question('Digite o primeiro número \n ', function(valor1){ 
  let numero1 = parseFloat(valor1)
        entradaDados.question('Digite o segundo número \n', function(valor2){
          let numero2 = parseFloat(valor2)
            entradaDados.question('Qual operação matemática você deseja realizar com os dois números anterior \n Digite 1 para adição \n Digite 2 para Subtração \n Digite 3 para Multiplicação \n Digite 4 para Divisão \n' , function (escolhaOp){    
              
              let resultado
              let operacao = escolhaOp


            resultado = calcular(numero1,numero2, operacao)
            })
        }) 
})
