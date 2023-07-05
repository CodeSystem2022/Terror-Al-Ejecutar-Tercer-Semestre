// While
let contador = 0;

while(contador < 3 ){
    console.log(contador);
    contador++;
}
console.log("Fin del ciclo while");


// Do While
let conteo = 0;

do{
    console.log(conteo);
    conteo++;
}while(conteo < 3);

console.log("Fin del ciclo Do While");


// For

for(let contando = 0; contando < 3; contando++){
    console.log(contando);
    contando++
}
console.log("Fin del ciclo For");

// Palabra reservada break
for(let contando = 0; contando < 10; contando++){
    if(contando  % 2 == 0){
        console.log(contando); // Muestra todos los pares
        break; // Muestra solo el primer número par, termina rompiendo el for.
    }
}
console.log("Termina el ciclo al encontrar los pares");

// La palabra reservada continue y etiquetas Labels
inicio:
for(let contando = 0; contando < 10; contando++){
    if(contando  % 2 !== 0){
       break inicio; // Ir a la siguiente iteración
    }
    console.log(contando); // 0, 2, 4, 6 ,8, 10
}
console.log("Termina el ciclo");


