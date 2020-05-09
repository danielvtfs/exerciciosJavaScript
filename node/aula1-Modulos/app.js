//const mod1 = require('./mod1');
const {Pessoa} = require('./mod2')

const axios = require('axios')
 
// importar por desestruturação
const { nome, sobrenome, falaNome } = require('./mod1')

falaNome()

const p1 = new Pessoa('Daniel');
console.log(p1);

axios('https://www.otaviomiranda.com.br/files/json/pessoas.json')
    .then(response => console.log(response.data)
    ).catch(e => console.log(e))
