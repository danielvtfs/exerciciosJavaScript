//array literal
const nomes = ['daniel', 'fernandez', 'santana']
nomes[2] = 'joão';
delete nomes[1]
console.log(nomes);

// construtor de array
const nomes2 = new Array('daniel', 'fernandez', 'santana');
nomes2[2] = 'joão';
delete nomes2[1]
console.log(nomes2);

//Arrays são dados por referência (valor por referência)
//Ao expandirmos o array com o Spread(...), o valor de seus itens são copiados pra dentro do outro array. 
//Ambos arrays são independentes, então é claramente uma forma de copiar arrays que funciona.
const nomes3 = ['daniel', 'fernandez', 'santana']
const novo = [...nomes3]

novo.pop();
console.log(novo);
console.log(nomes3);

//Concatenação de arrays com Spread

const arr = ['a', 'b', 'c'];
const arr2 = ['d', 'e', 'f'];

const arr3 = [...arr, ...arr2]
console.log(arr3);

//String para Array
//E se você precisar transformar uma string em um array de caracteres? Tipo nos tempos do C-ANSI, lembra?

const str = 'hello'
const chars = [...str]
console.log(chars);

// removendo elementos do final do array com pop()
const nomes4 = new Array('daniel', 'fernandez', 'santana');
const removido = nomes4.pop();
console.log(nomes4, removido);

// removendo elementos do início do array com shift
const nomes5 = new Array('daniel', 'fernandez', 'santana');
const removido = nomes5.shift();
console.log(nomes5, removido);

// push adiciona elemento no final do array
const nomes6 = ['daniel', 'fernandez', 'santana']
nomes6.push('teixeira')
console.log(nomes6);

// unshift adiciona elemento no início do array
const nomes7 = ['daniel', 'fernandez', 'santana', 'james', 'santana']
nomes7.unshift('teixeira')
console.log(nomes7);

// slice() para fatiar o array
const nomes8 = ['daniel', 'fernandez', 'santana', 'james', 'santana']
const novo = nomes8.slice(1, 3);
console.log(novo);

// split divide elementos de uma string
const nomes9 = 'daniel fernandez santana'
const nomes = nomes9.split(' ');
console.log(nomes);

// join transforma um array em string
const nomes10 = ['daniel', 'fernandez', 'santana']
const nome = nomes10.join(' ')
console.log(nome);
