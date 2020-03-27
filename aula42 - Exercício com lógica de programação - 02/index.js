// Escreva uma função chamada ePaisagem que 
// que recebe dois argumentos, largura e altura 
// de uma imagem (number).
// Retorne true se a imagem estiver no modo
// paisagem.

//função comum
/* function ePaisagem (largura, altura) {
  return largura > altura ? 'Paisagem' : 'Retrato'
} */

//arrow function
const ePaisagem = (largura, altura) => largura > altura ? 'Paisagem' : 'Retrato'

console.log(ePaisagem(50, 55));
