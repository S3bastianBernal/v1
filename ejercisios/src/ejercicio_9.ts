// 9. N atletas han pasado a finales en salto triple en los juegos
// olímpicos femenino de 2022. Diseñe un programa que pida por
// teclado los nombres de cada atleta finalista y a su vez, sus
// marcas del salto en metros. Informar el nombre de la atleta
// campeona que se quede con la medalla de oro y si rompió
// récord, reportar el pago que será de 500 millones. El récord
// esta en 15,50 metros.

import * as readlineSync from 'readline-sync';

interface Atletas {
    nombre: string,
    marca:  number
}

const nombre1:string = (readlineSync.question('ingrese nombre del primer atleta: '));
const marca1:number = Number(readlineSync.question('ingrese la marca del primer atleta: '));


const nombre2:string = (readlineSync.question('ingrese nombre del segundo atleta: '));
const marca2:number = Number(readlineSync.question('ingrese la marca del segundo atleta: '));

const nombre3:string = (readlineSync.question('ingrese nombre del tercer atleta: '));
const marca3:number = Number(readlineSync.question('ingrese la marca del tercer atleta: '));

const atleta1:Atletas ={
    nombre: nombre1,
    marca: marca1
}

const atleta2:Atletas ={
    nombre: nombre2,
    marca: marca2
}

const atleta3:Atletas ={
    nombre: nombre3,
    marca: marca3
}

const atletas:any[] = [atleta1,atleta2,atleta3]

function compareFuncion(atleta1:any, atleta2:any){
    if (atleta1.marca < atleta2.marca) {
        return 1;
    }

    if (atleta1.marca > atleta2.marca) {
        return -1;
    }

    return 0;
}

atletas.sort(compareFuncion);

let campeona:any = atletas[0].nombre;
let marcaCampeona:any = atletas[0].marca;
let record:boolean = false;

if (marcaCampeona > 15.5) {
    record = true
}

console.log(`Resultados\n Atleta Campeona: ${campeona}\n Marca de la campeona: ${marcaCampeona}`);

if (record = true) {
    console.log(`la atleta ${campeona} rompio el record y se lleva el premio`);
    
}





