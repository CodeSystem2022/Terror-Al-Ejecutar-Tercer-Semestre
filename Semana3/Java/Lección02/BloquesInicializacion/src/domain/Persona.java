package domain;
public class Persona {
    private final int idPersona;
    private static int contadorPersona;

    static { // Bloque de inicializacion estático
        System.out.println("Ejecución bloque estático");
         ++Persona.contadorPersona;
        //idPersona = 10; No es un atributo estático, por esto tenemos un error
    } // Dentro del contexto estático no podemos acceder al operador this.


    { //Bloque de inicializacion NO estático (contexto dinámico)
        System.out.println("Ejecución del bloque NO estático");
        this.idPersona = Persona.contadorPersona++; //Incrementamos el atributo
    }
    // Los bloques de inicialización se ejecutan antes del constructor(de nuestra clase)

    public Persona(){
        System.out.println("Ejecución del constructor");
    }

    public int getIdPersona(){
        return this.idPersona;
    }

    @Override
    public String toString() {
        final StringBuilder sb = new StringBuilder("Persona{");
        sb.append("idPersona=").append(idPersona);
        sb.append('}');
        return sb.toString();
    }
}
