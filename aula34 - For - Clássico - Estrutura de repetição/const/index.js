const pessoa = {
    nome: 'Luiz',
    sobrenome: 'Miranda',
    idade: 30,
    endereco: {
      rua: 'Av Brasil',
      numero: 320
    }
  };
  
  // Atribuição via desestruturação
  const { nome, sobrenome, ...resto } = pessoa;
  console.log(nome, resto);

  for (let i = 0; i <= 5; i++){
    console.log(`linha ${i}`)
  }