const numeros = [1, 2, 3, 4, 5];
// imperativa: Cómo
// let suma = 0;

// for (let i = 0; i < numeros.length; i++) {
//   suma += numeros[i];
//   //0+1
//   //1+2
// }

const suma = numeros.reduce((actual, item) => actual + item, 0);

console.log(suma);
