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
// Programa que pida el ingreso del nombre y precio de un artículo y la
// cantidad que lleva el cliente. Mostrar lo que debe pagar el comprador
// en su factura. 
const readlineSync = __importStar(require("readline-sync"));
function obtenerProducto() {
    let nombreArticulo = readlineSync.question('Ingrese el nombre del articulo: ');
    let precioArticuloStr = readlineSync.question('Ingrese el precio del articulo: ');
    let precioArticulo = parseFloat(precioArticuloStr);
    if (isNaN(precioArticulo) || precioArticulo <= 0) {
        console.log('Precio no valido. Intente nuevamente.');
        return obtenerProducto();
    }
    return {
        nombre: nombreArticulo,
        precio: precioArticulo
    };
}
function main() {
    let numProductos = parseInt(readlineSync.question('Ingrese la cantidad de productos: '));
    if (isNaN(numProductos) || numProductos <= 0) {
        console.log('Cantidad inválida. Intente nuevamente.');
        return;
    }
    let productos = [];
    for (let i = 0; i < numProductos; i++) {
        console.log(`Ingrese los detalles del producto ${i + 1}:`);
        let producto = obtenerProducto();
        productos.push(producto);
    }
    let totalFactura = 0;
    console.log('Productos en la factura:');
    for (let producto of productos) {
        let cantidadCompradaStr = readlineSync.question(`Ingrese la cantidad de ${producto.nombre} comprada: `);
        let cantidadComprada = parseInt(cantidadCompradaStr);
        if (isNaN(cantidadComprada) || cantidadComprada <= 0) {
            console.log('Cantidad invalida. Intente nuevamente.');
            return;
        }
        let subtotal = producto.precio * cantidadComprada;
        totalFactura += subtotal;
        console.log(`${cantidadComprada} ${producto.nombre} a ${producto.precio} cada uno. Subtotal (de producto): ${subtotal}`);
    }
    console.log(`Total de plata a pagar: ${totalFactura}`);
}
main();
