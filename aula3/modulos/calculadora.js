/******************************************** 
* Objetivo : Arquivo que contem todas as funções para calculos matematicos
* Autor : HeitorPontieri
* Data de Criação : 01/08/2022
* Versão : 1.0
***********************************************/

// Metopo tradicional de se criar uma função
const calcular = function (valor1, valor2, opcaoCalc){
    let numero1 = valor1
    let numero2 = valor2
    let escolhaOp = opcaoCalc
  
    if(isNaN(numero1)||isNaN(numero2)){
      console.log('ERRO : Nenhum número foi digitado, por favor reinicie o programa')
      exit;
     
    } 
    else{
      if(escolhaOp == 1){
        resultado = somar(numero1,numero2)  
        console.log('O resultado a soma foi de : ' + resultado)
        
      }
      else if (escolhaOp == 2){
        resultado = sub(numero1,numero2)
         console.log('O resultado da subtração foi de : ' + resultado)
        
        }
      else if(escolhaOp == 3){
        resultado = multiplicar(numero1,numero2)
        console.log('o resultado da multiplicação foi de : ' + resultado)
        
      }
      else if(escolhaOp == 4){
        if (numero1 > numero2) {
          resultado = dividir(numero1,numero2)
           console.log('O resultado da divisão foi de : ' + resultado)
           
          }
         resultado = outraDividir(numero1,numero2)
         console.log('O resultado da divisão foi de : ' + resultado)
         
        }
      else {
        console.log('ERRO : nenhuma opção foi selecionada, por favor reinicie o programa')
       
      }
    
    }
    
}
 // Modelo de função Arrow Function
const somar = (numero1,numero2) => parseFloat (numero1) + parseFloat(numero2)

const sub = (numero1, numero2) => parseFloat(numero1) - parseFloat(numero2)

const multiplicar = (numero1, numero2) => parseFloat(numero1) * parseFloat(numero2)

const dividir = (numero1, numero2) => parseFloat(numero1) / parseFloat (numero2)

const outraDividir = (numero1, numero2) => parseFloat(numero2) / parseFloat(numero1)

 
//  as funções que serão imoportdas em outros projetos, precisam OBBRIGATORIAMENTE serem incluías no module.exports, as funções que não forem incluías no module.exports, ela irá funcionar apenas localmente neste arquivo
module.exports = {
     calcular
}