/* const precioOriginal = 100;
const descuento = 15; */

function calcularPrecioconD(precio, descuento){
    return (precio * (100-descuento) / 100);
}

let cupos = ["M4nzana", "B4n4n4", "Velociraptor"]

function calcularPrecioconDyC(precio, descuento, cupon){
    return (precio * (100-(parseInt(descuento)+cupon)) / 100);
}

function calcularBotonDescuento(){
    const inputPrice = document.getElementById("inputPrice");
    const priceValue = inputPrice.value;
    const inputDiscount = document.getElementById("inputDiscount");
    const discountValue = inputDiscount.value;
    const inputCupon = document.getElementById("inputCupon");
    const cuponValue = inputCupon.value;
    let comprobante = false;
    let indice;

    for (let i = 0; i < 3; i++) {
        if(cuponValue == cupos[i]){
            comprobante = true;
            indice = i;
        }        
    }

    if (comprobante != true) {
        const precioConDescuento = calcularPrecioconD(priceValue, discountValue);
        document.getElementById("resultPrice").innerText = `Tu precio con descuento son: ${precioConDescuento}$ 
                                                            \nEl descuento es de: ${discountValue}%
                                                            \nEl valor original es: ${priceValue}$`;
    }
    else{
        const precioConDyC = calcularPrecioconDyC(priceValue, discountValue, 15);
        document.getElementById("resultPrice").innerText = `Tu precio con descuento y cupon es: ${precioConDyC}$ 
                                                            \nEl descuento es de: ${discountValue}%
                                                            \nEl cupon "${cupos[indice]}" es de: ${15}%
                                                            \nEl valor original es: ${priceValue}$`;
    }
}
