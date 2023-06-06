let x=10;// variable de tipo primitiva
console.log(x.length);
console.log('tipos primitivos');
let personas={//es un objeto
nombre:'Carlos',
apellido:'Gil',
email:'cgil@gamil.com',
edad: 28,
idioma: 'es',
get lang(){
    return this.idioma.toUpperCase();
},
set lang(Lang){
    this.idioma= Lang.toUpperCase();
},
nombreCompleto: function(){//metodo
    return this.nombre+' '+this.apellido;
},
get nombreEdad(){
    return this.nombre+', Edad: '+this.edad;
}

}

console.log(personas.nombre);
console.log(personas.apellido);
console.log(personas.email);
console.log(personas.edad);
console.log(personas);
console.log(personas.nombreCompleto());
console.log('Ejecutando con un objeto');

let personas2= new Object();
personas2.nombre='Juan';
personas2.direccion='Salada 14';
personas2.telefono='56465465163165';
console.log('Creamos un nuevo objeto');
console.log(personas2.telefono);
console.log(personas['apellido']);
console.log('Usamos el ciclo for in');
for(propiedad in personas){
    console.log(propiedad);
    console.log(personas[propiedad]);
}
console.log('cambiamos y eliminamos un error')
personas.apellida='Betancud';//creo por error una propiedad
delete personas.apellida;//borro el error
console.log(personas);
//distinta formas de imprimir un objeto
//numero 1: mas sencilla : concatenar cada valor de cada propiedad
console.log('distinta formas de imprimir un objeto: forma 1');
console.log(personas.nombre+', '+personas.apellido);
//numero 2: a traves del ciclo for in
console.log('distinta formas de imprimir un objeto: forma 2');
for(nombrePropiedad in personas){
    console.log(personas[nombrePropiedad]);
}
// nuermo 3 : la funcion object.valvues()
console.log('distinta formas de imprimir un objeto: forma 3');
let pertsonaArray= Object.values(personas);
console.log(pertsonaArray);

// Numero 4: Utilizaremos el metodo JSON.stringify
console.log('distinta formas de imprimir un objeto: forma 4 a mi entender la mas importante');
let personaString = JSON.stringify(personas);
console.log(personaString);

console.log('Comenzamos a utilizar el metodo get');
console.log(personas.nombreEdad);

console.log('Comenzamos con el metodo get y set para idiomas');
personas.lang='en';
console.log(personas.lang);

function Personas3(nombre,apellido,email){//contructor de objetos
this.nombre=nombre;
this.apellido=apellido;
this.email=email;
this.nombreCompleto=function()
{
    return this.nombre+' '+this.apellido;
}
}
let padre=new Personas3('Leo','Lopez','lopezl@gmail.com');
padre.nombre='Luis';
padre.telefono='456465456';//propiedad exclusiva del objeto padre
console.log(padre);
console.log(padre.nombreCompleto());//Utilizamos la funcion
let madre=new Personas3('Laura','Contrera','contreral@gmail.com');
console.log(madre);
console.log(madre.telefono);//la propiedad no esta definida
console.log(madre.nombreCompleto());
//Diferentes formas de crear objetos
//caso objeto 1
let miObjeto=new Object();//Esta es una opcion formal
//caso objeto 2
let miObjetoo2={};//Esta opcion es breve y recomendada
//caso String 1
let miCaddena1= new String('Hola');//Sintaxis formal
//caso String 2
let miCaddena2= 'Hola';//Sintaxis simplificada y recomendada
//caso con numero 1
let miNumero=new Number(1);//Es formal no recomendable
//caso con numero 2
let miNumero2=1;//Sintaxis recomendada
//caso boolean 1
let miBoolean=new Boolean(false);//Formnal
//caso boolean 2
let miBoolean2=false;//Sintaxis recomendada
//caso Arreglo 1
let miArreglo1=new Array();//formal
//caso Arreglos 2
let miArreglo2=[];//Sintaxis recomendada

//caso funcion 1
let miFuncion1=new function(){};//todo despues de new es considerado objetos
//caso funcion2
let miFuncion2=function(){};//Sintaxis recomendada


//Uso de prototype
Personas3.prototype.telefono='1651461656';
console.log(padre);
console.log(madre.telefono);
madre.telefono='1651561546';
console.log(madre.telefono);

//Uso de call
let personas4={
    nombre:'Juan',
    apellido:'Perez',
    nombreCompleto2:function(titulo,telefono){
        return titulo+': '+this.nombre+' '+this.apellido+' '+telefono;
        //return this.nombre+' '+this.apellido;
    }
}

let personas5={
    nombre:'Carlos',
    apellido:'Lara',

}
console.log(personas4.nombreCompleto2('Lic.','14651665156'));
console.log(personas4.nombreCompleto2.call(personas5,'Ing.','5415616516156'));

//Metodo Apply
let arreglo=['Ing.','165615616514'];
console.log(personas4.nombreCompleto2.apply(personas5,arreglo));