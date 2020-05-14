const express = require('express');
const app = express();

// para tratar o body das requisições para tratar o POST ou PUT
app.use(express.urlencoded({extended: true}));

app.get('/', (req, res) => {
    res.send(`
    <form action="/" method="POST">
    Nome: <input type="text" name="nome">
    <button>enviar</button>
    </form>
    `)
});

app.get('/testes/:idUsuarios?/:parametro?', (req, res) => {
    console.log(req.params);
    console.log(req.query);
    res.send(req.params)
})

app.post('/', (req, res) => {
    console.log(req.body);
    res.send(`Foi enviado: ${req.body.nome}`)
})


app.listen(3000, () => {
    console.log('Acessar http://localhost:3000');
    console.log('Servidor executando');
    
})