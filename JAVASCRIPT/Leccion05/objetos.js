

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