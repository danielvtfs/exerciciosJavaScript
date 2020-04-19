function teste() {
    console.log('Teste1');
    
}

class ControleRemoto {
    constructor(tv) {
        this.tv = tv;
        this.volume = 0;
        teste();
    }

    // Método de instância, será acessado pelas instâncias criadas desta classe
    aumentarVolume() {
        this.volume += 2;
    }
    diminuirVolume() {
        this.volume -= 2;
    }

    // Método estático, é acessado através da classe
    static soma(x, y) {
        return x + y;
        
    }
}

const controle1 = new ControleRemoto('LG');
controle1.aumentarVolume();

//controle1.trocaPilha(); Não funciona
console.log(ControleRemoto.soma(2, 4)); // Funciona

console.log(controle1);

