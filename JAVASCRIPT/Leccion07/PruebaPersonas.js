//PONDREMOS A PRUEBA TODAS LAS CLASES CREADAS HASTA AHORA
/*
En js para poder ejecutar clases en diferentes archivos, debemos manejar el concepto de modulos/modularidad y para manejar este
concepto, debemos desplegar nuestra aplicacion en un servidor, pero debido a que de momento solo trabajamos los archivos por
separado, y no hemos trabajado con servidores, simplemente juntaremos todas las clases en un mismo archivo para poder realizar
las pruebas de nuestro codigo

*/


class Persona{
    static contadorPersonas = 0;

    //Los otros atributos los agregaremos dentro del constructor

    constructor(nombre, apellido, edad){
        //propiedades de instancia
        this._idPersona = ++Persona.contadorPersonas; //no olvidar acceder a atributo static por medio del nombre de clase
        this._nombre = nombre;
        this._apellido = apellido;
        this._edad = edad;

    }

    get idPersona(){
        return this._idPersona;
    }
    get nombre(){
        return this._nombre;
    }
    set nombre(nombre){
        this._nombre = nombre;
    }

    get apellido(){
        return this._apellido;
    }
    set apellido(apellido){
        this._apellido = apellido;
    }

    get edad(){
        return this._edad;
    }
    set edad(edad){
        this._edad = edad;
    }

    toString(){
        return `
        ${this._idPersona} 
        ${this._nombre} 
        ${this._apellido} 
        ${this._edad}`;
    }



}

class Empleado extends Persona {

    static contadorEmpleados = 0;

    constructor(nombre, apellido, edad, sueldo){
        super(nombre, apellido, edad);
        this._idEmpleado = ++Empleado.contadorEmpleados;
        this._sueldo = sueldo;

    }
    
    get idEmpleado(){
        return this._idEmpleado;
    }

    get sueldo(){
        return this._sueldo;
    }

    set sueldo(sueldo){
        this._sueldo = sueldo;
    }

    toString(){
        return `
        ${super.toString()} 
        ${this._idEmpleado} 
        ${this._sueldo}`;
    }

}

class Cliente extends Persona{

    static contadorClientes = 0;

    constructor(nombre, apellido, edad, fechaRegistro){
        super(nombre, apellido, edad);
        this._idCliente = ++Cliente.contadorClientes;
        this._fechaRegistro = fechaRegistro;
    }

    get idCliente(){
        return this._idCliente;
    }
    get fechaRegistro(){
        return this._fechaRegistro;
    }

    set fechaRegistro(fechaRegistro){
        this._fechaRegistro = fechaRegistro;
    }

    toString(){
        return `
        ${super.toString()} 
        ${this._idCliente} 
        ${this._fechaRegistro}`;
    }
}


