const nnumber = Number(prompt('Digite um número'));
const numberTitle = document.getElementById('number-title');
const text = document.getElementById('text');

numberTitle.innerHTML = nnumber;

text.innerHTML += `<p>Seu número menos 2 é ${nnumber - 2}.</p>`
text.innerHTML += `<p>Raiz quadrada de ${nnumber} é ${nnumber ** 0.5}.</p>`
text.innerHTML += `<p>É um numero, É NaN?: ${Number.isNaN(nnumber)}.</p>`
text.innerHTML += `<p>Arredondado para baixo: ${Math.floor(nnumber)}.</p>`
text.innerHTML += `<p>Arredondado para cima: ${Math.ceil(nnumber)}.</p>`
text.innerHTML += `<p>Com duas cassas decimais: ${nnumber.toFixed(2)}.</p>`