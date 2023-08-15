//object (arrays)

let goleadores:string[] = ["Jisas","Amed","Yedher"];

let goles:number[] = [0,5,-2];

let tirosEsquiva:number[] = []

console.log(`goleadores: ${goleadores}`);
console.log(`goles: ${goles}`);

//Metodo alternativo para definir arrays en typescript

let wereTherePenalties: Array<boolean> = [false]

console.log(`There were penalties: ${wereTherePenalties}`);

// Typescript infieren los metodos aplicables segun el tipo de dato

console.log(goles.map(ele => ele.toString()));

let goleadoresId = [10,7, 9, 11]

goleadoresId.push(1)

console.log(goleadoresId);

goleadoresId.push(+'13')

console.log(typeof goleadoresId);

// objects 

const songs = {
    id: 1,
    name: "Exceeding Joy",
}

console.log(songs);

const objecto:{
    readonly id:number,
    nombre:string,
    edad: number,
    sueldo?: number
} = {
    id: 8,
    nombre: "jisas",
    edad: 10
}

objecto.edad = 11
/* objecto.id = 9 */
console.log(objecto.id);





