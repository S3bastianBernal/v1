"use strict";
var __createBinding = (this && this.__createBinding) || (Object.create ? (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    var desc = Object.getOwnPropertyDescriptor(m, k);
    if (!desc || ("get" in desc ? !m.__esModule : desc.writable || desc.configurable)) {
      desc = { enumerable: true, get: function() { return m[k]; } };
    }
    Object.defineProperty(o, k2, desc);
}) : (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    o[k2] = m[k];
}));
var __setModuleDefault = (this && this.__setModuleDefault) || (Object.create ? (function(o, v) {
    Object.defineProperty(o, "default", { enumerable: true, value: v });
}) : function(o, v) {
    o["default"] = v;
});
var __importStar = (this && this.__importStar) || function (mod) {
    if (mod && mod.__esModule) return mod;
    var result = {};
    if (mod != null) for (var k in mod) if (k !== "default" && Object.prototype.hasOwnProperty.call(mod, k)) __createBinding(result, mod, k);
    __setModuleDefault(result, mod);
    return result;
};
Object.defineProperty(exports, "__esModule", { value: true });
const readlineSync = __importStar(require("readline-sync"));
let centros = [];
class Centro {
    constructor(id, nombre, descripción, estado, ciudad) {
        this.id = id;
        this.nombre = nombre;
        this.descripción = descripción;
        this.estado = estado;
        this.ciudad = ciudad;
    }
}
class Ruta {
    constructor(id, nombre, centro, empresa, especialidad) {
        this.id = id;
        this.nombre = nombre;
        this.centro = centro;
        this.empresa = empresa;
        this.especialidad = especialidad;
    }
}
class Nivel {
    constructor(id, nombre, ruta, duraccion, trainer) {
        this.id = id;
        this.nombre = nombre;
        this.ruta = ruta;
        this.duraccion = duraccion;
        this.trainer = trainer;
    }
}
class Camper {
    constructor(id, nombre, numeroDoc, edad, correo, estado, especialidad) {
        this.id = id;
        this.nombre = nombre;
        this.numeroDoc = numeroDoc;
        this.edad = edad;
        this.correo = correo;
        this.estado = estado;
        this.especialidad = especialidad;
    }
}
class Contrato {
    constructor(id, duracion, empleador, empleado, pago, modalidad) {
        this.id = id;
        this.duracion = duracion;
        this.empleador = empleador;
        this.empleado = empleado;
        this.pago = pago;
        this.modalidad = modalidad;
    }
}
let option = -1;
while (option != 0) {
    console.log(`Bienvenido a rutas campus\n
    Digita alguna option
    0. Salir del menu
    1. Crear Centro`);
    option = Number(readlineSync.question('ingrese opcion del menu numero: '));
    switch (option) {
        case 1:
            const id = Number(readlineSync.question('ingrese el id del centro: '));
            const nombre = (readlineSync.question('ingrese el nombre de la ruta'));
            const descripción = (readlineSync.question('ingrese una pequeña descripcion'));
            let estado = (readlineSync.question('diguite el estado del centro(Activo=true, Inactivo=false)'));
            if (estado === "Activo") {
                estado = true;
            }
            else {
                estado = false;
            }
            const ciudad = (readlineSync.question('En cual ciudad se encuentra el centro'));
            const centro = new Centro(id, nombre, descripción, estado, ciudad);
            centros.push(centro);
            console.log(centros);
            break;
        case 2:
            console.log(2);
            break;
        default:
            break;
    }
}
