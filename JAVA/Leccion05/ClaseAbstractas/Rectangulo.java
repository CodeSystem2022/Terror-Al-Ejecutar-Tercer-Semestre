// CLASE HIJA
package domain;

public class Rectangulo extends FiguraGeometrica {
    // CONSTRUCTOR
    public Rectangulo(String tipoFigura) {
        super(tipoFigura);
    }
    // IMPLEMENTANDO EL METODO, NO SOBREESCRIBIR
    @Override
    public void dibujar() {
        System.out.println("Se imprime un: " + this.getClass().getSimpleName());
    }
}