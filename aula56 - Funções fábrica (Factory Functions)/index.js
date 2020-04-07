function criaPessoa(nome, sobrenome, altura, peso) {
    return {
        nome, 
        sobrenome,
        altura,
        peso,
        //getter
        get nomeCompleto(){
            return `${this.nome} ${this.sobrenome}`
        },
        //setter
        set nomeCompleto(string){
            string = string.split(' ');
            this.nome = string.shift();
            console.log(string);
            this.sobrenome = string.join();
        },

        fala (assunto) {
            return `${nome} está ${assunto}`;
        },

        //getter
        get imc(){
            const indice = this.peso / (this.altura ** 2);
            return indice.toFixed(2);
        }
    };
}

const p1 = criaPessoa('Daniel', 'Fernandez', 1.80, 85);
p1.nomeCompleto = 'Daniel Santana'

console.log(p1.nomeCompleto);



