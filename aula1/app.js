
// Tipos de Comentário //

/* 
    Comentário em bloco 
    Comentário em bloco 
    Comentário em bloco 
*/

// Comentário de linha //

// Exibe uma mensagem no prompt //

console.log("Testando o NodeJS");

// import da biblioteca para interação com o usuário
var readline = require('readline');

// instância do objeto para entrada e saída de dados via prompt
var EntradaDados = readline.createInterface({
        input: process.stdin,
        output: process.stdout
    }
);

// Coloca uma mensagem no prompt para o usuário e o que for digitado //
// e enviado atráves de uma função de call back//
EntradaDados.question("Digite seu nome \n" , function (nome) {
        console.log("Bem Vindo, " + nome + ".")
});



