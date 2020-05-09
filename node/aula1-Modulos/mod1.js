const nome = 'daniel';
const sobrenome = 'fernandez';

const falaNome = () => {
    console.log(nome, sobrenome);
    
}

/* //utilizado para exportar
module.exports.nome = nome;
module.exports.sobrenome = sobrenome;
module.exports.falaNome = falaNome; */

//funciona do mesmo jeito anterior
exports.nome = nome;
exports.sobrenome = sobrenome;
exports.falaNome = falaNome;
this.qualqueCoisa = 'Qualquer coisa';//neste contexto 'this' aponta para exports

