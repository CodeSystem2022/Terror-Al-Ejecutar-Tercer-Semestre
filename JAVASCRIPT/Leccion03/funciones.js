miFuncion(8, 2); // hoisting: solo la declaración de la variable o función se eleva, no su asignación o inicialización.

// Creamos la función:
function miFuncion(a, b){
    return a + b;  
} 


// Llamando la función:
miFuncion(5, 4);
let resultado = miFuncion(6, 7);
console.log(resultado); 


// Funciones flecha (arrow functions):
const sumarFuncionFlecha = (a,b) => a + b;
resultado = sumarFuncionFlecha(3,7); 
console.log(resultado);