class Persona{
    constructor(nombre, apellido){
        this._nombre= nombre;
        this._apellido = apellido;
    }

    get nombre(){
        return this._nombre;
    }

    //Sobreescritura
    nombreCompleto(){
        return super.nombreCompleto+', '+this._departamento;
    }
}

let persona1 = new Persona('Martin', 'Perez');
console.log(persona1._nombre)
//console.log(persona1);
let persona2 = new Persona('Carlos', 'Lara');
//console.log(persona2);
console.log(persona2.nombre);
persona2.nombre = 'Maria Laura';
console.log(persona2.nombre);

let empleado1 = new Empleado('Maria', 'Gimenez', 'Sistemas');
console.log(empleado1);
console.log(empleado1.nombreCompleto());
