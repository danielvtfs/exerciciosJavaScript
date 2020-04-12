// Dobre os números utilizando map()
const numeros = [5, 50, 80, 1, 2, 3, 5, 8, 7, 11, 15, 22, 27];

const numerosEmDobro = numeros.map((valor) => {
    return valor * 2;
})
//console.log(numerosEmDobro);


// Para cada elemento:


// Adicione uma chave id em cada objeto (id)
const pessoas = [
    { nome: 'Luiz', idade: 62 },
    { nome: 'Maria', idade: 23 },
    { nome: 'Eduardo', idade: 55 },
    { nome: 'Letícia', idade: 19 },
    { nome: 'Rosana', idade: 32 },
    { nome: 'Wallace', idade: 47 },
];

// Retorne apenas uma string com o nome da pessoa
const nomePessoa = pessoas.map( valor => valor.nome)
//console.log(nomePessoa);


// Remova apenas a chave "nome" do objeto
const idades = pessoas.map( obj => {
    delete obj.nome
    return obj
})
//console.log(idades);


// Adicione uma chave id em cada objeto (id)
const addId = pessoas.map( (obj, indice) => {
    obj.id = indice;
    return obj
})


console.log(addId);
