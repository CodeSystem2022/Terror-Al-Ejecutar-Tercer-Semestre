package domain;

public class Gerente extends Empleado{
    private String departamento;
    
    public Gerente(String nombre, double sueldo, String departamento){
        super(nombre, sueldo);
        this.departamento = departamento;
    }
    //Sobreescribimos el método de la clase padre
    @Override
    public String obtenerDetalles(){
        return super.obtenerDetalles()+", Departamento: "+this.departamento;
    }
}
