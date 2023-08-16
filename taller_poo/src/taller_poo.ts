import * as readlineSync from 'readline-sync';
let centros:Centro[] = []


class Centro{
    constructor(
        public readonly id:number,
        public nombre:string,
        public descripción:string,
        public estado:boolean,
        public ciudad:string
    ){}
}

class Ruta{
    constructor(
        public readonly id:number,
        public nombre:string,
        public centro:String,
        public empresa:string,
        public especialidad:string
    ){}
}

class Nivel{
    constructor(
        public readonly id:number,
        public nombre:string,
        public ruta:Ruta,
        public duraccion:string,
        public trainer:string,
    ){}
}

class Camper{
    constructor(
        public readonly id:number,
        public nombre:string,
        public numeroDoc:number,
        public edad:number,
        public correo:string,
        public estado:string,
        public especialidad:string,
    ){}
}

class Contrato{
    constructor(
        public readonly id:number,
        public duracion:string,
        public empleador:string,
        public empleado:string,
        public pago:string,
        public modalidad:string,
    ){}
}

let option:number = -1

while (option != 0) {
    console.log(`Bienvenido a rutas campus\n
    Digita alguna option
    0. Salir del menu
    1. Crear Centro y Rutas`);
    
    option = Number(readlineSync.question('ingrese opcion del menu que quiera activar: '));
    switch (option) {
        case 1:
            const NoCentros:number = Number(readlineSync.question("Ingrse la cantidad de centros que quieras registrar"))
            for (let i = 0; i < NoCentros; i++) {
                const id:number = i + 1
                const nombre:string = (readlineSync.question('ingrese el nombre del centro: '));
                const descripción:string = (readlineSync.question('ingrese una pequeña descripcion: '));
                let estado:any = (readlineSync.question('diguite el estado del centro(Activo=true, Inactivo=false)'));
                if (estado==="Activo") {
                    estado = true
                }
                else{
                    estado = false
                }
                const ciudad:string = (readlineSync.question('En cual ciudad se encuentra el centro'));
                const centro = new Centro(id,nombre,descripción,estado,ciudad)
                centros.push(centro)

            }
            console.log(centros);

            const buscarCentro = readlineSync.question('digite el nombre del centro al que quiera acceder')
            
            
            
            break;

        case 2:
            
            
            break;
    
        default:
            break;
    }
}


