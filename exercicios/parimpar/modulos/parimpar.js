/******************************************** 
* Objetivo : Sequenciador dos números ímpares e pares
* Autor : HeitorPontieri
* Data de Criação : 11/08/2022
* Versão : 1.0
***********************************************/
'use strict'

const { exit } = require("process");


const parimpar = function (valorinicial, valorfinal, decisao) {

    let i;
    let p;
    let qnt;


    if (decisao.toUpperCase() == 'PARES') {
        qnt = 0
        console.log('\nLista de números pares \n')
        for (p = valorinicial; p <= valorfinal; p++) {
            if (p % 2 == 0) {
                console.log(p)
                qnt += 1
            }

        }
        console.log('\nQuantidade de números pares  = ' + qnt)
        exit()

    }
    else if (decisao.toUpperCase() == 'ÍMPARES' || decisao.toUpperCase() == 'IMPARES') {
        qnt = 0
        console.log('\nLista de números ímpares \n')
        for (i = valorinicial; i <= valorfinal; i++) {
            if (i % 2 != 0) {
                console.log(i)
                qnt += 1
            }
        }
        console.log('Quantidade de números impares  = ' + qnt)
        exit()
    }
    else if (decisao.toUpperCase() == 'AMBOS') {
        qnt = 0
        console.log('\nLista de números pares \n')
        for (p = valorinicial; p <= valorfinal; p++) {
            if (p % 2 == 0) {
                console.log(p)
                qnt += 1
            }

        }
        console.log('\nQuantidade de números pares  = ' + qnt)


        console.log('\nLista de números ímpares \n')
        qnt = 0
        for (i = valorinicial; i <= valorfinal; i++) {
            if (i % 2 != 0) {
                console.log(i)
                qnt += 1
            }


        }
        console.log('\nQuantidade de números impares  = ' + qnt)
        exit()
    }

    else {
        console.log('\nERRO : Nada foi digitado ')
        exit()
    }
}

module.exports = {
    parimpar
}