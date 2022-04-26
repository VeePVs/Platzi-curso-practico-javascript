//Codigo del cuadrado

console.group("Cuadrado");

function cuadrado(lado) {
    this.lado = lado;

    this.perimetroCuadrado = function(){
        perimetro = this.lado * 4;
        return perimetro+"cm";
    };

    this.areaCuadrado = function(){
        area = this.lado * this.lado;
        return area+"cm^2";
    };
}
const cuadradoConstructor = new cuadrado(prompt("¿Cual es el tamaño de los lados del cuadrado?: "));

console.log("Los lados del cuadrado miden: "+cuadradoConstructor.lado+"cm");
console.log("El perimetro del cuadrado mide: "+cuadradoConstructor.perimetroCuadrado());
console.log("El area del cuadrado mide: "+cuadradoConstructor.areaCuadrado());

console.groupEnd();
//Codigo del triangulo

console.group("Triangulo");

function triangulo(lado1, lado2, base, altura) {
    this.lado1 = lado1;
    this.lado2 = lado2;
    this.base = base;
    this.altura = altura;

    this.perimetroTriangulo = function(){
        perimetro = (parseInt(this.lado1) + parseInt(this.lado2) + parseInt(this.base));
        return perimetro;
    }
    this.areaTriangulo = function(){
        area = (this.base*this.altura) / 2;
        return area;
    }
}
const trianguloConstructor = new triangulo(prompt("¿Cual es el lado 1 del triangulo?: "),
                                           prompt("¿Cual es el lado 2 del triangulo?: "),
                                           prompt("¿Cual es la base del triangulo?: "),
                                           prompt("¿Cual es la altura del triangulo?: ")
                                           );
console.log("Los lados del triangulo miden: "+trianguloConstructor.lado1+" "+trianguloConstructor.lado2+" "+trianguloConstructor.base);
console.log("La altura del triangulo mide: "+trianguloConstructor.altura);
console.log("El perimetro del triangulo mide: "+trianguloConstructor.perimetroTriangulo());
console.log("El area del triangulo mide: "+trianguloConstructor.areaTriangulo());

console.groupEnd();
//Codigo del circulo

console.group("Circulo");

const PI = Math.PI;
function circulo(radio) {
    this.radio = radio;
    this.diametro = this.radio*2;
    
    this.perimetroCirculo = function(){
        perimetro = this.diametro*PI;
        return perimetro+"cm^2";
    };

    this.areaCirculo = function(){
        area = (this.radio*this.radio) * PI;
        return area+"cm";
    }
}
const circuloConstructor = new circulo(prompt("Escribe el radio del circulo: "));
console.log("El radio del circulo es: "+circuloConstructor.radio+"cm");
console.log("El diametro del circulo es: "+circuloConstructor.diametro+"cm")
console.log("El valor de pi es: "+PI);
console.log("El perimetro del circulo es: "+circuloConstructor.perimetroCirculo());
console.log("El area del circulo es: "+circuloConstructor.areaCirculo());

console.groupEnd();