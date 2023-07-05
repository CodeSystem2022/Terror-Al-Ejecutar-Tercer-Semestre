package domain;

public abstract class FiguraGeometrica {
    protected String tipoFigura; // ATRIBUTO
    //CONSTRUCTOR
    protected FiguraGeometrica(String tipoFigura) {
        this.tipoFigura = tipoFigura;
    }
    // METODO ABSTRACTO (la clase tambien tiene que ser abstracta)
    public abstract void dibujar();
    // AGREGAMOS GET Y SET
    public String getTipoFigura() {
        return tipoFigura;
    }

    public void setTipoFigura(String tipoFigura) {
        this.tipoFigura = tipoFigura;
    }
    
    @Override
    public String toString() {
        return "FiguraGeometrica { " + "tipoFigura = " + tipoFigura + '}';
    }
}