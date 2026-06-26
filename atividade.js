const prompt = require("prompt-sync")();


let nome = prompt("Digite um nome: ");
let letra = prompt("Digite uma letra: ");


const maiusculo = texto => texto.toUpperCase();
const minusculo = texto => texto.toLowerCase();


let posicao = nome.indexOf(letra);
let quantidade = nome.length;


console.log(
`O nome digitado foi: ${nome}
A letra pesquisada foi: ${letra}
A posição da letra pesquisada foi: ${posicao}
O nome possui ${quantidade} caracteres
Todo o texto em maiúsculo: ${maiusculo(nome)}
Todo o texto em minúsculo: ${minusculo(nome)}
Aluno: ${nome}!`
);