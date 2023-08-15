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
const nombre1 = (readlineSync.question('ingrese nombre del primer atleta: '));
const marca1 = Number(readlineSync.question('ingrese la marca del primer atleta: '));
const nombre2 = (readlineSync.question('ingrese nombre del segundo atleta: '));
const marca2 = Number(readlineSync.question('ingrese la marca del segundo atleta: '));
const nombre3 = (readlineSync.question('ingrese nombre del tercer atleta: '));
const marca3 = Number(readlineSync.question('ingrese la marca del tercer atleta: '));
const atleta1 = {
    nombre: nombre1,
    marca: marca1
};
const atleta2 = {
    nombre: nombre2,
    marca: marca2
};
const atleta3 = {
    nombre: nombre3,
    marca: marca3
};
const atletas = [atleta1, atleta2, atleta3];
function compareFuncion(atleta1, atleta2) {
    if (atleta1.marca < atleta2.marca) {
        return 1;
    }
    if (atleta1.marca > atleta2.marca) {
        return -1;
    }
    return 0;
}
atletas.sort(compareFuncion);
let campeona = atletas[0].nombre;
let marcaCampeona = atletas[0].marca;
let record = false;
if (marcaCampeona > 15.5) {
    record = true;
}
console.log(`Resultados\n Atleta Campeona: ${campeona}\n Marca de la campeona: ${marcaCampeona}`);
if (record = true) {
    console.log(`la atleta ${campeona} rompio el record y se lleva el premio`);
}
