function newSaudation(name) {
    console.log(name);
}

newSaudation('Brunno');

// função com retorno
function saudationOne(name) {
    return `Olá ${name}`
}

const variavel = saudationOne('Joyce');
console.log(variavel);

//Função para criar objeto;

function createPerson(name, lastName, age) {
    return {
        name: name,
        lastName: lastName,
        age: age
    }
};

let person = createPerson('Joyce', 'Khouri', 26);
console.log(person);