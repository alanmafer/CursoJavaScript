var numero;
var resultado;

function receberNumero(numero){
    numero = prompt("Digite um número:")
    return numero;
}

function verificaNumeros(numero1, numero2, resultado){
    numero1 = receberNumero();
    numero2 = receberNumero();
    if ( numero1 % numero2 == 0) {
        resultado = "O número " + numero1 + " é multiplo do número " + numero2; 
    }
    else if (numero2 % numero1 == 0){
        resultado = "O número " + numero2 + " é multiplo do número " + numero1; 
    }
    else {
        resultado = "OS números não são multiplos."
    }
    return resultado;
}

function mostraResultado(mensagem){
    mensagem = verificaNumeros();
    alert(mensagem);
}