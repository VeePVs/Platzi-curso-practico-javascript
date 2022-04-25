//Codigo del cuadrado

console.group("Cuadrado")

const ladoCuadrado = 5;
console.log("Los lados del cuadrado miden: "+ladoCuadrado+"cm");

const perimetroCuadrado = ladoCuadrado * 4;
console.log("El perimetro del cuadrado mide: "+perimetroCuadrado+"cm");

const areaCuadrado = ladoCuadrado * ladoCuadrado;
console.log("El area del cuadrado mide: "+areaCuadrado+"cm^2");

console.groupEnd();

//Codigo del triangulo
console.group("Triangulo")

const ladoTriangulo1 = 6;
const ladoTriangulo2 = 6;
const baseTriangulo = 4;

console.log("Los lados del triangulo miden: "
            +ladoTriangulo1
            +"cm, " 
            +ladoTriangulo2
            +"cm, "
            +baseTriangulo
            +"cm"
);
console.groupEnd();
