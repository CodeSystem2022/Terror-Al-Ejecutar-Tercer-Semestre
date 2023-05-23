let x = 10; //Variable de tipo primitiva
console.log(x.length);
console.log('Tipo primitivo');
//Objeto
let persona = {
    nombre: 'Jorge',
    apellido: 'Rojas',
    email: 'jorgedanielrojas20@mail.com',
    edad: 33,
    idioma: 'es',
    get lang(){
        return this.idioma.toUpperCase(); //Convierte las minusculas a mayusculas
    },
    set lang(lang){
        this.idioma = lang.toUpperCase(); 
    },
    nombreCompleto: function(){ //Metodo o funcion en JavaScript
        return this.nombre+ ' '+ this.apellido;
    },
    get nombreEdad(){ //Este es el metodo get
        return 'El nombre es: '+this.nombre+', edad: '+this.edad;
    }
}

console.log(persona.nombre);
console.log(persona.apellido);
console.log(persona.email);
console.log(persona.edad);
console.log(persona);
console.log(persona.nombreCompleto());
console.log('Ejecutando con un objeto');
let persona2 = new Object(); //Debe crear un nuevo objeto en memoria
persona2.nombre = 'Juan';
persona2.direccion = 'Salada 14';
persona2.telefono = '54926182282821';
console.log(persona2.telefono);
console.log('Creamos un nuevo objeto');
console.log(persona['apellido']); //Accedemos como si fuera un arreglo
console.log('Usamos el ciclo for in');
//for in y accedemos al objeto como si fuera un arrglo
for(propiedad in persona){
    console.log(propiedad);
    console.log(persona[propiedad]);
}
console.log('Cambiamos y eliminamos un error');
persona.apellida = 'Bentancud'; //Cambiamos dinamicamente el valor de un objeto
delete persona.apellida //Eliminamos el error
console.log(persona.apellido);

//Distintas formas de imprimir un objeto
// Numero 1: La mas sensilla: concatenar cada valor de cada propiedad
console.log('Distintas formas de imprimir un objeto, forma 1');
console.log(persona.nombre+' '+persona.apellido);

//Numero 2: A traves del ciclo for in
console.log('Distintas formas de imprimir un objeto, forma 2');
for(nombreCompleto in persona){
    console.log(persona[nombreCompleto])
}

//Numero 3: La funcion object.values()
console.log('Distintas formas de imprimir un objeto, forma 3');
let personaArray = Object.values(persona);
console.log(personaArray);

//Numero 4: Utilizaremos el metodo JSON.stringify
console.log('Distintas formas de imprimir un objeto, forma 4');
let personaString = JSON.stringify(persona);
console.log(personaString);

console.log('Comenzamos con el metodo get');
console.log(persona.nombreEdad);

console.log('Comenzamos con el metodo get y set para idiomas');
persona.lang = 'en';
console.log(persona.lang);

function Persona3(nombre, apellido, email){ //Constructor
    this.nombre =nombre;
    this.apellido = apellido;
    this.email = email;
    this.nombreCompleto = function(){
        return this.nombre+' '+this.apellido;
    }
}
let padre = new Persona3('Leo', 'sanchez', 'leosanchez@email.com');
padre.nombre = 'Luis'; //modificamops el nombre
padre.telefono = '549261828828221'; //una propiedad exclusiva del objeto padre
console.log(padre);
console.log(padre.nombreCompleto()); //utilizamos la funcion

let madre = new Persona3('Laura', 'Contrera', 'contreral@email.com');
console.log(madre);
console.log(madre.telefono); //la propiedad no esta definida
console.log(madre.nombreCompleto());

//Diferentes formas de crear objetos
//Casoi objeto 1
let miObjeto = new Object(); //Esta es una opcion formal
//Caso objeto 2
let miObjeto2 ={}; //Esta opcion es breve y recomendada

//Caso String 1
let miCadena1 = new String('Hola'); //Sintaxis formal
//Caso String 2
let miCadena2 = 'Hola'; //Esta es la misma sintaxis simplificada y recomendada

//Caso con numeros 1
let miNumero = new Number(1); //Es formal no recomendable
//Caso con numeros 2
let miNumero2 = 1; //Sintaxis recomendada

//Caso boolean 1
let miBoolean = new Boolean(false); //Formal
//Caso boolean 2
let miBoolean2 = false; //Sintaxis recomendada

//Caso arreglo 1
let miArreglo1 = new Array(); //Formal
//Caso arreglo 2
let miArreglo2 = []; //Sintaxis recomendada

//Caso function 1
let miFuncion = new function(){}; //Todo despues de new es cosiderado objeto
//Caso funtion 2
let miFuncion2 = function(){}; //Notacion simplificada y recomendada

//Uso de prototype
Persona3.prototype.telefono = '321312321';
console.log(padre);
madre.telefono = '543543534'
console.log(madre.telefono);

//Uso de call
let persona4 ={
    nombre: 'Juan',
    apellido: 'Perez',
    nombreCompleto: function(titulo, telefono){
        return titulo+': '+this.nombre+' '+this.apellido+' '+telefono;
        //return this.nombre+' '+this.apellido;
    }
}

let persona5 ={
    nombre: 'Carlos',
    apellido: 'Lara'
}

console.log(persona4.nombreCompleto('lic.', '54654436'));
console.log(persona4.nombreCompleto.call(persona5, 'Ing.', '54657678'));

//Metodo Apply
let arreglo =['Ing.', '548979432'];
console.log(persona4.nombreCompleto.apply(persona5, arreglo));
