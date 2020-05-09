const path = require('path');
const caminhoArquivo = path.resolve(__dirname, 'teste.json');
const escreve = require('./modules/escrever')
const ler = require('./modules/ler')

/* const pessoas = [
    {nome: 'joão'},
    {nome: 'maria'},
    {nome: 'Eduardo'},
    {nome: 'luiza'}
];

const json = JSON.stringify(pessoas, '', 2);
escreve(caminhoArquivo, json) */

async function lerArquivo(caminho) {
    const dados = await ler(caminho)
    renderizadados(dados);
}

function renderizadados(dados) {
    dados = JSON.parse(dados)
    
    dados.forEach(val => {
        console.log(val);
        
    });
}

lerArquivo(caminhoArquivo)

/* const dadosArquivo = lerArquivo(caminhoArquivo)
    .then(dados => console.log(dados)) */
