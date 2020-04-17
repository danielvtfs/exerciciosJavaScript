class Pessoa {
    constructor(nome, sobrenome){
        this.nome = nome;
        this.sobrenome = sobrenome;
    }
    
    //diferente das factory e construction functions, com as classes,
    //os métodos já são colocados no prototype automaticamente.
    falar (){
        console.log(`${this.nome} está falando`);   
    }

}

function Pessoa2(nome, sobrenome) {
    this.nome = nome;
    this.sobrenome = sobrenome;
}

Pessoa2.prototype.falar = function() {
    console.log(`${this.nome} está falando`);
}

const p1 = new Pessoa('daniel', 'fernandez');
const p2 = new Pessoa2('João', 'silva');


console.log(p1);
console.log(p2);
