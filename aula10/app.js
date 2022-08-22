'use strict'

// Define uma variavel do tipo array
const listaNomes = ['jose', 'maria', 'carlos']
const listaProdutos = ['teclado', 'branco', 50.870, 10]
const listaAlunos = ['Heitor','Lucas','Antony','Mel', 'Eduardo', 'Leo', 'Arthur', 'Isabelle', 'Lídia', 'Leleco']

// Exibindo todos os dados de um array
console.log(listaNomes)
console.log(listaProdutos)


console.log(typeof(listaProdutos))

console.log(typeof(listaProdutos[3]))
console.log('O produto é :' + listaProdutos[1])

//Exibe a quantidade de elementos de um array 
console.log('Quantidade de elementos' + listaProdutos.length)

//Extraindo valores do array com estruturas de repetição
let qntde = listaAlunos.length
let cont = 0

console.log('EXEMPLO USANDO O WHILE')
//Exemplo usando o while
while(cont < qntde){
    console.log('O aluno da turma DS2M é : '+ listaAlunos[cont])
    cont+=1
}
console.log('EXEMPLO USANDO O FOR')
// Exemplo usando o for
for(let cont = 0; cont<qntde; cont++){
    console.log('O aluno da turma DS2M é : '+ listaAlunos[cont])
}
console.log('EXEMPLO USANDO O FOREACH')
// Exemplo usando o foreach

listaAlunos.forEach(function(item,cont){
    
})