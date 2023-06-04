let x = 10;//variable de tipo primitiva
console.log(x.length); 

//Objeto 
let persona = {
    nombre: 'Carlos',
    apellido: 'Gil',
    email: 'cgil@gmail.com',
    edad: 30
}

console.log(persona.nombre); 
console.log(persona.apellido);
console.log(persona.email);
console.log(persona.edad); 
console.log(persona); 


persona.apellido = 'Salame'; //Cambiamos dinamicamente un valor del objeto
delete persona.apellido //eliminamos el error
console.log(persona)
