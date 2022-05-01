/* const precioOriginal = 100;
const descuento = 15; */

function calcularPrecioconD(precio, descuento){
    return (precio * (100-descuento) / 100);
}

console.log(calcularPrecioconD(100,30));