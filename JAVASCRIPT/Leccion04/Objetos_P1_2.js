let x = 10; // variable de tipo primitiva
console.log(x.length);
console.log('Tipos Primitivos');
//Objeto
let persona = {
    nombre: 'Carlos',
    apellido: 'Gil',
    email: 'cgi@gmail.com',
    edad: 28,
    idioma: 'es',
    get lang(){
        return this.idioma.toUpperCase();//convierte las minusculas a mayusculas
    },
    set lang(lang){
        this.idioma = lang.toUpperCase();
    },
    nombreCompleto: function(){// metodo o funcion en Javascript
        return this.nombre+' '+this.apellido;
    },
    get nombreEdad(){//Este es el metodo get
        return 'El nombre es: '+this.nombre+', Edad: '+this.edad;
    }  
}

console.log(persona.nombre);
console.log(persona.apellido);
console.log(persona.email);
console.log(persona.edad);
console.log(persona);
console.log(persona.nombreCompleto());
console.log('Ejecutando con un objeto');
let persona2 = new Object(); // Debe crear un nuevo objeto en memoria
persona2.nombre = 'Juan';
persona2.direccion = 'Salada 14';
persona2.telefono = '54261828282';
console.log(persona2.telefono);
console.log('Creamos un nuevo objeto');
console.log(persona['apellido']);//Accedemos como si fuera un arreglo
console.log('Usamos el ciclo for in');
//for in Accedemos al objeto como si fuera una propiedad
for(propiedad in persona){
    console.log(propiedad);
    console.log(persona[propiedad]);
}
console.log('cambiamos y eliminamos un error');
persona.apellida='Betancud'; //Cambiamos dinamicamente un valor del objeto
delete persona.apellida; //Eliminamos el error
console.log(persona);

//Distinta formas de imprimir un objeto
//Numero1: la mas sencilla:concatenar cada valor de cada propiedad
console.log('Distinta formas de imprimir un objeto: forma 1');
console.log(persona.nombre+','+persona.apellido);

//Numero2: A traves del ciclo for in
console.log('Distinta formas de imprimir un objeto: forma 2');
for(nombrePropiedad in persona){
    console.log(persona[nombrePropiedad]);
}

//Numero3: La funcion Object.values()
console.log('Distinta formas de imprimir un objeto: forma 3');
let personaArray = Object.values(persona);
console.log(personaArray);

//Numero4: Utilizaremos  el metodo JSON.stringify
console.log('Distinta formas de imprimir un objeto: forma 4');
let personaString = JSON.stringify(persona);
console.log(personaString);

console.log('Comenzamos a utilizar el metodo get');
console.log(persona.nombreEdad);

console.log('Comenzamos con el metodo get y set para idiomas');
persona.lang = 'en';
console.log(persona.lang);
