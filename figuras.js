// Codigo del cuadrado

console.group("Cuadrado");
function perimetroCuadrado(lado) {
    return  lado * 4;
}
function areaCuadrado(lado){
    return lado * lado;
}
console.groupEnd();


// Codigo del Triangulo

console.group("Triangulo");

function perimetroTriangulo(lado1, lado2, base){
    return lado1 + lado2 + base;
}
function areaTriangulo(base, altura,){
    return (base * altura) / 2;
}
console.groupEnd();



// Codigo del circulo

console.group("Circulo");
// Radio
//function radioCirculo(radio){
   // return radio;
//}

//Diametro
function diametroCirculo(radio){
    return radio * 2;
}


//PI
const PI = Math.PI;
console.log("PI es: " + PI);


//Circunferencia
function perimetroCirculo(radio){
    const diametro = diametroCirculo(radio);
    return diametro * PI;
}

//
function areaCirculo(radio){
    return PI * (radio * radio);
}

console.groupEnd();

