const nome = 'Daniel';
const sobrenome = 'Fernandez';
const idade = 33;

// podemos exportar diretamente a função, classe ou variável
//default será a exportação padrão deste módulo
export default function soma(x, y) {
    return x + y;
}

export class Pessoa {
    constructor(nome, sobrenome) {
        this.nome = nome;
        this. sobrenome = sobrenome;
    }
}

export {
    nome,
    sobrenome,
    idade,
    
}