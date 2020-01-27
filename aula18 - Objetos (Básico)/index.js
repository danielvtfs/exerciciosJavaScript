// OBJETOS

/* const pessoa1 = {  
    nome: 'Daniel',
    sobrenome: 'Fernandez',
    idade: 32
};

const pessoa2 = {
    nome: 'Maria',
    sobrenome: 'Silva',
    idade: 35
}; 

// O problema seria ter que criar um objeto para cada pessoa 
console.log(pessoa1.nome);
console.log(pessoa2.sobrenome); */




// FUNÇÃO CRIANDO OBJETOS

/* function criaPessoa(nome, sobrenome, idade){

    return{
     nome: nome,
        //sobrenome: sobrenome, // Forma não simplificada
        //idade: idade
        //nome,
        sobrenome,
        idade
    };
};

const pessoa1 = criaPessoa('Daniel', 'Fernandez', 32);
const pessoa2 = criaPessoa('João', 'silva', 33);
const pessoa3 = criaPessoa('Thiago', 'Souza', 34);
const pessoa4 = criaPessoa('Maria', 'Sout', 35);
const pessoa5 = criaPessoa('Cleber', 'Urts', 36);

console.log(pessoa1.nome); */

const pessoa1 = {
    nome: 'Luiz',
    sobrenome: 'Miranda',
    idade: 25,
  
    fala() {
      console.log(`A minha idade atual é ${this.idade}.`);
    },
  
    incrementaIdade() {
      this.idade++;
    }
  };
  
  pessoa1.fala();
  pessoa1.incrementaIdade();
  pessoa1.fala();
  pessoa1.incrementaIdade();
  pessoa1.fala();
  pessoa1.incrementaIdade();
  pessoa1.fala();
  