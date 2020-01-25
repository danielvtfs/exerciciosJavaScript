function saudacao(nome){  // Função
    console.log(`Bom dia ${nome}`)
}

saudacao('Daniel');

function soma(x, y){ // Função
const resultado = x + y;
return resultado
}

console.log(soma(2, 2));

const raiz = function (n) { // Função anônima 
    return n ** 0.5
};

const raiz2 = (n) => { // Arrow function 
    return n ** 0.5
};

const raiz3 = n => n ** 0.5 // Arrow function simplificada,  


console.log(raiz2(9))