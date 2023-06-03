//EJEMPLO DE LA NO EXISTENCIA DE HOISTING EN TRABAJO DE CLASES
//let persona3 = new Persona('Carla', 'Ponce'); //da error


//SINTAXIS BASICA PARA DEFINIR UNA CLASE
//se recomienda que el nombre inicie con mayuscula
class Persona {
    //Si bien la clase padre no extiende de nada, la clase de la que extienden todas las clases por defecto
    //es la clase Object, al igual que pasa en java



    //DEFINIMOS ATRIBUTO STATIC
    //este atributo pertenecera a la clase y no a los objetos en si, al igual que pasa con las clases static

    //static contadorObjetosPersona = 0; //atributo estatico
    static contadorPersonas = 0;

    //CREAMOS ATRIBUTOS NO ESTATICOS
    //estos son atributos que van directamente a la clase sin ser necesariamente utilizados en el constructor

    //email = 'Valor default email'; //atributo no estatico


    //CREAR UN CONSTANTE ESTATICA
    //es decir, crear una variable de tipo estatica pero que no pueda ser modificada
    //para ello no podemos utilizar la palabra reservada const, que seria una constante, para declarar variables
    //pero si queremos declarar una variable estatica que no sea modificable, se puede hacer lo siguiente:
    /*
    Creamos un metodo estatico que solo nos permitira leer el valor que va a regresar este metodo
    pero no vamos a poder modificar esta variable ya que no es una variable realmente, solo es la llamada a un metodo estatico
    parecera una constante de tipo estatico
    es decir simulamos una constante

    La idea de la "constante" que crearemos sera determinar el maximo de objetos que podemos crear, para limitar la creacion de objetos
    */
    
    static get MAX_OBJ(){ //en mayusculas porque asi se identifican las constantes
        return 5;
        //de esta forma no se podra modificar, sera estatico y siempre regresara el mismo valor
    }

    //creamos un constructor
    //este constructor es muy similar al constructor utilizado para crear un objeto
    //su sintaxis tambien es muy similar a la sintaxis de un metodo
    constructor(nombre, apellido){
        //inicializamos los atributos de la clase, utilizando this.
        this._nombre = nombre; //usamos el gion bajo para trabajar con get
        this._apellido = apellido;

        if(Persona.contadorPersonas < Persona.MAX_OBJ){ //Limitamos la cantidad de objetos maximos que se pueden construir
            this.idPersona= ++Persona.contadorPersonas;
        }else{
            console.log('Se ha superado el maximo de objetos permitidos')
        }






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


    //cabe destacar que no es necesario agregar ninguna coma entre metodo y metodo
    //tampoco utilizamos la palabra reservada function para crear los metodos
    //solo con el nombre js entiende que es una funcion o un metodo dentro de la clase


    //Metodo para heredar a la clase hija
    nombreCompleto(){
        return this.idPersona+' '+this._nombre+ ' '+ this._apellido;
        //Podemos observar que aunque el metodo este creado en la clase padre, este podra ser accesible
        //desde la clase hija
    }


   //METODO TO STRING
   /*
   Este metodo nos permite imprimir informacion del estado del objeto es decir todos los valores y estados actuales de los atributos de nuestro objeto 
   es buena practica agregar este metodo en la definicion de nuestra clase

   Sin embargo cuando trabajamos en la clase object, tenemos que tener en cuenta que hay metodos que ya estan definidos en la clase objetc, o metodos que ya 
   estan definidos en el atributo de prototype

   podemos ver que uno de estos atributos definidos en object.prototype es toString
   
   Object.prototype.toString

   A continuacion sobreescribimos el metodo toString
    */

    toString(){ //regresa un String
        return this.nombreCompleto();
    }


    //Static
    /*
    Una vez que ya hemos definido una clase podemos agregar no solamente metodos que se asocien a nuestros objetos. tambien  podemos agregar metodos
    que se asocien esclusivamente con nuestra clase. Para ello utilizamos la palabra reservada "static"
    */

    static saludar(){
        console.log('Saludos desde este método static');
    }

    //UN METODO STATIC PUEDE PASAR COMO ARGUMENTO UN OBJETO
    //para demostrarlo crearemos otro metodo static
    //de llamar desde una clase hija  y de tener que mostrear otrov alor en la previsualizacion de quocka
    //quocka lo mostrara separado de una coma a cada valor, siendo el primero en mostrarse el primero en llamarase, en orden
    //descendente

    static saludar2(persona){
        console.log(persona.nombre+' '+persona.apellido);
    }

}






//CREACION DE UNA NUEVA CLASE QUE EXTIENDE DE PERSONA

class Empleado extends Persona{ //Clase Hija

    constructor(nombre, apellido, departamento){
        //cuando creamos un objeto de la clase hija, solo estamos inicializando el atributo de departamento
        //pero al extender de Persona, js, no tiene forma de inicializar los atributos de nombre y apellido
        //por lo que la unica forma que hay es llamar a su constructor para pasar los valores de nombre y apellido al constructor de la clase padre
        //para ello lo hacemos con super, la primer linea de la clase hija es el constructor de la clase padre, y a este le pasamos los valores requeridos
        //por lo sera necesario tomar en cuenta los atributos del constructor padre para agregarlos a los parametros, para luego pasarlos como argumetos
        super(nombre, apellido);
        this._departameto = departamento;
    }

    get departamento(){
        return this._departameto;
    }

    set departamento(departamento){
        this._departameto = departamento;
    }

    //SOBREESCRITURA

   /*
   Hasta este punto el metodo nombre completo de la clase padre, no esta completo desde el punto de vista de la clase hija
   le falta el atributo de departamento, ya que el metodo solo trae el nombre y apellido, no el departament que es el 
   atributo con el que trabaja la clase hija.

   Para cambiar esto, utilizaremos el concepto de sobreescritura desde la clase hija, permitiendonos cambiar el comportamiento de el metodo en la clase hija 


   IMPORTANTE:
   Para que se considere sobreescritura, el metodo debe manetener el mismo nombre que tiene en su clase padre, si lo modificamos, por minimo que sea
   este se considerara un metodo distinto, y no sera sobreescritura, si se tiene parametros tambien deben estar incluidos los mismos parametros
    */

   nombreCompleto(){
    //return this._nombre+' '+this._apellido+' '+this._departameto;
    //el codigo de arriba es muy redundante ya que tenemos gran parte de esto echo en el metodo de la clase padre, por lo que no es necesario
    //por ello resumimos con el siguiente codigo 
    return super.nombreCompleto()+' '+this._departameto;
    //no olvidar los parentesis en el metodo para que sea considerado un metodo
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

//CREAMOS OBJETOS DE LA CLASE HIJA

let empleado1 = new Empleado('Maria', 'Gimenez', 'Sistemas');
//al crear un objeto de la clase hija, si lo hacemos de la misma manera que lo hacemos con la clase padre
//esto nos devolvera un error que nos dira que debemos llamar a super en el constructor
// por lo que al crear objetos de una clase hija,es importante en el constructor de estos objetos, llamar a super 

console.log(empleado1);
console.log(empleado1.nombre);
//en este caso vemos como se heredan los metodos de la clase padre, ya que get nombre no esta en la clase hija
//pero si en la clase padre, y por ello podemos utilizarlo en un objeto de su clase hija



//ACCEDEREMOS A METODOS DE CLASE PADRE A TRAVEZ DE OBJETO DE CLASE HIJA QUE HEREDA CLASE PADRE
console.log(empleado1.nombreCompleto()); //Es necesario poner los parentesis para indicar que es un metodo



//Object.prototype.toString   //esta es la manera de acceder a atributos y metodos de manera dinamica 

//EL METODO PROTOTYPE NOS PERMITE AGREGAR OTROS METODOS A NUESTRA CLASE 
 /*
 En JavaScript, cada objeto tiene una propiedad llamada "prototype" (prototipo), que es una referencia a otro objeto.
  El prototipo es utilizado por el motor de JavaScript para buscar propiedades y métodos en caso de que no estén presentes en el objeto actual.

 La propiedad Object.prototype es un objeto especial en JavaScript que actúa como el prototipo de todos los objetos creados a través
 del constructor Object. En otras palabras, todos los objetos en JavaScript heredan propiedades y métodos de Object.prototype.

 La función toString es un método definido en Object.prototype. Cuando invocas Object.prototype.toString en un objeto,
 se devuelve una representación en forma de cadena de ese objeto. La cadena devuelta indica el tipo de objeto.
 */


console.log(empleado1.toString()); //accedemos desde la clase hija por herencia

/*
En este caso tambien se estara poniendo en practica el polimorfismo, ya que al ejecutar to String, no solo se llamara a nombre y apellido
sino que tambien se llamara al departamento, es decir, como en el metodo toString, retornamos el metodo nombreCompleto() este detecta que el mas
adecuado en este caso sera el metodo de la clase hija, es decir, la clase padre mediante polimorfismo puede acceder a los metodos de la clase hija

El metodo que se utilice dependera de la referencia con la que estemos trabajando, es decir, si lo que se utiliza es una referencia de clase hija, 
se llamara al metodod e la clase hija puesto que es el mas adecuado, pero si utilizamos un metodo de la clase padre, se mandara a llamar al metodo de la
clase padre, puesto que es el mas adecuado por el contexto

Polimorfismo: multiples formas en tiempo de ejecucion


El recorrido se puede describir de la siguiente manera:

hacemos el llamado desde objeto de clase hija, este busca el metodo en la clase hija y no lo encuentra
pero lo encuntra heredado de la clase padre, por lo que va a la clase padre, y utiliza el metodo, este llama
al metodo nombreCompleto() pero este metodo lo llama desde la clase padre pero no utiliza el de la clase padre, 
sino que va a la clase hija y utiliza el metodo sobreescrito, puesto que a sido llamado desde el objeto de la clase hija
el metodo de la clase hija, por como esta echo, llama al metodo de la clase padre, y le añade el departamento 


*/

console.log(persona1.toString());

/*
En este caso el recorrido va directamente a la clase, padre y al ser un objeto de clase padre, utilizara el metodo definido en esta clase 
*/


//LLAMAREMOS AL METODO STATIC
//Algo que podemos observar es que aunque hemos creado un objeto de la clase persona y lo hemos asignado a la variable persona1
// esta variable no podra ejecutar los metodos estaticos, nos mandara un mensaje diciendo que esto no es una funcion
//por ello un metodo estatico se asocia a una clase y no a un objeto.
//Por lo que si bien este metodo esta dentro de la clase, este no puede ser utilizado desde un objeto, sino que debe 
//ser utilizado desde la calse misma 
//persona1.saludar(); //no se utiliza desde el objeto

//se puede utilizar desde la clase
Persona.saludar(); //esta vez al utilizar el metodo de punto, nos sale la clase saludar, cosa que no pasaba antes a no ser que lo
//forzaramos

//UN METODO STATIC PUEDE PASAR COMO ARGUMENTO UN OBJETO
//le enviamos como argumento al objeto de persona1 y en el metodo static utilizamos la funcion de nombre de este objeto
//en este caso, quocka a diferencia de otros metodos no estaticos, no nos mostrara la salida de informacion desde la linea
//donde se esta llamando al metodo estatico, que seria la linea Persona.saludar(persona);
//sino que la salida de informacion se vera, en el mismo metodo static, es decir habra que verlo desde la clase, donde esta
//instanciado y ahi en el metodo se vera la salida de informacion
//es decir los resultados se veran en consola pero no en la visualizacion previa como se ve normalmente ya que el metodo static
//funciona diferente, en este caso solo se pued ever a travez de la clase y no a travez de los objetos

Persona.saludar2(persona1);


//llamar a metodo static desde clase hija
//en este caso podremos hacerlo, se vera en consola y en el metodo de la clase padre tambien se vera la previsualizacion
//con esto podemos ver que podemos utilizar metodos statics desde clases hijas e incluso con objetos de clases hijas
//Es decir hay herencia de clases static a las clases hijas,y aunque no se sobreescriban pueden se utilizadas por clases hijas
//utilizando las clases de los padres

Empleado.saludar();
Empleado.saludar2(empleado1);



//INTENTO DE USO DE ATRIBUTO STATIC
console.log(persona1.contadorObjetosPersona);
//Al intentar utilizar de esta forma el atributo, nos arrojara por consola que el atributo
//es undefined
//a travez de este ejemplo podemos ver que si utilizamos la referencia de un objeto y luego el nombre de una variable
//si esta variable no se encuentra definida en el objeto, entonces nos dara como salida el valor undefined
//En este caso la variable contadorObjetosPersona si existe pero no la podemos/debemos acceder con la referencia de un objeto
//la variable que heos creado es de tipo static, la tenemos que acceder por medio de la clase, al igual que con los metodos static
//en este sentido, tanto los metodos como los atributos static se trabajan de igual manera

//ACCEDEMOS A ATRIBUTO STATIC MEDIANTE CLASE
console.log(Persona.contadorObjetosPersona);
//en este caso dara como salida el valor real del atributo, ya que se puede acceder correctamente al atributo

//ACCEDEMOS DESDE LA CLASSE HIJA
console.log(Empleado.contadorObjetosPersona);
//Como vemos las clases hijas tambien tienen acceso a este atributo, por lo que se entiende que las clases hijas heredan atributos static


//ATRIBUTOS NO ESTATICOS
/*
Estos son atributos que se asocian con los objetos, a estos atributos solo podremos acceder mediante un objeto instanciado en la misma clase perteneciente
al atributo, como vemos a continuacion
*/
console.log(persona1.email);//accedemos perfectamente al atributo no estatico y muestra su valor

//VEMOS SI SE PUEDE ACCEDER POR HERENCIA
console.log(Empleado.email); //si, se puede sin problemas, por lo que estos atributos se heredan

//INTENTAMOS ACCEDER DESDE LA CLASE
console.log(Persona.email); //No se puede, da valor undefined



//Otras sintaxis

console.log(persona1.toString());
console.log(persona2.toString());
console.log(empleado1.toString());
console.log(Persona.contadorPersonas);


//Creamos mas objetos

let persona3 = new Persona('Carla', 'Pertosi');
console.log(persona3.toString());
console.log(Persona.contadorPersonas);

console.log(Persona.MAX_OBJ);
//Persona.MAX_OBJ = 10; //no sirve de nada, no se puede modificar ya que es un metodo, no una variable, y solo tiene un return


//Creamos otro objeto

let persona4 = new Persona('Franco', 'Diaz');
console.log(persona4.toString());
let persona5 = new Persona('Liliana', 'Paz');
console.log(persona5.toString()); //no habra definido un id ya que sueramos el maximo (se puede mejorar para evitar poner nombre y apellido)