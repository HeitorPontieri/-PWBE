/******************************************** 
* Objetivo : Sequenciador dos números ímpares e pares
* Autor : HeitorPontieri
* Data de Criação : 11/08/2022
* Versão : 1.0
***********************************************/
'use strict'

const { exit } = require("process")

const parimpar = function(valor1, valor2){   
    
    let valorinicial = valor1
    let valorfinal = valor2
    
    for (let i = valorinicial; i <= valorfinal; i++) {
        if(i % 2 == 0){
            console.log(i)
            exit()
        }
       if (i % 2 != 0){
            console.log(i)
            exit()
        }    
    } 
}

module.exports={
    parimpar
}