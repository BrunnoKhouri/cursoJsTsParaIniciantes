//--------------------STRINGS------------------------//
let varA = 'A';
let varB = 'B';
let varC = 'C';
let varAux = '';

varAux = varC;
varC = varA; // A
varA = varB // B
varB = varAux; //C
console.log(varC, varA, varB);
// ||
[varC, varA, varB] = [varB, varC, varA];
console.log(varA, varB, varC);

let nome = 'Ughmagrump Barda Hogakh Felorba';

console.log(nome);
console.log(nome.length);
console.log(nome.charAt(1));
console.log(nome.indexOf('u'));
console.log(nome.lastIndexOf('u'));
console.log(nome.slice(-3));
console.log(nome.split(' '));
console.log(nome.toLowerCase());
console.log(nome.toUpperCase());

//--------------------NUMBERS------------------------//

let num1 = 2
let num2 = 3
let num3 = 10.1234567890;
let num4 = 0.99999;

num1 = Number(num1);
num2 = Number(num2);

//Convert um numero para string.
console.log(typeof num1.toString());

//Define as casas decimais.
console.log(num3.toFixed(2));

//Soma ou concatena variaveis.
const resultado = num1 + num2;
console.log(resultado);

//Verifica se o numero é inteiro.
console.log(Number.isInteger(num3));
console.log(Number.isFinite(num3));

//Verifica a validade em Boolean para NAN.
// Caso uso do + seria concatenado e retornaria false, para validaçao.
// Dica nunca faça calculo com string.
let temp = num1 * 'teste';
console.log(Number.isNaN(temp));

//Tratando numeros flutuantes.
console.log(num4);
console.log(num4.toFixed(2));
console.log(Number.isInteger(1.00));
console.log(Number.isInteger(num4));
num4 = parseFloat(num4.toFixed(2));
console.log(Number.isInteger(num4));
