function criaPessoa(nome, sobrenome) {
    return {
        nome, 
        sobrenome,
        fala (assunto) {
            return `${nome} está ${assunto}`;
        },
        peso: 80,
        altura

    };
}

const p1 = criaPessoa('Daniel', 'Fernandez');
console.log(p1.fala('falando sobre js'));
