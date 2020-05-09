/* const multiplicacao = require('./mod')
console.log(multiplicacao(2, 2)); */

const Cachorro = require('./B/C/D/mod')

const cachorro = new Cachorro('ted');
console.log(cachorro.latir());

//variaveis para buscar arquivos e caminhos
console.log(__filename); // __filename é o arquivo atual
console.log(__dirname); // __dirname é a pasta atual

//path para manipular caminhos
const path = require('path') 
console.log(path.resolve(__dirname, '..', '..'));// '..' volta uma pasta