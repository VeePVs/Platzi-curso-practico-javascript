function cuadrado(lado) {
    this.lado = lado;

    this.perimetroCuadrado = function(){
        return perimetro = this.lado * 4+"cm";
    };

    this.areaCuadrado = function(){
        return area = this.lado * this.lado +"cm^2";
    };
}
function triangulo(lado1, lado2, base, altura) {
    this.lado1 = lado1;
    this.lado2 = lado2;
    this.base = base;
    this.altura = altura;

    this.perimetroTriangulo = function(){
        return perimetro = (parseInt(this.lado1) + parseInt(this.lado2) + parseInt(this.base));;
    }
    this.areaTriangulo = function(){
        return area = (this.base*this.altura) / 2;
    }
}
function circulo(radio) {
    const PI = Math.PI;
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

//Aqui interactuamos con el HTML

function sacarValoresCuadrado(){
    const input = document.getElementById("inputCuadrado");
    const value = input.value;
    return value;
}
function sacarValoresCirculo(){
    const input = document.getElementById("inputCirculo");
    const value = input.value;
    return value;
}

function calcularPerimetroCuadrado(){
    const constructorCuadrado = new cuadrado(sacarValoresCuadrado());
    alert(constructorCuadrado.perimetroCuadrado());
}

function calcularAreaCuadrado(){
    const constructorCuadrado = new cuadrado(sacarValoresCuadrado());
    alert(constructorCuadrado.areaCuadrado());
}

function calcularPerimetroCirculo(){
    const circuloConstructor = new circulo(sacarValoresCirculo());
    alert(circuloConstructor.perimetroCirculo());
}

function calcularAreaCirculo(){
    const circuloConstructor = new circulo(sacarValoresCirculo());
    alert(circuloConstructor.areaCirculo());
}

function trianguloLado1(){
    const input = document.getElementById("inputTrianguloLado1");
    const value = input.value;
    return value;
}

function trianguloLado2(){
    const input = document.getElementById("inputTrianguloLado2");
    const value = input.value;
    return value;
}

function trianguloBase(){
    const input = document.getElementById("inputTrianguloBase");
    const value = input.value;
    return value;
}

function calcularPerimetroTriangulo(){
    if(trianguloLado1()===trianguloLado2()){
        const altura = Math.sqrt((trianguloLado1()*trianguloLado2()) - (trianguloBase()*trianguloBase())/4);
        const trianguloConstructor = new triangulo(trianguloLado1(),trianguloLado2(),trianguloBase(),altura);
        alert(trianguloConstructor.perimetroTriangulo());
    }
    else{
        alert("No es un triangulo isósceles, ingresa el dato correcto.")
    }
}

function calcularAreaTriangulo(){
    if(trianguloLado1()===trianguloLado2()){
        const altura = Math.sqrt((trianguloLado1()*trianguloLado2()) - (trianguloBase()*trianguloBase())/4);
        const trianguloConstructor = new triangulo(trianguloLado1(),trianguloLado2(),trianguloBase(),altura);
        alert(trianguloConstructor.areaTriangulo());
    }
    else{
        alert("No es un triangulo isósceles, ingresa el dato correcto.")
    }
}

function calcularAlturaTriangulo(){
    if(trianguloLado1()===trianguloLado2()){
        const altura = Math.sqrt((trianguloLado1()*trianguloLado2()) - (trianguloBase()*trianguloBase())/4);
        alert(altura);
    }
    else{
        alert("No es un triangulo isósceles, ingresa el dato correcto.")
    }
}