function decrementaNumeros(){

    const numero = parseFloat(document.getElementById("number").value);

    // Diminui de 100 até 0 pelo número digitado

    for(let i = 100; i >=0; i=i-numero) {
        document.getElementById("mensagem").innerHTML ="Verifique no console o resultado!"
        console.log(i)
    }

};

function valorParcelas(){

    const valor = parseFloat(document.getElementById("valor").value);
    const parcela = parseFloat(document.getElementById("parcelas").value);
    var valorParcelas = 0;
    var i = 1;

    while (i <= parcela) {
        valorParcelas = valor / parcela;
        console.log("O Valor da " + i +"º- Parcela é: R$" + valorParcelas +",00");
        i++;
        document.getElementById("mensagem").innerHTML ="Verifique no console o resultado!"
    }

}
