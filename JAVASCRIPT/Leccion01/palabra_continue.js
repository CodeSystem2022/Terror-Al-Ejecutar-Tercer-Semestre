// La palabra continue
for (let contado = 0; contado <= 10; contado++){
    if(contado % 2 !== 0){
        continue; // ir a la siguiente iteración
    }
    console.log(contado); //0, 2, 4, 6, 8, 10
}
console.log("Termina el ciclo"); //Termina el ciclo
