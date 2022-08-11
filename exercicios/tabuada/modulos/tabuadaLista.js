/******************************************** 
* Objetivo : Armazenar a função tabuada e todas as susas variaveis
* Autor : HeitorPontieri
* Data de Criação : 11/08/2022
* Versão : 1.0
***********************************************/


const { exit } = require("process")

const calcTabuada = function(numero1,numero2, multi){
    let num1 = numero1
    let num2 = numero2
    let multiplicador = multi
    let contador = 0
    let result 
    
    console.log('###### PRIMEIRA TABUADA ######')
    for (contador = 0;contador <= multiplicador; contador++) {
        result = num1 * contador
        console.log(num1 + ' x ' + contador + ' = ' + result)
    }
    
    console.log('###### SEGUNDA TABUADA ######')
    for(contador = 0; contador <= multiplicador; contador++){
        result = num2 * contador
        console.log(num2 + 'x' + contador + '=' + result)
    }
    exit()
}

module.exports={
    calcTabuada
}