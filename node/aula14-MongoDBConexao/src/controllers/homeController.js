const HomeModel = require('../models/HomeModel')

//para criar dados no banco
// HomeModel.create({
//   titulo: 'Teste 2',
//   descricao: 'teste descrição 2'
// }).then(dados => console.log(dados))
//   .catch(e => console.log(e))

//para buscar dados no banco
// HomeModel.find()
//   .then(dados => console.log(dados))
//   .catch(e => console.log(e))

exports.paginaInicial = (req, res) => {
  res.render('index');
  return;
};

exports.trataPost = (req, res) => {
  res.send(req.body);
  return;
};
