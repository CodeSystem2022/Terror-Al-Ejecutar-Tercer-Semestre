//métodos o funciones son lo mismo

let x = 10;//variable tipo primitivo
console.log(x.lenght)
console.log('Tipos primitivos');

//objeto
let persona = {
    nombre: 'Carlos',           //
    apellido: 'Gil',            // atributos
    email: 'cgil@gmail.com',    //
    edad: 30,
    nombreCompleto: function(){// método o funcion en javascript
        return this.nombre+' '+this.apellido;
    }
}

console.log(persona.nombre);
console.log(persona.apellido);
console.log(persona.email);
console.log(persona.edad);
console.log(persona);
console.log(persona.nombreCompleto());

console.log('Ejecutando con un objeto');
let persona2 = new Object();//debe crear un nuevo obketo en la memoria
persona2.nombre = 'Juan';
persona2.direccion = 'Salada 14';
persona2.telefono = '5492618282821';
console.log(persona2.telefono);

console.log('Creamos un nuevo objeto');
console.log(persona['apellido']);// Accedemos como si fuera un arreglo

console.log('Usamos el ciclo for in');
// for in y accedemos al objeto como si fuera un arreglo

for(propiedad in persona){
    console.log(propiedad);
    console.log(persona[propiedad]);
}
console.log('Cambiamos y eliminamos un error');
persona.apellida = 'Betancud';//cambiamos dinamicamente un valor del objeto, pero con un error de tipeo crea otro atributo
delete persona.apellida;//Eliminamos el error
console.log(persona);

//Distintas formas de imprimir un objeto
//Número 1: la más sencilla: concatenar cada valor de cada propiedad
console.log('Distintas formas de imprimir un objeto: forma 1');
console.log(persona.nombre+', '+persona.apellido);
//Número 2: A través del ciclo for in
console.log('Distintas formas de imprimir un objeto: forma 2');
for(nombrePropiedad in persona){
    console.log(persona[nombrePropiedad]);
}
//Número 3: La función object.values()
console.log('Distintas formas de imprimir un objeto: forma 3');
let personaArray = Object.values(persona);
console.log(personaArray);

// Número 4: Utilizaremos el método JSON,stringify
console.log('Distinas formas de imprimir un objeto: forma 4');
let personaString = JSON.stringify(persona);
console.log(personaString);

console.log('Comenzamos a utilizar el método get.');
console.log(persona.nombreEdad);

console.log('Comenzamos con el método get y set para idiomas.');
persona.lang = 'en';
console.log(persona.lang);

function persona3(nombre, apellido, email){//constructor o metodo construto, funcion constructorr
    this.nombre = nombre;
    this.apellido = apellido;
    this.email = email;
    this.nombreCompleto = function(){//metodo dentro del constructor
        return this.nombre+' '+this.apellido;
    }
}
let padre = new persona3('Leonardo', 'Messi', 'mejordelmundo@gmali.com');
padre.nombre = 'Lionel'//modificamos el nombre
padre.telefono = '5492061154356';//una propiedad exclusiva del objeto padre
console.log(padre);
console.log(padre.nombreCompleto());//utilizamos la función

let madre = new persona3('Laura', 'Contrera', 'lcontrera@gmail.com');
console.log(madre);
console.log(madre.telefono);//undefined, la propiedad no está definida
console.log(madre.nombreCompleto())