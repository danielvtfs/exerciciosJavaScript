/* O método Object.defineProperty() define uma nova propriedade diretamente em um objeto, 
ou modifica uma propriedade já existente em um objeto, e retorna o objeto. */

//Sintaxe
//Object.defineProperty(obj, prop, descriptor)

/* Object.defineProperties, em essência, define todas as propriedades correspondentes para as 
propriedades próprias  enumeráveis de props sobre o objeto obj. */

function Produto(nome, preco, estoque) {
    this.nome = nome;
    this.preco = preco;

    Object.defineProperty(this, 'estoque', {
        enumerable: true, // para exibir a chave
        value: estoque, // define qual o valor será exibido
        writable: false, // define se o valor poderá ser alterado
        configurable: false, // define se a chave poderá ser apagada ou reconfigurada
    })

    Object.defineProperties(this, {
       nome: {
        enumerable: true, // para exibir a chave
        value: nome, // define qual o valor será exibido
        writable: false, // define se o valor poderá ser alterado
        configurable: false, // define se a chave poderá ser apagada ou reconfigurada
       } 
    });
}

const p1 = new Produto('Camiseta', 20, 3);
console.log(Object.keys(p1));
