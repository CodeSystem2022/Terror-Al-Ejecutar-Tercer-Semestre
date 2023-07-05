package paquete1;

public class ClaseHija2 extends Clase2{ 
    //Aqui vemos que una clase tipo default puede ser padre de otra clase siempre que esta este dentro del mismo paquete 
    public ClaseHija2(){
        super();
        this.atributoDefault = "Modificacion del atributo Default";
        System.out.println("atributoDefault = " + this.atributoDefault );
        this.metodoDefault();
    }
    
    
}
