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
    constructor(nome, cor, modelo) {
        super(nome)
        this.cor = cor;
        this.modelo = modelo;
    }
}

class Tablet extends DispositivoEletronoco {
    constructor(nome, temWiFi) {
        super(nome);
        this.temWiFi = temWiFi;
    }

    ligar() {
        console.log('método ligar sobrescrito');
    }
}

const s1 = new Smartphone('Samsung', 'preto', 'Galaxy S10');
console.log(s1);

const t1 = new Tablet('iPad', true);
t1.ligar()
