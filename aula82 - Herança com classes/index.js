class DispositivoEletronoco {
    constructor(nome) {
        this.nome = nome;
        this.ligado = false;
    }

    ligar() {
        if (this.ligado) {
            console.log(this.nome + ' Dispositivo já está ligado');
            return;
        }
        this.ligado = true;
    }

    desligar() {
        if (!this.ligado) {
            console.log(this.nome + ' Dispositivo já está desligado');
            return;
        }
        this.ligado = false;
    }
}

class Smartphone extends DispositivoEletronoco{
    constructor(nome, cor) {
        super(nome)
        this.cor = cor;
    }
}

const s1 = new Smartphone('iphone');
console.log(s1);
