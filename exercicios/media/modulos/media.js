
/******************************************** 
* Objetivo : Calcular a média e retornar o status do aluno
* Autor : HeitorPontieri
* Data de Criação : 11/08/2022
* Versão : 1.0
***********************************************/

'use strict'


const calcMedia = function mediaF(nota1, nota2, nota3, nota4,) {
    let media = ''
    media = (parseFloat(nota1) + parseFloat(nota2) + parseFloat(nota3) + parseFloat(nota4)) / 4
    return media
}

const exame = function mediaE (notaEx,media){
    let mediaEx = ''
    
    mediaEx = (media + notaEx) / 2
    return mediaEx

}

const result = function result (media,mediaEx){
    if(media>70){
        return  'aprovado'
    }
    else if(69<media>50){
        return 'exame'
    }
    else if(mediaEx<60){
        return 'reprovado pelo exame'
    }
    else if(mediaEx>60){
        return 'aprovado pelo exame'
    }
    
    
    
    else{
        return  'reprovado'
    }
}

module.exports = {
    calcMedia,result,exame
}