// Programa que pida el ingreso del nombre y precio de un artículo y la
// cantidad que lleva el cliente. Mostrar lo que debe pagar el comprador
// en su factura. 
import * as readlineSync from 'readline-sync';

interface Producto {
  nombre: string;
  precio: number;
}

function obtenerProducto(): Producto {
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

  let productos: Producto[] = [];
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