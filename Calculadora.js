var n1 = 0
var n2 = 0
var resp = ""
var operação = ""
var total = 0


while(resp != "Sair"){
    
    n1 = prompt("Digite o primeiro número:")

    console.log("Digite a operação a ser realizada:")
    console.log("+ para somar.")
    console.log("- para subtrair")
    console.log("/ para dividir")
    console.log("* para multiplicar")
    operacao = prompt()


    n2 = prompt("Digite o segundo número:")

    switch(resp) {
        case "+":
          Somar(n1, n2)
          break;

        case "-":
          Subtrair(n1, n2)
          break;

        case "/":
          Dividir(n1, n2)
          break;

        case "*":
          Multiplicar(n1,n2)  
          break;

      }
    
    resp = prompt("Escreva Sair para encerrar o programa ou aperte enter para continuar.")

}


function Somar(valor1, valor2){

    console.log(valor1 + valor2)

}

function Subtrair(valor1, valor2){
    
    console.log(valor1 - valor2)    

}

function Dividir(valor1, valor2){
    
    console.log(valor1 / valor2)  

}

function Mutiplicar(valor1, valor2){
    
    console.log(valor1 * valor2)  

}