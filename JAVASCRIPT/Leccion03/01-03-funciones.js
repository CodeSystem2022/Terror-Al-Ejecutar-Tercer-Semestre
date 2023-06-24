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
