/******************************************** 
* Objetivo : Construir um sistema que calcule e aprove alunos de uma faculdade
* Autor : HeitorPontieri
* Data de Criação : 08/08/2022
* Versão : 1.0
***********************************************/

'use strict'

console.log('###### Cálculo de Média Online #######')
const { exit } = require('process')
const readline = require('readline')
const { calcMedia } = require('./media.js')
const { result } = require('./media.js')
const { exame } = require('./media')
const entradaDados = readline.createInterface({
    input: process.stdin,
    output: process.stdout
})

entradaDados.question('Digite o nome do aluno(a)\n', function (alunoNome) {
    let nomeAluno = alunoNome
    entradaDados.question('Digite o nome do professor\n', function (profNome) {
        let nomeProf = profNome
        entradaDados.question('Qual o sexo do aluno(a)[masculino/feminino]\n', function (sexoAluno) {
            let alunoSexo = sexoAluno
            if (alunoSexo.toUpperCase() == 'MASCULINO' || alunoSexo.toUpperCase() == 'MASC') {
                alunoSexo = 'o aluno'
            }
            else if (alunoSexo.toUpperCase() == 'FEMININO' || alunoSexo.toUpperCase() == 'MASC') {
                alunoSexo = 'a aluna'
            }

            entradaDados.question('Qual o sexo do professor(a) [masculino/feminino]\n', function (sexoProfessor) {
                let profSexo = sexoProfessor
                if (profSexo.toUpperCase() == 'MASCULINO' || profSexo.toUpperCase() == 'MASC') {
                    profSexo = 'O professor'
                }
                else if (profSexo.toUpperCase() == 'FEMININO' || profSexo.toUpperCase() == 'FEM') {
                    profSexo = 'A professora'
                }

                entradaDados.question('Qual o nome do curso\n', function (cursoNome) {
                    let nomeCurso = cursoNome
                    entradaDados.question('Qual o nome da matéria desejada?\n', function (nomeMateria) {
                        let materiaNome = nomeMateria
                        entradaDados.question('Digite uma nota :\n', function (valor1) {
                            let nota1 = valor1
                            entradaDados.question('Digite uma nota :\n', function (valor2) {
                                let nota2 = valor2
                                entradaDados.question('Digite uma nota :\n', function (valor3) {
                                    let nota3 = valor3
                                    entradaDados.question('Digite uma nota :\n', function (valor4) {
                                        let nota4 = valor4


                                        if (nota1 == '' || nota2 == '' || nota3 == '' || nota4 == '') {
                                            console.log('Espaço em branco, por favor reinsira as notas')
                                            entradaDados.close()
                                            exit()
                                        }

                                        if (nota1 > 100 || nota2 > 100 || nota3 > 100 || nota4 > 100) {
                                            console.log('Notas inválidas, por favor reinsira as notas')
                                            entradaDados.close()
                                            exit()
                                        }


                                        let notaEx = ''
                                        let media = calcMedia(nota1, nota2, nota3, nota4)
                                        let mediaEx = exame(notaEx)



                                        result(media)


                                        entradaDados.question('Qual foi a nota de exame d' + alunoSexo + nomeAluno + '\n', function (exNota) {
                                            notaEx = parseFloat(exNota)
                                            if (notaEx > 0) {
                                                console.log('########## Relátorio das Notas ##########')
                                                console.log(alunoSexo + ' ' + alunoNome + ' foi ' + result(media) + ' na disciplina ' + nomeMateria)
                                                console.log('Curso : ' + nomeCurso)
                                                console.log(profSexo + ': ' + profNome)
                                                console.log('As nota d' + alunoSexo + ' ' + alunoNome + ' foram : ' + nota1 + ' ' + nota2 + ' ' + nota3 + ' ' + nota4)
                                                console.log('A média final d' + alunoSexo + ' ' + alunoNome + ' foi ' + media)
                                                console.log('A média final d' + alunoSexo + ' ' + alunoNome + ' contando com com o exame foi ' + mediaEx)

                                                exit()
                                            }
                                            else {
                                                console.log('########## Relátorio das Notas ##########')
                                                console.log(alunoSexo + ' ' + alunoNome + ' foi ' + result(media) + ' na disciplina ' + nomeMateria)
                                                console.log('Curso : ' + nomeCurso)
                                                console.log(profSexo + ':' + profNome)
                                                console.log('As nota d' + alunoSexo + ' ' + alunoNome + ' foram : ' + nota1 + ' ' + nota2 + ' ' + nota3 + ' ' + nota4)
                                                console.log('A média final d' + alunoSexo + ' ' + alunoNome + ' foi ' + media)
                                                exit()
                                            }
                                        })

                                    })
                                })

                            })

                        })
                    })
                })
            })
        })
    })
})