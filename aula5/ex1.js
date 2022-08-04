/******************************************** 
* Objetivo : Cálculo de média aritmética para aprovação dos alunos dentro de uma faculdade
* Autor : HeitorPontieri
* Data de Criação : 04/08/2022
* Versão : 1.0
***********************************************/

'use strict'

console.log('\n ###### Média Final ####### \n')
const readline = require('readline')

const entradaDados = readline.createInterface({
    input : process.stdin,
    output : process.stdout
})

entradaDados.question('Digite o nome do aluno(a) ?\n',function(nomeAluno){
    let alunoNome = nomeAluno
        entradaDados.question('Digite o nome do professor(a)  ?\n' ,function(nomeProf){
            let profNome = nomeProf
                entradaDados.question('Qual o sexo do aluno(a) ?\n' ,function(sexoAluno){
                    let alunoSexo = sexoAluno
                        entradaDados.question('Qual o sexo do professor(a) ?\n', function(sexoProf){
                            let  profSexo = sexoProf
                            entradaDados.question('Qual o nome da matéria ?\n', function(nomeMat){
                                let  materiaNome = nomeMat
                                    entradaDados.question('Qual o nome da disciplina ?\n', function(nomeCurso){
                                        let cursoNome = nomeCurso
                                        entradaDados.question(" Informe a primeira nota do aluno " + nomeAluno + "\n", function(valor1){
                                            let nota1S = valor1
                                            let nota1 = parseFloat(nota1S)
                                            entradaDados.question(" Informe a segunda nota do aluno " + nomeAluno + "\n" , function(valor2){
                                                let nota2S = valor2
                                                let nota2 = parseFloat(nota2S)
                                                entradaDados.question(" Informe a terceira nota do aluno " + nomeAluno + "\n" , function(valor3){
                                                    let nota3S = valor3
                                                    let nota3 = parseFloat(nota3S)
                                                        entradaDados.question(" Informe a quarta nota do aluno " + nomeAluno + "\n" , function(valor4){
                                                            let nota4S = valor4 
                                                            let nota4 = parseFloat(nota4S)
                                                             entradaDados.question(" Caso o aluno tenha ficado em exame, por favor digite a nota do exame do " + nomeAluno + "\n" , function(valorExame){
                                                                    let notaEx = valor4 
                                                                    let notaExame = parseFloat(notaEx)

                                                    });
                                                });
                                            });
                                        });
                                    })  
                            })
                        })
                })
        })
})





