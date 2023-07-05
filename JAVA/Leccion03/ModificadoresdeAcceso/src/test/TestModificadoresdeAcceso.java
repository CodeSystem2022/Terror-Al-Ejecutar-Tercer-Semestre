package test;

import paquete1.Clase1;
import paquete2.Clase3;

public class TestModificadoresdeAcceso {
    /*
    
    */
    public static void main(String[] args) {
     Clase1 clase1 = new Clase1();   
     System.out.println("clase1 = " + clase1.atributoPublic);
     //Clase1 clase2 = new Clase1("atributoProtected"); Nos dara error ya que este constructor es protected
     //y por ello no se puede utilizar fuera de la clase
     //recordar que para poder acceder a protected, debemos hacer la clase, hija de quien tiene elementos protected
     clase1.metodoPublico();
     
     Clase3 claseHija = new Clase3();
     System.out.println("claseHija = " + claseHija);
    }
}
