// Exemplo 1
var nome =  prompt("Insira seu primeiro nome");

console.log("Olá, " + nome);
alert("Olá, " + nome)

// Exemplo 2
var num1 = prompt("Insira um número");
var num2 = prompt("Insira outro número");
var resultado = parseInt(num1) + parseInt(num2);

console.log("A soma dos números é: " + resultado);
alert("A soma dos números é: " + resultado);

// Exemplo 3, reaproveitando o nome do exemplo 1
var sobrenome = prompt("Insira seu sobrenome");
var nomeCompleto = nome +  " " + sobrenome;

console.log("Nome completo: " + nomeCompleto);
alert("Nome completo: " + nomeCompleto);