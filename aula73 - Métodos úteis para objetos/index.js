/*
Object.values
Object.entries
Object.getOwnPropertyDescriptor(o, 'prop')
Object.assign(des, any)
... (spread)

// Já vimos
Object.keys (retorna as chaves)
Object.freeze (congela o objeto)
Object.defineProperties (define várias propriedades)
Object.defineProperty (define uma propriedade)
*/

//Como copiar um objeto para outro objeto
//... (spread)
/* const produto = {nome: 'caneca', proco: 1.8}
const outroProduto = {...produto}; 
outroProduto.nome = 'Daniel'; */

//Object.assign(des, any)
/* const produto = {nome: 'caneca', proco: 1.8}
const outroProduto = Object.assign({}, produto)
outroProduto.nome = 'Daniel'; */

//Object.getOwnPropertyDescriptor(o, 'prop')
// exibe as propriedades que estão definidas nas chaves do objeto
const produto = {nome: 'caneca', proco: 1.8}
Object.defineProperty(produto, 'nome', {
    writable: false,
    configurable: false,
})
console.log(Object.getOwnPropertyDescriptor(produto, 'nome'));
//console.log(outroProduto);

const produto2 = {...produto}
console.log(Object.values(produto2)); //Object.values para ver somente os valores de um objeto
console.log(Object.entries(produto2)); // Object.entries retorna um array para cada chave e valor do objeto


