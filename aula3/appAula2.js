//var --> É uma váriavel global,existe para todo o projeto, modelo genérico e necessita de muito processamento
// let --> É uma váriavel local, mais leve, só existe  na funçao que esta sendo utilizada
// const -->  São váriaveis constantes, que não mudam de valor, ex : o Pi 

/*
                  OPERADORES DE COMPARAÇÃO
                     
                    == (comparação de teste lógico)
                    != (diferença de teste lógico)
                    < (menor)
                    > (maior)
                    <= (menor ou igual)
                    >= (maior ou igual)

                    OPERADORES LÓGICOS

                    E && AND
                    OU || OR
                    NEGAÇÃO ! NOT          
 */

console.log("EXERCICIO PARA CALCULAR A MEDIA\n");

var readline = require('readline');

var EntradaDados = readline.createInterface({
        input : process.stdin,
        output : process.stdout

});

EntradaDados.question("Informe o nome do aluno: \n" , function(Nome){
    
        // Declaracao de variavel local (let) e atribuindo um valor
    let nomeAluno = Nome;
    EntradaDados.question(" Informe a primeira nota do aluno " + nomeAluno + "\n", function(valor1){
        let nota1 = valor1;
        var nota1Float = parseFloat(nota1);
        EntradaDados.question(" Informe a segunda nota do aluno " + nomeAluno + "\n" , function(valor2){
            let nota2 = valor2;
            var nota2Float = parseFloat(nota2);
            EntradaDados.question(" Informe a terceira nota do aluno " + nomeAluno + "\n" , function(valor3){
                let nota3 = valor3;
                var nota3Float = parseFloat(nota3);
                EntradaDados.question(" Informe a quarta nota do aluno " + nomeAluno + "\n" , function(valor4){
                    let nota4 = valor4;
                    var nota4Float = parseFloat(nota4);
                    
                    if (nomeAluno == '') {
                        console.log(" O nome do aluno deve ser informado, por favor reinicie o programa") 
                        EntradaDados.close()    
                    }
                    else if (nota1Float <0 || nota2Float <0 || nota3Float <0 || nota4Float <0) {
                        console.log("Alguma nota é inválida, por favor reinicie o programa")
                        EntradaDados.close()
                    }  
                    else if(nota1Float == '' || nota2Float == '' || nota3Float == '' || nota4Float == ''){
                        console.log("Alguma nota não foi inserida, por favor reinicie o programa")
                        EntradaDados.close()
                    }
                    
                     var media = (nota1Float + nota2Float + nota3Float + nota4Float)/ 4
                       
                     if (media > 9.0 ) {
                        console.log("O aluno " + nomeAluno + " foi aprovado com louvores por ter tirado a nota " + media + media.toFixed(1)) 
                    }
                    else if( 8.9 < media > 7.0){
                        console.log("O aluno " + nomeAluno + " foi aprovado com a nota " + media + media.toFixed(1)) 
                    }
                    else if( 6.9 < media > 4.0){
                        console.log("O aluno " + nomeAluno + " está em exame por ter tirado a nota " + media + media.toFixed(1)) 
                    }
                    else{
                        console.log("O aluno " + nomeAluno + " foi reprovado por ter tirado a nota " + media + media.toFixed(1)) 


                        EntradaDados.close()
                    }
                
                });
            });
        });
    });
});

