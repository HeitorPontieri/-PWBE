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
const { calcMedia } = require('./modulos/media.js')
const { media, mediaEx,Result } = require('./modulos/media.js')
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
            if (alunoSexo.toUpperCase() == 'MASCULINO') {
                alunoSexo = ' o aluno'
            }
            else if (alunoSexo.toUpperCase() == 'FEMININO') {
                alunoSexo = 'a aluna'
            }

            entradaDados.question('Qual o sexo do professor(a) [masculino/feminino]\n', function (sexoProfessor) {
                let profSexo = sexoProfessor
                if (profSexo.toUpperCase() == 'MASCULINO') {
                    profSexo = 'O professor'
                }
                else if (profSexo.toUpperCase() == 'FEMININO') {
                    profSexo = ' A professora'
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
                                        
                                        entradaDados.question('Caso ' + alunoSexo + nomeAluno + ' tenha ficado de exame, qual foi sua nota\n', function (exNota) {
                                            let notaEx = exNota

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
                                            
                                            calcMedia(nota1, nota2, nota3, nota4, notaEx)
                                            Result(media)
                                             
                                            console.log('########## Relátorio das Notas ##########')
                                            console.log(alunoSexo + alunoNome + 'foi' + Result(media) + ' na disciplina'+ nomeMateria)
                                            console.log('Curso : ' + nomeCurso)
                                            console.log(profSexo + profNome)
                                            console.log('As notas' + alunoSexo + alunoNome +'foram : ' + nota1 + '' + nota2 + '' + nota3 + '' + nota4)
                                            console.log('A média final d'+alunoSexo + alunoNome + 'foi'+ media)
                                            console.log('A média final d'+alunoSexo + alunoNome + 'contando com com o exame foi' + mediaEx )

                                        


                

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