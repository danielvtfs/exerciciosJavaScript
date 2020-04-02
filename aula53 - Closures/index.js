// Um closure (fechamento) é uma função que se "lembra" do ambiente — ou escopo léxico — em que ela foi criada.
function retornaFuncao(nome) {
  return function(sobrenome) {
    return nome + ' ' + sobrenome;
  };
}

function falaNome(nome) {
  const sobrenome = 'Miranda';
  console.log(nome, sobrenome);
}

const funcao = retornaFuncao('Luiz');
const funcao2 = retornaFuncao('João');
console.dir(funcao);
console.dir(funcao2);

console.log(funcao('Miranda'),
  funcao2('Oliveira'));

//Escopo léxico
  // Considere a função abaixo:
  function init() {
    var name = "Mozilla";
    function displayName() {
      alert(name);
    }
    displayName();
  }
  init(); 

  /* A função init() cria uma variável local chamada name, e depois define uma função chamada displayName(). displayName() 
  é uma função aninhada (um closure) — ela é definida dentro da função init(), e está disponivel apenas dentro do corpo daquela função. 
  Diferente de init(), displayName() não tem variáveis locais próprias, e ao invés disso reusa a variável name declarada na função pai. */

  
  //Closure
//Agora considere o seguinte exemplo:
function makeFunc() {
  var name = "Mozilla";
  function displayName() {
    alert(name);
  }
  return displayName;
}

var myFunc = makeFunc();
myFunc();
