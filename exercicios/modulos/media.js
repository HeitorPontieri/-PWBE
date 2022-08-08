'use strict'


const calcMedia = function mediaF(nota1, nota2, nota3, nota4,notaEx) {
    let media
    media = (parseFloat(nota1) + parseFloat(nota2) + parseFloat(nota3) + parseFloat(nota4)) / 4
    
    if (media < 60) {
        let mediaEx = (media + notaEx) / 2
    }

}

const Result = function result ( media, mediaEx){
    if(media>70){
        return  'aprovado'
    }
    else if(69<media>50){
        return 'exame'
    }
    else{
        return  'reprovado'
    }
}

module.exports = {
    calcMedia,Result
}