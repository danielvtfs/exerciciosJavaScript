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
        configurable: true, // define se a chave poderá ser apagada ou reconfigurada
        get: () => {
            return estoque
        },
        set: (valor) => {
            if (typeof valor !== 'number') {
                console.log('precisa ser um número');
                return
            }
            estoque = valor;
        }
    });

}

// com Factory function
function criaProduto(nome) {
    return {
        get nome(){
            return nome;
        },
        set nome(valor) {
            nome = valor;
        }
    }
}

/* const p1 = new Produto('Camiseta', 20, 3);
console.log(p1);
p1.estoque = 500
console.log(p1.estoque); */
const p2 = criaProduto('Camiseta');
console.log(p2);


