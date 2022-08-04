/******************************************** 
* Objetivo : Armazenar a função tabuada e todas as susas variaveis
* Autor : HeitorPontieri
* Data de Criação : 04/08/2022
* Versão : 1.0
***********************************************/

const calcTabuada = function (valor1) {

    let tabuada = valor1
    let resultado
    let cont = 0

    /* While 
     console.log('TESTANDO O WHILE')
    while(cont <=10){
        resultado = tabuada * cont
        console.log( tabuada + 'x' + cont + '=' + resultado)
        // cont = cont +1
        // cont =+
         cont ++
    } 
    */
    /* For */
    for ( cont = 0; cont <= 10; cont++) {
       resultado = tabuada * cont 
       console.log( tabuada + 'x' + cont + '=' + resultado)

    }
}


module.exports={
    calcTabuada
}

