// Desafio Classificador de nível de Herói
//Professor: Felipão
//Criar uma variável para armazenar o nome e a quantidade de experiência (XP) de um herói, depois utilize uma estrutura de decisão para apresentar alguma das mensagens abaixo:

let prompt = require ("prompt-sync")();

nameHero= prompt ("Escreva o nome de um herói: ");
xpHero = prompt ("Escreva a quantidade de XP do herói: ");
let nivel = " ";


if (xpHero <= 1000){
    nivel = "Ferro";
} else if (xpHero<=2000 ){
    nivel ="Bronze";
} else if (xpHero <=5000){
    nivel ="Prata";
} else if (xpHero <= 7000){
    nivel ="Ouro";
} else if (xpHero<=8000){
    nivel = "Platina";
} else if (xpHero<= 9000){
    nivel = "Ascendente";
} else if (xpHero <=10000){
    nivel = "Imortal";
} else{
    nivel = "Radiante";
}

console.log("O Herói de nome " + nameHero + " está no nível de " + nivel);
