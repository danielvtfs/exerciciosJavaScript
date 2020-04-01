//O valor padrão dos argumentos é undefined.
//O argumento pode receber valor padrão caso não seja passado.
function função(a, b = 2, c = 4) {
  console.log(a + b + c);
}
//função(2, 10)

//===============================

//Caso eu queira utilizar o valor padrão somente do B este parâmetro deve ser
//passado como undefined
function função(a, b = 2, c = 4) {
  console.log(a + b + c);
}
//função(2, undefined, 10)

//================================

//Atribuição via desestruturação
function funcao({nome, sobrenome, idade}) {
  console.log(nome, sobrenome, idade);
}
//funcao({nome: 'Daniel', sobrenome: 'Fernandez', idade: 32 + ' anos'})

//================================

function conta(operador, acumulador, ...numeros) {
  for (const numero of numeros) {
    if (operador === '+') acumulador += numero
    if (operador === '-') acumulador -= numero
    if (operador === '/') acumulador /= numero
    if (operador === '*') acumulador *= numero
  }
  console.log(acumulador);
  
}
conta('*', 50, 20, 30, 40, 50 )


const conta = (...args) => {
  console.log(args);
};
//conta('+', 1, 20, 30, 40, 50);
