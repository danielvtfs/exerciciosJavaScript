const rand = (min, max) => Math.floor(Math.random() * (max - min) + min);

const geraMaiuscula = () => String.fromCharCode(rand(65, 91))
const geraMinuscula = () => String.fromCharCode(rand(97, 123))
const geranumero = () => String.fromCharCode(rand(48, 58))
const simbolos = ',.;~^[]{}=+!@#$%&*()';
const geraSimbolo = () => simbolos[rand(0, simbolos.length)]

console.log(geraSimbolo());
