/******************************************** 
* Objetivo : Arquivo que contem todas as funções para calculos matematicos
* Autor : HeitorPontieri
* Data de Criação : 01/08/2022
* Versão : 1.0
***********************************************/



// Metopo traicional de se criar uma função
function calcular (valor1, valor2, opcaoCalc){
    let numero1 = valor1
    let numero2 = valor2
    let escolhaOp = opcaoCalc
  
    if(isNaN(numero1)||isNaN(numero2)){
      console.log('ERRO : Nenhum número foi digitado, por favor reinicie o programa')
      exit;
     
    } else{
      if(escolhaOp == 1){
        const soma =  numero1 + numero2
        let resultado = parseFloat(soma)
        console.log('O resultao a soma foi de : ' + resultado)
      }
      else if (escolhaOp == 2){
        const sub = numero1 - numero2
         let resultado = parseFloat(sub)
         console.log('O resultado da subtração foi de : ' + resultado)
    }
      else if(escolhaOp == 3){
        const multi =  numero1 * numero2
        let resultado = parseFloat(multi)
        console.log('o resultado da multiplicação foi de : ' + resultado)
    }
      else if(escolhaOp == 4){
        if (numero1 > numero2) {
          const div = numero2 / numero1
          let resultado = parseFloat(div)
           console.log('O resultado da divisão foi de : ' + resultado)
        }
          var divIntertido = numero1 / numero2
          let resultado = parseFloat(divIntertido) 
         console.log('O resultado da divisão foi de : ' + resultado)
    }
      else {
        console.log('ERRO : nenhuma opção foi selecionada, por favor reinicie o programa')
        entradaDados.close()
    }
    entradaDados.close()
  
  
  }
    
  }
  