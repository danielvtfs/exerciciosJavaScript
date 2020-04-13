/* // Objeto literal
const pessoa = {
    nome: 'daniel',
    sobrenome: 'fernandez'
};

// Formas de acessar as informações do objeto
// Utilizando ponto
console.log(pessoa.nome);

// Utilizando colchetes
console.log(pessoa['sobrenome']);

//construtor de objeto
const pessoa1 = new Object();
pessoa1.nome = 'Daniel';
pessoa1.sobrenome = 'Fernandez';
pessoa1.idade = 32;
pessoa1.falarNome = () => {
    return (`${nome} está falando seu nome`);

};
pessoa1.getDataNascimento = () => {
    const dataAtual = new Date();
    console.log(dataAtual.getFullYear() - this.idade)

};



for (const key in pessoa1) {
    console.log(pessoa1[key]);

} */


//Criar molde para criar os objetos (Factory functions)
function criaPessoa(nome, sobrenome) {
    return {
        nome,
        sobrenome,
        get nomeCompleto() {
            return `${this.nome} ${this.sobrenome}`;
        }
    };
}

const p1 = criaPessoa('Daniel', 'Fernandez');
console.log(p1.nomeCompleto);

//Criar molde para criar os objetos (Constructor functions)
// new cria um objeto vazio - 
function Pessoa(nome, sobrenome) {
   this.nome = nome;
   this.sobrenome = sobrenome; 
}

const p1 = new Pessoa('Daniel', 'Fernandez')
console.log(p1);

