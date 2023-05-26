package paquete1;


class Clase2 { //Si borramos el modificador de acceso, esta pasa a ser una clase default o package
    /*
    Esto significa que no tiene modificador, esto provocara un error en una clase hija en otro paquete.
    Una clase defult no puede tener clases hijas fuera de este paquete, es decir no podra ser usada fuera del paquete 
    
    Esta clase tambien puede extender de otras clases sin problemas
    
    Al no poder trabajarse desde otas clases tambien es imposible realizar test
    podemos crear otro test dentro del mismo paquete, pero esto no debe hacerse en testing
    */
    
    String atributoDefault = "Valor del atributo default";
    
//    Clase2(){
//        System.out.println("Constructor Defult");
//    }
    
    public Clase2(){
        super();
        this.atributoDefault = "Modificacion del atributo default";
        System.out.println("atributoDefault = " + this.atributoDefault);
        this.metodoDefault();
        
    }
    
    
    void metodoDefault(){
        System.out.println("Metodo Default");
    }
    
    
    
}
