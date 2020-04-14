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

const produto = new Produto('gen', 111);
const camiseta = new Camiseta('Regata', 7.5, 'preta');
camiseta.aumento(10)
console.log(camiseta);
console.log(produto);

