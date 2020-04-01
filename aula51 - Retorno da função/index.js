function criaMultiplicador(multiplicador) {
  return (n) => {
    return n * multiplicador;
  };
}

const duplica = criaMultiplicador(2);
const truplica = criaMultiplicador(3);
const quadruplica = criaMultiplicador(4);

console.log(duplica(2));
console.log(truplica(2));
console.log(quadruplica(2));
