/* const h1 = document.querySelector('.container h1')
const data = new Date();

//MODO DEMORADO DE RESOLVER

function getDiaSemanaTexto(diaSemana) {
    let diaSemanaTexto;

    switch (diaSemana) {
        case 0:
            diaSemanaTexto = 'Domingo'
            return diaSemanaTexto;
        case 1:
            diaSemanaTexto = 'Segunda'
            return diaSemanaTexto;
        case 2:
            diaSemanaTexto = 'Terça'
            return diaSemanaTexto;
        case 3:
            diaSemanaTexto = 'Quarta'
            return diaSemanaTexto;
        case 4:
            diaSemanaTexto = 'Quinta'
            return diaSemanaTexto;
        case 5:
            diaSemanaTexto = 'Sexta'
            return diaSemanaTexto;
        case 6:
            diaSemanaTexto = 'Sábado'
            return diaSemanaTexto;    
    
        default:
            diaSemanaTexto = 'Dia da semana inválido'
            return diaSemanaTexto;
    }
}

function getNomeMes(numeroMes) {
    let numeroMesTexto;

    switch (numeroMes) {
        case 0:
            numeroMesTexto = 'janeiro'
            return numeroMesTexto;
        case 1:
            numeroMesTexto = 'fevereiro'
            return numeroMesTexto;
        case 2:
            numeroMesTexto = 'março'
            return numeroMesTexto;
        case 3:
            numeroMesTexto = 'abril'
            return numeroMesTexto;
        case 4:
            numeroMesTexto = 'maio'
            return numeroMesTexto;
        case 5:
            numeroMesTexto = 'junho'
            return numeroMesTexto;
        case 6:
            numeroMesTexto = 'julho'
            return numeroMesTexto; 
        case 6:
            numeroMesTexto = 'agosto'
            return numeroMesTexto;
        case 6:
            numeroMesTexto = 'setembro'
            return numeroMesTexto;
        case 6:
            numeroMesTexto = 'outubro'
            return numeroMesTexto;
        case 6:
            numeroMesTexto = 'novembro'
            return numeroMesTexto;
        case 6:
            numeroMesTexto = 'dezenbro'
            return numeroMesTexto;  
         
    
        default:
            numeroMesTexto = 'Dia da semana inválido'
            return numeroMesTexto;
    }
}

function zeroAEsquerda (num) {
    return num >= 10 ? num : `0${num}`;
}

function criaData(data) {
    const diaSemana = data.getDay();
    const numeroMes = data.getMonth();

    const nomeDia = getDiaSemanaTexto(diaSemana);
    const nomeMes = getNomeMes(numeroMes);

    return (
        `${nomeDia}, ${data.getDate()} de ${nomeMes} 
        de ${data.getFullYear()} ${zeroAEsquerda(data.getHours())}:${zeroAEsquerda(data.getMinutes())}`
    
    );
}

h1.innerHTML = criaData(data) */

//MODO SIMPLIFICADO

const h1 = document.querySelector('.container h1')
const data = new Date();
const opcoes = {
    dateStyle: 'full',
    timeStyle: 'short'
}

h1.innerHTML = data.toLocaleDateString('pt-BR', opcoes)