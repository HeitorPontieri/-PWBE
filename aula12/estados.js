/*
Objetivo : Obter uma lista de estados
Data : 29/08/22
Autor : HeitorPontieri
versão : 1.0

*/

var estados = [
    {
        sigla: 'SP',
        nome: 'São Paulo'
    }
    ,
    {
        sigla: 'AC',
        nome: 'Acre'
    }
    ,
    {
        sigla: 'RJ',
        nome: 'Rio de Janeiro'
    },
    {
        sigla: 'BA',
        nome: 'Bahia'
    },
    {
        sigla: 'CE',
        nome: 'Ceará'
    },
    {
        sigla: 'MG',
        nome: 'Minas Gerais'
    },
    {
        sigla: 'GO',
        nome: 'Goiás'
    }
    ,
    {
        sigla: 'SC',
        nome: 'Santa Catarina '
    }
]


// Retorna todos os estados pela sigla
const getListaEstados = function () {

    const siglaEstados = []
    erro = true

    estados.forEach(item => {
        siglaEstados.push(item.sigla)
        erro = false
    })

    if (erro) {
        return false
    }

    else {
        return siglaEstados
    }

}

const getEstado = function(siglaEstados){
    let sigla = siglaEstados
    let estadoNome  = {}    
    let erro = true

    estados.forEach(item =>{
        if(item.sigla.indexOf(sigla)== 0){
            estadoNome.uf = item.sigla
            estadoNome.descricao = item.nome
            erro = false 
        }

        if(erro){
            return false
        }
        else{
            return estadoNome
        }
    })
}

console.table(getEstados())