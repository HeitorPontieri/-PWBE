/******************************************** 
* Objetivo : Aplicar estruturas de repetição, usando while e for
* Autor : HeitorPontieri
* Data de Criação : 04/08/2022
* Versão : 1.0
***********************************************/

'use strict'

console.log('###### Tabuada Online #######')
const readline = require('readline')
const { calcTabuada} = require('./modulos/tabuada')

const entradaDados = readline.createInterface({
    input : process.stdin,
    output : process.stdout
})

entradaDados.question('Digite a tabuada a ser calculada : \n', function(valor1){

    let tabuada = valor1
    calcTabuada(tabuada);

    entradaDados.close()

})

