
const numeros = [5, 50, 80, 1, 2, 3, 5, 8, 7, 11, 15, 22, 27];

/* // Some todos os números (reduce)
const total = numeros.reduce((acumulador, valor) => {
    acumulador += valor;
    return acumulador; 
}, [])

console.log(total); */

//retorne um array com os números pares
// neste caso o ideal seria usar o filter
const total = numeros.reduce((acumulador, valor) => {
    if (valor % 2 === 0) acumulador.push(valor);
    return acumulador;
})

console.log(total);


// Retorne a pessoa mais velha
const pessoas = [
    { nome: 'Luiz', idade: 62 },
    { nome: 'Maria', idade: 23 },
    { nome: 'Eduardo', idade: 28 },
    { nome: 'Letícia', idade: 10 },
    { nome: 'Rosana', idade: 64 },
    { nome: 'Wallace', idade: 63 },
  ];

  const maisVelho = pessoas.reduce((acumulador, valor) => {
    if (acumulador.idade > valor.idade) {
        return acumulador
    }
    return valor;
  })

  console.log(maisVelho);
  