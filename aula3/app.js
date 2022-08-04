/*
= --> Atribuição
== --> Comparação de conteúdos
=== --> Comparação de conteúdo e tipo de dados

==! --> Os dois primeiros caracteres são relacionados a compararção do conteudo das variáveis e o terceiro é relacionado a tipagem(tipo da variável)


-- toUpperCase() --> converte em MAIUSCULO
-- toLowerCase() --> converte em minusculo

--> isNan --> questiona seu o conteúdo da variável é um número

-- Tipos de criação de funções
  // Utiliza o padrão de criação CallBack
    // Formato menos utilizado, mas parão em varias linguagens de programação  
  function calcular (valor1, valor2, operação)

  // Formato mais usado
   
  const calcular = function
*/


'use strict'

console.log('**** Calculadora Simples ****')

const { calcular } = require('./modulos/calculadora.js')
const { exit } = require('process')
const readline = require('readline')

const entradaDados = readline.createInterface({
    input : process.stdin,
    output : process.stdout
})
entradaDados.question('Digite o primeiro número \n ', function(valor1){ 
  let numero1 = parseFloat(valor1)
        entradaDados.question('Digite o segundo número \n', function(valor2){
          let numero2 = parseFloat(valor2)
            entradaDados.question('Qual operação matemática você deseja realizar com os dois números anteriores \n Digite 1 para adição \n Digite 2 para Subtração \n Digite 3 para Multiplicação \n Digite 4 para Divisão \n' , function (escolhaOp){    
              
              let resultado
              let operacao = escolhaOp


            resultado = calcular(numero1,numero2, operacao)

            entradaDados.close()
            })
        }) 
})
