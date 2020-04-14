function Produto(nome, preco) {
    this.nome = nome;
    this.preco = preco
}

Produto.prototype.aumento = function(quantia) {
    this.preco += quantia
}

Produto.prototype.desconto = function(quantia) {
    this.preco -= quantia
}

function Camiseta(nome, preco, cor) {
    Produto.call(this, nome, preco)
}

//neste caso o construtor de camiseta passou a ser Produto e não Camiseta
Camiseta.prototype = Object.create(Produto.prototype)

//para corrigir o construtor de camiseta
Camiseta.prototype.constructor = Camiseta;

// sobrescrevendo o método aumento
Camiseta.prototype.aumento = function(percent) {
    this.preco = this.preco + (this.preco * (percent / 100))
}

function Caneca(nome, preco, material, estoque) {
    Produto.call(this, nome, preco);
    this.material = material;
    
    Object.defineProperty(this, 'estoque', {
        enumerable: true,
        configurable: false,
        get: function() {
          return estoque;
        },
        set: function(valor) {
          if (typeof valor !== 'number') return;
          estoque = valor;
        }
      });
}

Caneca.prototype = Object.create(Produto.prototype)
Caneca.prototype.constructor = Caneca;



const produto = new Produto('gen', 111);
const camiseta = new Camiseta('Regata', 7.5, 'preta');
const caneca = new Caneca('caneca', 13, 'plastico', 5);

console.log(caneca);
console.log(camiseta);
console.log(produto);
