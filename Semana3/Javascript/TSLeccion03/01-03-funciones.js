// miFuncion(8,2); //Esto se le conoce como hosting

// function miFuncion(a, b){
//     //console.log("Sumamos: "+ (a+b)); // Siempre una funcion algo retorna, aunquen o se vea
//                                     //El compilador algo retorna
//     return a+b;
// }// Si no se agg la palabra return js lo agrega de manera automatica, lo hace implicitamente

// miFuncion(5,4);

// let resultado = miFuncion(6,7);
// console.log(resultado)


// //Declaramos una función de tipo expresión o funcion anonima

// let x = function (a,b){return a+b}; // Necesita cierre de con punto y coma
// resultado = x(5,6); //al llamarla se pone la vaariable y parentesis
// console.log(resultado)


// //console.log("Hasta acá todo ok")
// //Funciones de tipo self y invoking (tambien puede ser una funcion anonima, se llama tmb a si misma)
// //No se puede volver a utilizar, solamente se manda a llamar a si misma, una unica vez.

// // (function(a,b){
// //     console.log('EJecutando la función: '+ (a+b));
// // })(1, 1);

// console.log(typeof miFuncion);
// function miFuncionDos(a, b){
//     console.log(arguments.length); // Una funcion es un objeto por ende podemos por ende podemos
// }                           // acceder a los métodos de los mismos.    
// miFuncionDos(5,7, 5, 6, 7);

// //toString
// var miFuncionTexto = miFuncionDos.toString(); //convierte la función a texto
// console.log(miFuncionTexto);

// //Funciones flecha
// const sumarFuncionFlecha = (a, b) => a + b;
// resultado = sumarFuncionFlecha(3,7) // Asignamos el valor a la variable.
// console.log(resultado); //No se utiliza la palabra Function, No se utilizan las llaves, ni return
//                         //El resultado lo retorna implicitamente


//Función tipo expresión
// let sumar = function(a = 4, b = 8){
//     console.log(arguments[0]); //Muestra el parametro de: a
//     console.log(arguments[1]); //Muestra el parametro de: b
//     // console.log(arguments[2]); //Undefined
//     return a + b + arguments[2];
// }
// resultado = sumar(3, 2, 9) //Imprime 14, porque se redefinen los primeros 2 valores
// console.log(resultado); //Pero el tercero esta sin definirse por ende se le asigna el valor                        


// //Sumar todos los argumentos
// let respuesta = sumarTodo(5, 4, 13, 10, 9); // Usamos el concepto de hosting
//                                             // Llamamos a la funcion antes de ser definida


// console.log(respuesta);
// function sumarTodo(){
//     let suma = 0;
//     for (let i = 0; i < arguments.length; i++){
//         suma += arguments[i]; //arguments es para arreglos
//     }
//     return suma;
// }

//Tipos primitivos

// let x = 10;
// function cambiarValor(a){//Paso por valor
//     a = 20;              //La variable global nunca sufre un cambio
// }                       
// cambiarValor(x);//Al mandar solamente una copia, se le conoce como paso por valor, "su valor"
// console.log(x);

//Paso por referencia

//Se le asigna un método u objeto com referencia para luego ser modificado
const persona = { //Creamos un objeto
    nombre: 'Juan',//Asignamos sus atributos
    apellido: 'Lepez'
}
console.log(persona)//Imprimimos el objeto sin cambios(original)
function cambiarValoObjeto(p1){ //Recibe la asignacion
    p1.nombre = 'Ignacio'; //Accede a sus atributos y los modifica
    p1.apellido = 'Perez';
}

cambiarValoObjeto(persona); //Se le asigna un espacio en memoria
console.log(persona) //Imprime el valor modificado por referencia