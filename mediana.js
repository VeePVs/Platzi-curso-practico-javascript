const lista1 = [
    100,
    200,
    500,
    400000
];

const mitadLista1 =lista1.length / 2;

function esPar(numero) {
    if((numero % 2) === 0){
        return true;
    }
    else{
        return false;
    }
}

let mediana;

if (esPar(lista1.length)){
    const elemento1 = lista1[parseInt(mitadLista1)]; 
    const elemento2 = lista1[parseInt(mitadLista1-1)];

    //aqui colocar la funcion para calcular el promedio
} else {
    mediana = lista1[parseInt(mitadLista1)];
}