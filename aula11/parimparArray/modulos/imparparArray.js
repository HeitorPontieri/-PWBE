/******************************************** 
* Objetivo : Sequenciador dos números ímpares e pares utilizando Array
* Autor : HeitorPontieri
* Data de Criação : 25/08/2022
* Versão : 1.0
***********************************************/
const par = function (valorinicial, valorfinal,) {

    let valorI = valorinicial
    let valorF = valorfinal

    const pares = []    
    for (valorI; valorI <= valorF; valorI++) {
        if (valorI % 2 == 0) {
    
            pares.push(valorI)
        }
        
    }return pares
}
const impar = function (valorinicial, valorfinal,) {

    let valorI = valorinicial
    let valorF = valorfinal

    const impares = []
    for (valorI; valorI <= valorF; valorI++) {
        if (valorI % 2 != 0) {
           
            impares.push(valorI)
            
        }
        
    }return impares
}
const imparpar = function (par, impar) {
    const exibicao = [
        par,
        impar
    ]
    return exibicao
}

module.exports ={
    par,
    impar,
    imparpar
}

