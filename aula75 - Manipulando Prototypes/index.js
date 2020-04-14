// new Object -> Object.prototype
const objA = {
    chaveA: 'A'
    // __proto__ 
}


// new Object -> Object.prototype
const objB = {
    chaveB: 'B'
    // __proto__ 
}

const objC = new Object();
objC.chaveC = 'C'

// para fazer com que objA seja prototype de objB e não mais Object.prototype
Object.setPrototypeOf(objB, objA)
Object.setPrototypeOf(objC, objB)

function Produto(nome, preco) {
    this.nome = nome;
    this.preco = preco;
}

Produto.prototype.desconto = function(percentual) {
    this.preco = this.preco - (this.preco * (percentual / 100));
};

Produto.prototype.aumento = function(percentual) {
    this.preco = this.preco + (this.preco * (percentual / 100));
};

const p1 = new Produto('camiseta', 50)

const p2 = {
    nome: 'caneca',
    preco: 15
}
//para o objeto p2 acessar os métodos do objeto produto
Object.setPrototypeOf(p2, Produto.prototype)

p2.aumento(20)
p1.aumento(10)

//para criar um objeto e já setar o prototype
const p3 = Object.create(Produto.prototype)
p3.preco = 100
p3.aumento(20)
console.log(p3);



