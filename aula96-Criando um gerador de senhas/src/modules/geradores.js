const rand = (min, max) => Math.floor(Math.random() * (max - min) + min);

const geraMaiuscula = () => String.fromCharCode(rand(65, 91))
const geraMinuscula = () => String.fromCharCode(rand(97, 123))
const geranumero = () => String.fromCharCode(rand(48, 58))
const simbolos = ',.;~^[]{}=+!@#$%&*()-';
const geraSimbolo = () => simbolos[rand(0, simbolos.length)]

export default function geraSenha(qtd, maiusculas, minusculas, numeros, simbolos) {
    const senhaArray = [];
    qtd = Number(qtd)

    for (let i = 0; i < qtd; i++) {
        maiusculas && senhaArray.push(geraMaiuscula());//verifica se maiusculas é true e gera.
        minusculas && senhaArray.push(geraMinuscula());//verifica se minusculas é true e gera.
        numeros && senhaArray.push(geranumero());//verifica se numeros é true e gera.
        simbolos && senhaArray.push(geraSimbolo());//verifica se simbolos é true e gera.
        
    }

    return senhaArray.join('').slice(0, qtd);
    
}

console.log(geraSenha(10, true, true, true));
