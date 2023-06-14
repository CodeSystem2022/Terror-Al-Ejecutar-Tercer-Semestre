//1.7 Funcion tipo expresion - JS

let sumar = function(a = 4, b = 8){
    console.log(arguments[0]); #muestra el parametro de: a
    console.log(arguments[1]); #muestra el parametro de: b
    return a + b + arguments[2];
}
resultado = sumar(3,2,9);
console.log(resultado);
