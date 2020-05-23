// dotenv referente as variáveis de ambiente, arquivo .env. 
// Contém os dados do servidor de dados
require('dotenv').config();

const express = require('express');
const app = express();

// mongoose modela a base de dados e garante que os dados estejam da forma correta.
// substitui o drive oficial do mongoDB
const mongoose = require('mongoose')
mongoose.connect(process.env.CONNECTIONSTRING, { useNewUrlParser: true, useUnifiedTopology: true })
  .then(() => {
    app.emit('pronto')
  }).catch(e => console.log(e))

// session identifica o navegador do cliente, salva cookies para "lembrar" alguns dados do cliente
const session = require('express-session');

// MongoStrore para salvar as sessions na base de dados.
// Por padrão essas sessions são salvas na memória.
const MongoStrore = require('connect-mongo')(session);

// flash manda Mensagens para o usuário, são salvas em sessions
const flash = require('connect-flash');

// routes são as rotas da aplicação
const routes = require('./routes');

// path são os caminhos do projeto
const path = require('path');

// O Helmet pode ajudar a proteger o seu aplicativo de algumas vulnerabilidades 
// da web bastante conhecidas configurando os cabeçalhos HTTP adequadamente.
const helmet = require('helmet');

// csrf cria tokens para os formulários da aplicação. Garantindo a segurança.
const csrf = require('csurf');

// middlewares são funções que são executadas na rota. 
const { middleWareGlobal, checkCsrfError, csrfMiddleware} = require('./src/middlewares/middleware')


app.use(helmet());
app.use(express.urlencoded({ extended: true }));
app.use(express.json());

// Arquivos estáticos são acessados diretamente, imagens, css, javascript...
app.use(express.static(path.resolve(__dirname, 'public')));

const sessionOptions = session({
  secret: 'fkjoasdfdsa%@%¨$@&BDFSGHdfghsdh',
  store: new MongoStrore({ mongooseConnection: mongoose.connection }),
  resave: false,
  saveUninitialized: false,
  cookie: {
    maxAge: 1000 * 60 * 60 * 24 * 7,
    httpOnly: true
  }
})
app.use(sessionOptions);
app.use(flash());

app.set('views', path.resolve(__dirname, 'src', 'views'));
app.set('view engine', 'ejs');

//Nossos próprios middlewares
app.use(csrf());
app.use(middleWareGlobal);
app.use(checkCsrfError);
app.use(csrfMiddleware);
app.use(routes);

app.on('pronto', () => {
  app.listen(3000, () => {
    console.log('Acessar http://localhost:3000');
    console.log('Servidor executando na porta 3000');
  });
})