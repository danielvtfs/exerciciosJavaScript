// Filter, map e reduce são as funções mais importantes para Arrays em JS

const numeros = [5, 50, 80, 1, 2, 3, 5, 8, 7, 11, 15, 22, 27];

// criando a função de callback separada do filter
/* function callbackFilter(valor) {
    return valor > 10;
} */

// criando a função de callback dentro do filter com arrow function 
/* const numerosFiltrados = numeros.filter((valor, indice, array) => {
    console.log(valor, indice, array);
    return valor > 10
}); */

// criando a função de callback dentro do filter com arrow function de forma reduzida
const numerosFiltrados = numeros.filter(valor => valor > 10 );
console.log(numerosFiltrados);

// *****segundo exemplo




const pessoas = [
    { nome: 'Luiz', idade: 62 },
    { nome: 'Maria', idade: 23 },
    { nome: 'Eduardo', idade: 55 },
    { nome: 'Letícia', idade: 19 },
    { nome: 'Rosana', idade: 32 },
    { nome: 'Wallace', idade: 47 },
];

// Retorne as pessoas que tem o nome com 5 letras ou mais
const nomeGrande = pessoas.filter((obj) => {
    return obj.nome.length >= 5;  
});


// Retorne as pessoas com mais de 50 anos
const idosos = pessoas.filter((obj) => {
    return obj.idade > 50;
});



// Retorne as pessoas cujo nome termina com a
const nomesTerminadosEmA = pessoas.filter((obj) => {
    return obj.nome.toLowerCase().endsWith('a')
})

console.log(nomesTerminadosEmA);