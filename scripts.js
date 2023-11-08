class CamisasDeClubes{
    constructor(clube, modelo, tamanho, temporada, quantidade){
        this.clube = clube;
        this.modelo = modelo;
        this.tamanho = tamanho;
        this.temporada = temporada;
        this.quantidade = quantidade;
    }
}

function carregarTabela(){
    const tabela = document.querySelector("#corpoTabela");
    
    const corpoTabela =  document.createElement("tr");
    tabela.appendChild(corpoTabela);

    const linha = document.createElement("th");
    corpoTabela.appendChild(linha);

    const coluna1 = document.createElement("td");
    coluna1.classList.add("clube");
    coluna1.innerText = CamisasDeClubes.clube;
    corpoTabela.appendChild(coluna1);

    const coluna2 = document.createElement("td");
    coluna2.classList.add("modelo");     
    corpoTabela.appendChild(coluna2);

    const coluna3 = document.createElement("td");
    coluna3.classList.add("temporada");
    corpoTabela.appendChild(coluna3);

    const coluna4 = document.createElement("td");
    coluna4.classList.add("tamanho");
    corpoTabela.appendChild(coluna4);

    const coluna5 = document.createElement("td");
    coluna5.classList.add("quantidade");
    corpoTabela.appendChild(coluna5);    

}

function cadastrar(){
    const clube = document.getElementById("nomeClube").value;
    const modelo = document.getElementById("modelo").value;
    const tamanho = document.getElementById("tamanho").value;
    const temporada = document.getElementById("temporada").value;
    const quantidade = document.getElementById("quantidade").value

    const camisa1 = new CamisasDeClubes(clube, modelo, tamanho, temporada, quantidade);

    carregarTabela();

};




