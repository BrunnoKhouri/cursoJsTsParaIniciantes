const nome = 'Brunno';
console.log(nome.slice(0, 1));

const alunos = ['Luiz', 'Maria', 'João'];
console.log(alunos);

console.log(typeof alunos);
console.log(alunos instanceof Array);
//Pegar items de um array
console.log(alunos.slice(0, 2));

//Adicionar item no inicio do array;
alunos.unshift('Agnes');
console.log(alunos);

//Adicionar item no final do array;
alunos.push('Joyce');
console.log(alunos);

// Remove o ultimo item do array || 
// Adiciona ele em um var;

alunos.pop();
console.log(alunos);

let ultimoAluno = alunos.pop();
console.log(ultimoAluno);

// Remove o primeiro item do array || 
// Adiciona ele em um var;

alunos.shift();
console.log(alunos);

let primeiroAluno = alunos.shift();
console.log(primeiroAluno);

