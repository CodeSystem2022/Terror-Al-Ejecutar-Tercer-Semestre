
// Sumar todos los elementos.

let resupuesta = sumarTodo(5, 4, 13, 10, 9);
console.log(respuesta);
function sumarTodo() {
  let suma = 0;
  for (let i = 0; i < arguments.length; i++) {
    suma += arguments[i]; // arguments es para arreglos.
  }
  return suma;
}



//Funciones flecha
/*
Este tipo de funciones son muy similares a las de tipo expresion

Lo mas comun en estas funciones es que una vez se le asignen los parametros de referencia
estos ya no cambien, es por ello que para definir la variable de referencia utilizamos cosnt

Cuando utilizamos estas funciones, ya no es necesario utilizar la palabra reservada function
tampoco utilizamos llaves, utilizamos el operador de flecha => 
Tampoco es necesario utilizar return
*/

const sumarFuncionFlecha = (a, b) => a + b; 
resultado = sumarFuncionFlecha;
console.log(resultado);

/*
Cuando definimos una funcion, podemos observar que dentro de los parentesis hemos definido variables
a esto se lo conoce como parametros de la funcion, cuando llamamos a la funcion lo que ponemos entre parentes
es llamado argumentos

EN JAVASCRIPT NO ES NECESARIO PASAR TODOS LOS PARAMETROS CUANDO LLAMAMOS UNA FUNCION
TAMBIEN PODEMOS PASAR MAS ARGUMENTOS QUE PARAMETROS HAYA DEFINIDOS
NO ES REQUERIDO QUE COINCIDAN EL NUMERO DE ARGUMENTOS CON EL NUMERO DE PARAMETROS

tambien es posible poner valores por default en los parametros, pero estos cambiaran en cuanto se llame a la funcion
y seran sustituidos por los nuevos valores en el caso de que en el llamado de la funcion no se ponga un argumento para alguno
(solo durante el llamado a la funcion, no seran sustituidos para cada llamado)
de los parametros que fueron definidos por default, este en caso de ser requerido en la funcion, tomara el valor puesto por
default


Acalaracion, la funcion arguments no detectara los calores por default


*/

console.log(typeof miFuncion);
function miFuncionDos(a, b){
    console.log(arguments.length);
}

miFuncionDos(5, 7, 3, 6);

//toString
var miFuncionTexto = miFuncionDos.toString();
console.log(miFuncionTexto);

