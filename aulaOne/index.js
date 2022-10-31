console.log('teste');
console.log('brunno "Khouri"');
console.log("brunno 'Khouri'");
let sobreNome = 'Khouri';
console.log("brunno 'Khouri'");
console.log(`brunno '${sobreNome}'`);
// alert('Tem certeza ?');
//1° Diferença entre let e var, impossibilidade de redeclarar a variavél.

//Ficha Ashiok

const firstname = 'Ashiok';
const lastName = 'Unknown';
const age = undefined;
const weight = 75;
const heightInM = 2.00;
imc = weight / (heightInM * heightInM)
console.log(`${firstname}, last name ${lastName}, with the age ${age}`);

//--- D20 ---//
function rollD20() {
    let d20Result = document.getElementById("d20Result");
    let d20 = Math.floor(Math.random() * 20 + 1);
    d20Result.innerHTML = d20;
}
//--- D12 ---//
function rollD12() {
    let d12Result = document.getElementById("d12Result");
    let d12 = Math.floor(Math.random() * 12 + 1);
    d12Result.innerHTML = d12;
}

//-- filter arr Example 1 --//

const ages = [20, 23, 16, 13, 30, 18, 12, 89];
const result = ages.filter(checkAdult)

function checkAdult(age) {
    return age >= 18;
}

console.log('Filtes Example One', result);

//-- filter arr Example 2 --//

const prices = [1000, 2000, null, 3000, 5000, "sla", 500, 8000];

function checkPrice(element) {
    return element > 2000 && !Number.isNaN(element)
}

let filteredPrices = prices.filter(checkPrice);

console.log('Filter Example Two', filteredPrices);


//-- filtes arr Example 3 --//

const arr = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12];

const new_arr = arr.filter((e) => e % 2 == 0);

console.log('Filter Example Theere', new_arr);