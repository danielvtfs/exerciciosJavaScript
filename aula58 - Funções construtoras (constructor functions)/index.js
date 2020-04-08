//função construtora começa com letra maiúscula
//uso obrigatório do new

function Pessoa(nome, sobrenome) {
    //Com this o atributo ou método são públicos
    this.nome = nome;
    this.sobrenome = sobrenome;

    //sem o this o atributo ou método são privados
    const metodoInterno = () =>{
        
    }

    this.metodo = () => {
        console.log(`${this.nome} sou um método`);
        
    }
}

const p1 = new Pessoa('Daniel', 'Fernandez');
const p2 = new Pessoa('João', 'Paulo');
p1.metodo();


