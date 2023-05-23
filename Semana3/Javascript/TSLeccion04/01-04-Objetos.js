let x = 10; // Variable de tipo primitiva
console.log(x.length);
console.log('Tipos primitivos')

//Objeto
let persona = { // Creamos un objeto en memoria que contiene una referencia, un valor hexadecimal.
    nombre: 'Carlos',
    apellido: 'Gil',
    email: 'cgil@gmail.com',
    edad: 30,
    nombreCompleto: function(){ // Método o funcion en Js
        return this.nombre + ' ' + this.apellido; // Con this hacemos referencia al objeto, y accedemos a sus atributos.
    }
}

console.log(persona.nombre);
console.log(persona.apellido);
console.log(persona.email);
console.log(persona.edad);
console.log(persona); // Accedemos al objeto por completo
console.log(persona.nombreCompleto());
console.log('Ejecutando con un objeto');


let persona2 = new Object(); // Debe crear un nuevo objeto en memoria
persona2.nombre = 'Juan';
persona2.direccion = 'Salada 14';
persona2.telefono = '92191389013';

console.log(persona2.telefono) // Js es keysensitive Una letra en mayuscula o minuscula
// como tambien con acentos modifica totalmente su valor

console.log('Creamos un nuevo objeto');
console.log(persona['apellido']); // Accedemos como si fuera un arreglo

console.log('Usamos ciclo for in');
//for in: recorremos persona
for(propiedad in persona){
    console.log(propiedad); // Nos permite acceder a su propiedad(en otro lenguajes conocidos como atributos)
    console.log(persona[propiedad]); // Recorremos como si fuera un arreglo.
}
console.log('Cambiamos y eliminamos un error');
//persona.apellido = 'Betancud'; // Cambiamos dinamicamente un valor del objeto
//persona.apellidos = 'Betancud'; // Por equivocación podemos agregar otra propiedad(atributo) tan solo por agg otra letra cuando accedemos.
persona.apellida = 'Betancud' // Lo creamos como ejemplo para luego eliminarlo
console.log(persona);

delete persona.apellida; // Borramos una propiedad
console.log(persona);

// Distinta formas de imprimir un objeto
// Número 1: La mas sencilla: concatenar cada valor de cada propiedad
console.log('Forma número 1');
console.log(persona.nombre+', '+persona.apellido);

// Número 2: A travéz del ciclo flor in
console.log('Forma número 2');
for(nombrePropiedad in persona){
    console.log(persona[nombrePropiedad]);
}

// Número 3: La función Object.values(), este metodo retorna nuestro obj pero como array
console.log('Forma número 3');
let peronsaArray = Object.values(persona);
console.log(peronsaArray);

// Número 4: Utilizaremos el método JSON.stringifly
console.log('Forma número 4');
let personaString = JSON.stringify(persona);
console.log(personaString);