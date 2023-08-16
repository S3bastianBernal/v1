// Construir el algoritmo que lea por teclado dos números,
// si el primero es mayor al segundo informar su suma y
// diferencia, en caso contrario, informar el producto y la
// división del primero respecto al segundo.
import * as readlineSync from 'readline-sync';

const numero1:number = Number(readlineSync.question('ingrese primer numero: '));
const numero2:number = Number(readlineSync.question('ingrese segundo numero: '));

if (numero1 > numero2) {
    console.log(`La suma de los digitos da como resultado: ${numero1 + numero2} \nLa resta de los digitos da como resultado: ${numero1 - numero2} `);
}

if (numero1 < numero2) {
    console.log(`La multiplicacion de los digitos da como resultado: ${numero1 *  numero2} \nLa division de los digitos da como resultado: ${numero2 / numero1} `);
}