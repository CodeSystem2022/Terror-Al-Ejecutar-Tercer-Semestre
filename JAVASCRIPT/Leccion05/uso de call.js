
//  El uso de call 
let persona4 = {
    nombre: 'Jorge',
    apellido: 'Rojas',
    nombreCompleto2: function(titulo, telefono){
        return titulo+': '+this.nombre+' '+this.apellido+' '+telefono;
    }
}

let persona5 = {
    nombre: 'Carlos',
    apellido: 'Lara'
}

console.log(persona4.nombreCompleto2(persona4, 'Lic', '6759873344')); Lic: Jorge Rojas 6759873344
console.log(persona4.nombreCompleto2.call(persona5, 'Ing', '98735356272')); Ing: Carlos Lara 98735356272


