// Codigo del cuadrado


console.group("Cuadrado");

function perimetroCuadrado(lado) {
    return lado * 4;
}

function areaCuadrado(lado) {
    return lado * lado;
}
console.groupEnd();


// Codigo del Triangulo

console.group("Triangulo");

function perimetroTriangulo(lado1, lado2, base) {
    return lado1 + lado2 + base;
}

function areaTriangulo(base, altura, ) {
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
function diametroCirculo(radio) {
    return radio * 2;
}


//PI
const PI = Math.PI;
console.log("PI es: " + PI);


//Circunferencia
function perimetroCirculo(radio) {
    const diametro = diametroCirculo(radio);
    return diametro * PI;
}

//
function areaCirculo(radio) {
    return PI * (radio * radio);
}

console.groupEnd();



// Aqui vamos a interactuar con el Html

function calcularPerimetroCuadrado() {
    const input = document.getElementById("InputCuadrado");
    const value = input.value;

    const perimetro = perimetroCuadrado(value);
    alert(perimetro);
}

function calcularAreaCuadrado() {
    const input = document.getElementById("InputCuadrado");
    const value = input.value;

    const area = areaCuadrado(value);
    alert(area);
}

function calcularAlturaTriangulo() {
    const input1 = document.getElementById("InputLado1Triangulo");
    const input2 = document.getElementById("InputLado2Triangulo");
    const input3 = document.getElementById("InputLado3Triangulo");

    const value1 = input1.value;
    const value2 = input2.value;
    const value3 = input3.value;

    if (value1 === value2 && value1 !== value3) {
        const altura = Math.sqrt((value1 * value2) - ((value3 * value3) / 4));
        return alert(altura);

    } else if (value1 === value3 && value1 !== value2) {
        const altura = Math.sqrt((value1 * value3) - ((value2 * value2) / 4));
        return alert(altura);

    } else if (value2 === value3 && value2 !== value1) {
        const altura = Math.sqrt((value2 * value3) - ((value1 * value1) / 4));
        return alert(altura);
    } else {
        return alert("Los datos que ingresaste no pertenecen a un triangulo isoceles");
    }

}

function calcularPerimetro() {
    const input1 = document.getElementById("InputLado1Triangulo");
    const input2 = document.getElementById("InputLado2Triangulo");
    const input3 = document.getElementById("InputLado3Triangulo");

    const lado1 = input1.value;
    const lado2 = input2.value;
    const lado3 = input3.value;

    return alert(perimetroTriangulo(lado1, lado2, lado3));


}