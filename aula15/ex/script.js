const numero = prompt('Digite um número');
const numeroTitulo = document.getElementById('numero-titulo');
const texto = document.getElementById('texto');

numeroTitulo.innerHTML = numero;
texto.innerHTML = `<p> seu número é - 2 é ${numero - 2}</p>`;