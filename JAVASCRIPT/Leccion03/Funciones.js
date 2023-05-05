miFuncion(8, 2); // esto se le conoce como hosting

function miFuncion(a, b){
    //console.log("Sumamos: "+ (a+b));
    return a + b;
}

// Llamamos la función
miFuncion(5, 4);

let resultado = miFuncion(6, 7);
console.log(resultado);

//Declaramos una función de tipo expresión o anonima
let x = function(a, b){return a + b}; // necesita cierre con punto y coma
resultado = x(5, 6); //al llamarla se pone la variable y parentesis
console.log(resultado);


//Funciones de tipo self y invoking se llama así misma
(function(a, b){
    console.log('Ejecutando la función: '+(a+b));
})(9,6);


console.log(typeof miFuncion);
function miFuncionDos(a, b){
      console.log(arguments.length);  
}

miFuncionDos(5,7,3,6);

//toString
var miFuncionTexto = miFuncionDos.toString();
console.log(miFuncionTexto);

//Funciones flecha
const sumarFuncionFlecha = (a, b) => a + b;
resultado = sumarFuncionFlecha(3, 7); // asignamos el valor a una variable
console.log(resultado);


//tipo función expresión
let sumar = function(a = 4, b = 8){
    console.log(arguments[0]);//Muestra el parámetro de: a
    console.log(arguments[1]);
    return a + b + arguments[2];
;
}
resultado = sumar(3,2, 9);
console.log(resultado);

//sunar todos los argumentos
let respuesta = sumarTodo(5, 4, 13, 10, 9);
console.log(respuesta);
function sumarTodo(){
    let suma = 0;
    for(let i = 0; i < arguments.length; i++){
        suma += arguments[i]; //arguments es para arreglos
    }
    return suma;
}

// tipos primitivos
let k = 10;
function cambiarValor(a){//paso por valor
    a = 20;
}
cambiarValor(k);
console.log(k);

//Paso por referencia
const persona = {
    nombre: 'Juan',
    apellido: 'Lepez',
}
console.log(persona);

function cambiarValorObjeto(p1){
    p1.nombre = 'Ignacio';
    p1.apellido = 'Perez';
}
cambiarValorObjeto(persona);
console.log(persona);