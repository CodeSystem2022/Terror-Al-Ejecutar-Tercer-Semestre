package ar.com.system2023.mundopc;

public class Raton extends DispositivoEntrada{

    private final int idRaton;
    private static int contadorRatones;


    public Raton(String tipoEntrada, String marca){
        super(tipoEntrada,marca);
        idRaton = ++ contadorRatones;
    }

    @Override
    public String toString() {
        final StringBuilder sb = new StringBuilder("Raton{");
        sb.append("idRaton=").append(idRaton);
        sb.append(super.toString());
        sb.append('}');
        return sb.toString();
    }
}
