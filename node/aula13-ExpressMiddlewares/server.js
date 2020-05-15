const express = require('express');
const app = express();
const routes = require('./routes');
const path = require('path');
const { middleWareGlobal } = require('./src/middlewares/middleware')

app.use(express.urlencoded({ extended: true }));

app.use(express.static(path.resolve(__dirname, 'public')));

app.set('views', path.resolve(__dirname, 'src', 'views'));
app.set('view engine', 'ejs');

//Nossos próprios middlewares
app.use(middleWareGlobal);

app.use(routes);

app.listen(3001, () => {
  console.log('Acessar http://localhost:3001');
  console.log('Servidor executando na porta 3001');
});

//conexão do mongoDB
//mongodb+srv://danielvtfs:<password>@clusterdaniel-awg5x.mongodb.net/test?retryWrites=true&w=majority