// Creación de Array o arreglos
// let autos = new Array('Ferrari','Renault','BMW'); esta sintaxis es vieja
const autos = ['Ferrari','Renault','BMW'];
console.log(autos);

//Recorremos los elementos de un arreglo

console.log(autos[0]); //Ferrari
console.log(autos[2]); //BMW

for (let i = 0; i < autos.length; i++) {
    console.log(i+' : '+autos[i])
}

// Modificamos los elementos del arreglo
autos[1] = 'Volvo';
console.log(autos[1]);

// Agregamos nuevos valores al arreglo

autos.push('Audi'); // Agregamos el elemento al final
console.log(autos);

// Otras formas de agregar elementos al arreglo

autos[autos.length] = 'Porche';
console.log(autos);

// Tercera forma de agregar elementos teniendo CUIDADO
autos[6] = 'Renault'; // Ocupa un espacio en memoria igual si agg un elemento salteando una ubicacion
console.log(autos); // Por ende en nuestro array tendriamos un elemento "empty" en medio del que se agg acá

// Como preguntar si una Array o un Arreglo

console.log(Array.isArray(autos)); // Nos va a devolver un boolean (true)

console.log(autos instanceof Array); // Preguntamos si la variable es una instancia de la clase Array
                                     // Osea si es un tipo Arreglo (true)