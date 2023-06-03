//EJEMPLO DE LA NO EXISTENCIA DE HOISTING EN TRABAJO DE CLASES
//let persona3 = new Persona('Carla', 'Ponce'); //da error


//SINTAXIS BASICA PARA DEFINIR UNA CLASE
//se recomienda que el nombre inicie con mayuscula
class Persona {

    //creamos un constructor
    //este constructor es muy similar al constructor utilizado para crear un objeto
    //su sintaxis tambien es muy similar a la sintaxis de un metodo
    constructor(nombre, apellido){
        //inicializamos los atributos de la clase, utilizando this.
        this._nombre = nombre; //usamos el gion bajo para trabajar con get
        this._apellido = apellido;



        //CASO NO DEFINIR CONSTRUCTOR
        /*
        En el caso de que no definamos un constructor en nuestra clase
        js agregara uno vacio de manera automatica
        */

        //TRABAJAR CON ATRIBUTOS STATIC
        //es muy importante tener en cuenta que al trabajar con un atributo static, al llamarlo no se debe utilizar el operador this.
        //ya que this apunta a la referencia de un objeto
        //se debe apuntar a traves de la clase en si, como se ve a continuacion
        //Persona.contadorObjetosPersona++;
        //console.log('Se incrementa el contador, el nuevo valor es: '+Persona.contadorObjetosPersona);


        

    }
    //METODOS GET Y SET
    //se colocan como suele ser lo general luego del constructor y metodos
    
    //IMPORTANTE METODO GET Y SET (buena practica guion delante de propiedad)

    // En js a diferencia de otros lenguajes, el metodo get no puede llevar el mismo nombre
    //que nuestra propiedad. Es por ello que en muchas ocaciones se acostumbra a poner un gion bajo
    // delante del nombre de las propiedades. propidades == atributos
    

    get nombre(){ //utilizamos el nombre sin el guion, es la idea de haber puesto un guin al atributo
        return this._nombre;
    }

    get apellido(){
        return this._apellido;
    }


    //METODO SET

    set nombre(nombre){
        this._nombre = nombre;
    }


    set apellido(apellido){
        this._apellido = apellido;
    }
}






//Crearemos objetos

let persona1 = new Persona('Martin', 'Perez');
//console.log(persona1); //accedemos a todos los atributos del metodo
console.log(persona1.nombre); //utilizamos el metodo get
//al momento de llamarlo no es necesario poner los parentesis ya que 
//al no recibir parametros, no es necesario que lleven los parentesis
//js entiende que se esta llamando un metodo get

persona1.nombre = 'Juan Carlos';
console.log(persona1.nombre);
//js detectara de manera automatica que se llama a get o set a pesar de tener el mismo nombre
//esto lo hace por contexto
persona1.apellido = 'Rodrigez';
console.log(persona1.apellido);

let persona2 = new Persona('Carlos', 'Lara');
//console.log(persona2);
console.log(persona2.nombre);
persona2.nombre = 'Maria Laura';
console.log(persona2.nombre);
persona2.apellido = 'Dominguez';
console.log(persona2.apellido);

//hoisting
/*
El hoisting es un comportamiento en JavaScript donde las declaraciones de variables y funciones se mueven automáticamente 
al principio de su ámbito (ya sea el ámbito global o el ámbito de una función) durante la fase de compilación. Esto significa 
que puedes utilizar variables y funciones antes de declararlas explícitamente en tu código.

IMPORTANTE
Sin embargo, es importante tener en cuenta que solo la declaración en sí se eleva, no la inicialización. En el ejemplo anterior,
 la declaración de miVariable se eleva, pero su asignación (valor asignado)) se mantiene en su posición original.

 por lo que si llamamos una variable antes de declararla, no dara error, pero su valor sera indefinido o el valor default
*/

//NO HAY HOISTING EN CLASES

/*
Cuando trabajamos con clases no existe el histing, es decir, si queremos declarar un objeto antes de haber
declarado la clase, no se podra  hacer, dara un error

*/

