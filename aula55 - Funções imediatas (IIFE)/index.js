// IIFE -> Immediately invoked function expression

/* Funções de auto-invocação
Expressões de função podem ser "auto-invocadas".

Uma expressão de auto-chamada é invocada (iniciada) automaticamente, sem ser chamada.

As expressões de função serão executadas automaticamente se a expressão for seguida por ().

Você não pode auto-invocar uma declaração de função.

Você precisa adicionar parênteses ao redor da função para indicar que é uma expressão de função:
 */
(function(idade, peso, altura) {

  const sobrenome = 'Miranda';
  function criaNome(nome) {
    return nome + ' ' + sobrenome;
  }

  function falaNome() {
    console.log(criaNome('Luiz'));
  }

  falaNome();
  console.log(idade, peso, altura);

})(30, 80, 1.80);
