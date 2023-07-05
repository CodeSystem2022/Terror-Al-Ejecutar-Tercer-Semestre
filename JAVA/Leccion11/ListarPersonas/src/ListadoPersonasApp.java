import java.util.ArrayList;
import java.util.List;
import java.util.Scanner;

public class ListadoPersonasApp {
    public static void main(String[] args) {
        Scanner entrada = new Scanner(System.in);

        // Definimos la lista fuera del ciclo while
        List <Persona> personas = new ArrayList<>(); // Array vacio.
        // Empezamos con el menú.
        var salir = false;
        while (!salir){ // Mientras salir no sea diferente a false el ciclo continua.
            mostrarMenu(); // Creamos una función, método
            try {
                salir = ejecutarOperacion(entrada, personas);//nuevo método
            } catch(Exception e){
                System.out.println("Ocurrió un error: "+e.getMessage()); // Atrapamos el problema.
            }
            System.out.println(); // Salto de linea.
        } // Fin del ciclo while.
    } // Fin método main.

    private static void mostrarMenu(){ // Método static como el main y vacio (void).
        // Mostramos las opciones.

        System.out.print("""
                ******* Listado de Personas *******
                1. Agregar
                2. Listar
                3. Salir
                """);
        System.out.print("Digite una de las opciones: ");

    } // Fin del método mostrar menú.

    // Función o método ↓
    private static boolean ejecutarOperacion(Scanner entrada, List<Persona>personas){
        var opcion = Integer.parseInt(entrada.nextLine());
        var salir = false;
        // Revisamos la opcion digitada a través de un switch.
        switch (opcion){
            case 1 -> { // Agregar una persona a la lista.
                System.out.print("Digite el nombre: ");
                var nombre = entrada.nextLine();
                System.out.print("Digite el tel: ");
                var tel = entrada.nextLine();
                System.out.print("Digite el email: ");
                var email = entrada.nextLine();
                // Creamos el objeto persona.
                var persona = new Persona(nombre, tel, email);
                // Agregamos la persona a la lista.
                personas.add(persona);
                System.out.println("La lista tiene: "+personas.size()+" elementos");
            } // Fin del caso 1.
            case 2 -> { // Listar a las personas.
                System.out.println("Listado de personas: ");
                // Método de referencia, mejoras con lambda listado de personas tiene un método llamado for each porque es una colección.
                // personas.forEach((persona) -> System.out.println(persona)); // Este metodo tiene un parámetro de tipo consumer tenemos que proporcionar una función lambda para acceder a cada uno de los objetos de tipo persona de la lista.
                // Otra mejora utilizando método de referencia.
                personas.forEach(System.out::println); // Por cada objeto de tipo persona en nuestra lista se manda a ejecutar el método println, ya no indicamos que imprimimos todos los objetos lo dobles puntos :: se conoce como método referencia se infiere que queremos mandar a cada uno de los objetos y pasarlos como parámetros al método println para que el método los imprima.
            } // Fin caso 2.
            case 3 -> { // Salir del ciclo.
                System.out.println("Hasta Pronto...");
                salir = true; // Esto hace que termine.
            } // Fin caso 3.
            default -> System.out.println("Opción incorrecta: "+opcion);
        } // Fin del switch.
        return salir; // La variable que tiene el poder de sacarnos del ciclo while.
    } // Fin del método ejecutarOperacion.
} // Fin de la clase ListadoPersonasApp.

