// Creación de constantes estáticas. Acomodar este código en la lección que corresponde (Clase 7, parte 7).

class Persona {
  static contadorPersonas = 0; // Atributo estático.
  // email = 'Valor default email'; // Atributo no estático.

  static get MAX_OBJ() {
    // Este método simula una constante.
    return 5;
  }

  constructor(nombre, apellido) {
    this._nombre = nombre;
    this._apellido = apellido;
    if (Persona.contadorPersonas < Persona.MAX_OBJ) {
      this.idPersona = ++Persona.contadorPersonas;
    } else {
      console.log("Se ha superado el máximo de objetos permitidos.");
    }
  }
}

console.log(Persona.MAX_OBJ);
// Persona.MAX_OBJ = 10; // No se puede modificar, ni alterar.
console.log(Persona.MAX_OBJ);

let persona4 = new Persona("Franco", "Diaz");
console.log(persona4.toString());

let persona5 = new Persona("Liliana", "Paz");
console.log(persona5.toString());
