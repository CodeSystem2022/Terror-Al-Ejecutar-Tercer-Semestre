package domain;



public class Escritor extends Empleado{
    
    
    //Casting: se conoce como casting en programacion al proceso de cambiar el valor de un tipo de dato a otro tipo de dato.
    
    //DOWCASTING
    /*
    Se denomina dowcasting al proceso de convertir la referencia de tipo padre almacenada en una variable a una referencia de tipo hijo
    
    Es decir convertir la referencia de tipo padre a la de tipo hija de una gerarquia/referencia superior a una inferior
    */
    
    //UPCASTING
    /*
    Se denomina upcasting al proceso de convertir la referencia de tipo hijo almacenada en una variable a una referencia de tipo padre
    
    Es decir convertir una referencia de tipo hija  auna padre, de una gerarquia/referencia inferior a una superior
    */
    
    final TipoEscritura tipoEscritura;
    
    public Escritor(String nombre, double sueldo, TipoEscritura tipoEscritura){
        super(nombre, sueldo);
        this.tipoEscritura = tipoEscritura;
    }
    
    //Metodo para sobreescribir
    @Override
    public String obtenerDetalles(){
        return super.obtenerDetalles()+", Tipo Escritura: "+tipoEscritura.getDescripcion();
    }

    @Override
    public String toString() {
        return "Escritor{" + "tipoEscritura=" + tipoEscritura + '}'+" "+super.toString();
    }

    public TipoEscritura getTipoEscritura() {
        return tipoEscritura;
    }
    
    
    
}
