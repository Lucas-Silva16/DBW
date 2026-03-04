'use strict' ; //ECCM 6

console.log("Conectado");

const nome="Lucas";
const disciplina="Bem vindo a DBW";



//Exercício 1
function stringTemplate(){
    console.log("Ola! ",nome, " ", disciplina);
}


//Exercício 2
function comparações(){

//Deve imprimir true se dois valores forem iguais.
    const igualvalor = 5 == "5";
//Deve imprimir true se dois valores forem iguais em valor e em tipo.
    const igualvalorTipo = 5 === 5;
//Deve imprimir false se dois valores forem diferentes.
    const valDiferente = 5 != 5;
//Deve imprimir true se dois valores forem diferentes em valor e em tipo
    const valDiferenteEtipo = 5 !== "lucas";
//Deve imprimir false se um valor for maior do que outro.
    const maior = 3 > 5;


    console.log(`igualValor(==): ${igualvalor}`);
    console.log(`igualValorTipo(===): ${igualvalorTipo}`);
    console.log(`valDiferente(!=): ${valDiferente}`);
    console.log(`valDiferenteEtipo(!==): ${valDiferenteEtipo}`);
    console.log(`maior(>): ${maior}`);

}


//Exercício 3

function horas(){
    const date = new Date();
    const horas = date.getHours();
    const minutos = date.getMinutes();

    if (horas > 7 && horas < 12){
        console.log(`Bom dia! São ${horas} horas e ${minutos} minutos`);
    }else if (horas >= 12 && horas < 19){
        console.log(`Bom Tarde! São ${horas} horas e ${minutos} minutos`);
    }
    else {
        console.log(`Boa noite! São ${horas} horas e ${minutos} minutos`);
    }

}

// Exercício 4

function arrayManip(){

    let array = "Desenvolvimento baseado na web é uma disciplina interessante".split(" ");
    let rep = array.map(p => p.replace(/i/g, "w"));
    let upper = array.map(p => p.toUpperCase());

    for (let i = 0; i < array.length; i++){
        console.log(array[i]);
    }

    array.forEach((item, index) => console.log(rep[index]));
    array.forEach((item, index) => console.log(upper[index]));
}


//Exercício 5

function somaSimples(x,y,z){
    return x + y + z;
}
function somaArrays(){
    const array1 = [1,2,3];
    console.log(somaSimples(...array1));
}

//Exercício 6

const formulaUm = [
  { piloto: "Schumacher", equipa: "Ferrari", reformado: true },
  { piloto: "Verstappen", equipa: "Red Bull", reformado: false },
  { piloto: "Alonso", equipa: "Aston Martin", reformado: false }
];

function formulaum(){

for (let i =0; i < formulaUm.length; i++){
    const p = formulaUm[i];
    if(p.reformado ==true){
        console.log(`O piloto ${p.piloto} esta reformado`)
    } else {
        console.log(`O piloto ${p.piloto} esta na equipa ${p.equipa}`)
        }
    }
}

// Desafio

function imprimirCancao(elementos) {
    let resultado = "";
    
    elementos.forEach(item => {
        resultado += item; 
    });
    
    console.log(resultado);
}

function stringConcat(callback, ...composicao) {
    callback(composicao);
}

stringConcat(
    imprimirCancao, 
    "B", "e", "e", "t", "h", "o", "v", "e", "n", " ", "-", " ", "S", "i", "n", "f", "o", "n", "i", "a", " ", "n", ".", "º", " ", "9"
);