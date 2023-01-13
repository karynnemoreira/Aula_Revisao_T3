//String quer dizer texto, são guardadas entre aspas " ", ' ' ou ` `

//VAR
//Escopo Global

var cor = "azul"  //Aqui, a variável cor está no escopo global, porque existe FORA de uma função.

cor = "pink"  //Aqui estou mudando o valor de azul para pink

cor = "verde"
console.log(cor)


//Escopo Local

function animais(){
var animal = "Elefante"
console.log(animal)
}

animais();


//Escopo local 
function nomedafuncao(){
var nome = "Brendon"
nome = "Brenda"
console.log(nome)
}
nomedafuncao()

//Escopo Global
var sobreNome = "Rodrigues"


//LET

let comida = "Lasanha"
comida = "Feijoada"
comida = "Pizza"
console.log(comida)

let comida2 = "Arroz"

function cozinha(){
    let geladeira = `margarina`
    console.log(geladeira)
}
cozinha();


//CONST

const nascimento = 2000;
console.log(nascimento)
//nascimento = 2022; Não pode ser atualizada por ser uma variável constante
//console.log(nascimento)


//NUMERAL

let n1 = '3'
let n2 = '5'
let total = n1 + n2
let verdadeiro = true

console.log(typeof verdadeiro)

//let total = n1 - n2
//let total = n1 * n2
//let total = n1 / n2

// + quer dizer soma ou concatenação '' "" ``



console.log(total)