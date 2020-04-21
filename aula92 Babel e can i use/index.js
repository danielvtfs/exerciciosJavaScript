const nome = 'Daniel';
const obj = { nome };
const novoObj = {...obj}

class Pessoa {
    constructor(nome, sobrenome){
        this.nome = nome;
        this.sobrenome = sobrenome;
    }
}