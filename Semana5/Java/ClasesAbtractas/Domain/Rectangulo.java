package domain;

public class Rectangulo extends FiguraGeometrica{
    //Constructor
    public Rectangulo(String tipoFigura){
        super(tipoFigura); 
    }
    
    @Override
    public void dibujar(){ //Implementando el metodo
        System.out.println("Se imprime un: "+this.getClass().getSimpleName());
    }
}
