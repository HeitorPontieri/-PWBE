'use strict'

// Define uma variavel do tipo array
const listaNomes = ['jose', 'maria', 'carlos']
const listaProdutos = ['teclado', 'branco', 50.870, 10]
const listaAlunos = ['Heitor', 'Lucas', 'Antony', 'Mel']
const listaDisciplina = ['PWBE', 'PWFE', 'DB', 'INDMO']

// Exibindo todos os dados de um array
console.log(listaNomes)
console.log(listaProdutos)


console.log(typeof (listaProdutos))

console.log(typeof (listaProdutos[3]))
console.log('O produto é :' + listaProdutos[1])

//Exibe a quantidade de elementos de um array 
console.log('Quantidade de elementos' + listaProdutos.length)

//Extraindo valores do array com estruturas de repetição
let qntde = listaAlunos.length
let cont = 0

console.log('EXEMPLO USANDO O WHILE')
//Exemplo usando o while
while (cont < qntde) {
    console.log('O aluno da turma DS2M é : ' + listaAlunos[cont])
    cont += 1
}
console.log('EXEMPLO USANDO O FOR')
// Exemplo usando o for
for (let cont = 0; cont < qntde; cont++) {
    console.log('O aluno da turma DS2M é : ' + listaAlunos[cont])
}
console.log('EXEMPLO USANDO O FOREACH')
// Exemplo usando o foreach
listaAlunos.forEach(function (item) {
    console.log('O aluno da turma DS2M é : ' + item)
})

// Adiciona novos elementos no final do  array 
listaAlunos.push('Eduardo', 'Leo', 'Arthur', 'Isabelle', 'Lídia', 'Leleco')

console.log('EXEMPLO ADICIONANDO ELEMENTOS AO ARRAY')
listaAlunos.forEach(function (item) {
    console.log('O aluno da turma DS2M é : ' + item)
})

console.log('EXEMPLO REMOVENDO ELEMENTOS AO ARRAY')
// Remove o ultimo item do array
listaAlunos.pop()
listaAlunos.forEach(function (item) {
    console.log('O aluno da turma DS2M é : ' + item)
})

console.log('EXEMPLO ADICIONANDO ELEMENTOS NO INÍCIO DO ARRAY')
// Adiciona itens no inicio do array
listaAlunos.unshift('Tony Little Banana')
listaAlunos.forEach(function (item) {
    console.log('O aluno da turma DS2M é : ' + item)
})

console.log('EXEMPLO REMOVENDO ELEMENTOS NO INÍCIO DO ARRAY')
//Remove o primeiro item do array
listaAlunos.shift()
listaAlunos.forEach(function (item) {
    console.log('O aluno da turma DS2M é : ' + item)
})

//  Pesquisando valores em um Array e retornando sua posicao dentro do array
let indice = listaAlunos.indexOf('Leo')
console.log(indice)

// Remove elementos a partir de um indice
// remove somente o item escolhido
listaAlunos.splice(indice, 1)
// remove todos os elementos a partir do escolhido
listaAlunos.splice(indice)
// remove todos os itens a partir do primeiro até o item escolhido
listaAlunos.splice(0, indice + 1)
console.log(listaAlunos)

// Cria uma cópia de um array e guarda os itens em outra array 
const listaNovaAlunos = listaAlunos.slice()
console.log(listaNovaAlunos)

listaNovaAlunos.push(listaDisciplina)
console.log(listaNovaAlunos)

// Exibe o primeiro elemento do array contido dentro da linha 8 do array principal
console.log(listaNovaAlunos[8])

// Exemplo de como buscar um elemento de um array que está dentro de outro array
console.log(listaNovaAlunos[8].indexOf('DB'))   