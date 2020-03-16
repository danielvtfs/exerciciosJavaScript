
// ... operador rest ou spread

const numeros = [1000, 2000 , 3000, 4000, 5000, 6000, 7000, 8000, 9000 ];

const [um, , tres, , cinco, , sete] = numeros;

console.log(um, tres, cinco, sete)
//console.log(resto)

const numeros = [
    [1, 2, 3], [4, 5, 6], [7, 8, 9]
]

console.log(numeros[1][1])