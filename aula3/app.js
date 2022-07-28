/*
= --> Atribuição
== --> Comparação de conteúdos
=== --> Comparação de conteúdo e tipo de dados

==! --> Os dois primeiros caracteres são relacionados a compararção do conteudo das variáveis e o terceiro é relacionado a tipagem(tipo da variável)


-- toUpperCase() --> converte em MAIUSCULO
-- toLowerCase() --> converte em minusculo


*/


'use strict'

console.log('Calculaora Simples')


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
                    if(escolhaOp == 1){
                      const soma =  numero1 + numero2
                      let somaFloat = parseFloat(soma)
                      console.log('O resultao a soma foi de :' + somaFloat)
                    }
                    else if (escolhaOp == 2){
                        const sub = numero1 - numero2
                         let subFloat = parseFloat(sub)
                         console.log('O resultado da subtração foi de :' + subFloat)
                    }
                    else if(escolhaOp == 3){
                      const multi =  numero1 * numero2
                      let multiFloat = parseFloat(multi)
                      console.log('o resultado da multiplicação foi de :' + multiFloat)
                    }
                    else if(escolhaOp == 4){
                      if (numero1 > numero2) {
                        const div = numero2 / numero1
                       let divFloat = parseFloat(div)
                       console.log('O resultado da divisão foi de :' + divFloat)
                      }
                        var divIntertido = numero1 / numero2
                       let divFloat = parseFloat(divIntertido)
                       console.log('O resultado da divisão foi de :' + divFloat)
                    }
                    else{
                        console.log('ERRO : nenhuma opção foi selecionada, por favor reinicie o programa')
                        entradaDados.close()
                    }
                    entradaDados.close()
                })

        })
})

