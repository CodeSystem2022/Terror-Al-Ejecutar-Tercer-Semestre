// Objeto
let persona = {
  nombre: "Carlos",
  apellido: "Gil",
  email: "cgil@gmail.com",
  edad: 30,
  nombreCompleto: function () {
    // Metodo o función en JavaScript.
    return this.nombre + " " + this.apellido;
  },
};

console.log(persona.nombre);
console.log(persona.apellido);
console.log(persona.email);
console.log(persona.edad);
console.log(persona);
console.log(persona.nombreCompleto());
