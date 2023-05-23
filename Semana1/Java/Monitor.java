package ar.com.system2023.mundopc;

public class Monitor {
    private final int idMonitor;
    private String marca;
    private double tamanio;
    private static int contadoMonitores;

    private Monitor(){
        this.idMonitor = ++ contadoMonitores;
    }

    public Monitor(String marca, double tamanio){
        this(); // Llamado al constructor vacio
        this.marca = marca;
        this.tamanio = tamanio;
    }

    public String getMarca() {
        return this.marca;
    }

    public void setMarca(String marca) {
        this.marca = marca;
    }

    public double getTamanio() {
        return this.tamanio;
    }

    public void setTamanio(double tamanio) {
        this.tamanio = tamanio;
    }

    //Ingresamos manualmente el getIdMonitor

    public int getIdMonitor(){
        return this.idMonitor;
    }

    @Override
    public String toString() {
        final StringBuilder sb = new StringBuilder("Monitor{");
        sb.append("idMonitor=").append(idMonitor);
        sb.append(", marca='").append(marca).append('\'');
        sb.append(", tamanio=").append(tamanio);
        sb.append('}');
        return sb.toString();
    }
}
