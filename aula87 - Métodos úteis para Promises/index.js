

function rand(min, max) {
    min *= 1000;
    max *= 1000;
    return Math.floor(Math.random() * (max - min) + min)
}

function esperaAi(msg, tempo) {
    return new Promise((resolve, reject) => {

        setTimeout(() => {
            if(typeof msg !== 'string') {
                reject('Erro no sistema');
                return;
            }

            resolve(msg)
        }, tempo);
    });
}

const promises = [
    esperaAi('promise 1', rand(1, 3)),
    esperaAi('promise 2', rand(1, 3)),
    esperaAi('promise 3', rand(1, 3)),

]

/* Promise.all(promises)
    .then(valor => {
        console.log(valor);
        
    }).catch((er) => {
        console.log(er);
        
    }) */

/*     Promise.race(promises)
    .then(valor => {
        console.log(valor);
        
    }).catch((er) => {
        console.log(er);
        
    }) */


function baixaPagina() {
    const emCache = false;

    if (emCache) {
        return Promise.resolve('Página em cache');
    } else {
        return esperaAi('Baixei a página', 3000)
    }
}

baixaPagina()
    .then(dadosPagina => {
        console.log(dadosPagina);
    })
    .catch(er => console.log(er));