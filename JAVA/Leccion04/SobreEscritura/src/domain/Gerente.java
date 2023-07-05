package domain;

public class Gerente extends Empleado{
    
    //al extender de la clase empleado y esta no tener un constructor vacio
    //el id nos indicara que debemos utilizar el constructor con dos argumentos de la clase padre
    //es posible que al hacer esto pueda llegar a dar un error, ya que el id puede mostrar como error el no tener 
    //un constructor vacio, pero podemos continuar y a medida que construyamos la clase este error desaparecera
    
    
    private String departamento;
    
    
    public Gerente(String nombre, double sueldo, String departamento){
        super(nombre, sueldo);//accedemos a losa tributos de padre a travez del constructor de clase padre
        //una vez llamemos al cosntructor super y le pasemos los argumentos, desaparecera el posible error nombrado anteriormente
        
        this.departamento = departamento;
    }
    //al ser clases publicas y heredar de la clase Empeleado, esta tendra acceso automatico a los metodos de su clase padre
    
    @Override
    //Un arroba se conoce como una anotacion. 
    //Una anotacion lo que hace es modificar el comportamiento del metodo que esta definido
    //En este caso lo que hace, no es modificar como tal el metodo, solamente le indica al compilador que este metodo esta siendo escrito desde la clase
    //padre. Es conveniente utilizar esta notacio para indicarle al compilador de manera automatica que el compilador sepa que estamos
    //sobreescribiendo un metodo de la clase padre. Incluso nos marcara que esta clase viene de la clase padre.
    //OVERRIDE = anular / desautorizar
    //se entiende que se refiere a que se le quita el valor al metodo original para en este caso darle valor a este metodo
    
    
    public String obtenerDetalles(){ //la declaracion del metodo a sobreescribir debe ser identica a lo que establecimos en la clase padre
        //modificamos el metodo desde la clase hija, agregaremos el atributo de departamento
        //EL METODO DE LA CLASE HIJA NO PUEDE SER MAS RESTRICTIVO QUE LE DE LA CLASE PADRE ----DA ERROR----
        //PERO SI PUEDE SER MENOS RESTRICTIVO
        
        return super.obtenerDetalles() + " Departamento: "+ this.departamento;
    }
    
}
