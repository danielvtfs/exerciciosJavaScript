//nomes.splice(primeiro argumento(qual índice queremos mudar), 
//segundo argumento(quantos elementos queremos remover),
//próximos argumento(Elementos que serão adicionados));

const nomes = ['Maria', 'João', 'Eduardo', 'Gabriel', 'Júlia'];

const removidos = nomes.splice(2, 2)
console.log(nomes);
console.log(removidos);

// para remover de um lugar específico até o fim do array usamos Number.MAX_VALUE
const nomes2 = ['Maria', 'João', 'Eduardo', 'Gabriel', 'Júlia'];

const removidos2 = nomes2.splice(2, Number.MAX_VALUE)
console.log(nomes2);
console.log(removidos2);

// PARA ADICIONAR ELEMENTOS SEM REMOVER NENHUM ELEMENTO

const nomes3 = ['Maria', 'João', 'Eduardo', 'Gabriel', 'Júlia'];
const removidos3 = nomes3.splice(2 , 0, 'Guilherme')
console.log(nomes3);
console.log(removidos3);
