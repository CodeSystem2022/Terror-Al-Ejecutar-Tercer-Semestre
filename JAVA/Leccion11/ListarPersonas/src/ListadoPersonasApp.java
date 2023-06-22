import java.util.ArrayList;
import java.util.List;
import java.util.Scanner;

public class ListadoPersonasApp {
    public static void main(String[] args) {
        Scanner entrada = new Scanner(System.in);
        //Definimos la lista fuera del ciclo while
        List<Persona> personas = new ArrayList<>();//array vacio
        //Empezamos con el menú
        var salir = false;
        while (!salir){//mientras salir no sea diferente a
                        // false el ciclo continua.
            mostrarMenu();//creamos una función, método
            try{
                salir = ejecutarOperacion(entrada, personas);//nuevo método
            } catch(Exception e){
                System.out.println("Ocurrió un error: "+e.getMessage());//atrapamos el problema
            }
            System.out.println();//salto de linea
        }//Fin del ciclo while
    }//Fin método main

    private static void mostrarMenu(){//método static como el main y vacio(void)
        //mostramos las opciones
        System.out.print("""
                ******* Listado de Personas *******
                1. Agregar
                2. Listar
                3. Salir
                """);
        System.out.print("Digite una de las opciones: ");
    }//Fin del método mostrar menú

    //función o método↓
    private static boolean ejecutarOperacion(Scanner entrada, List<Persona>personas){
        var opcion = Integer.parseInt(entrada.nextLine());
        var salir = false;
        //Revissamos la opcion digitada a través de un switch
        switch (opcion){
            case 1 -> {//Agregar una persona a la lista
                System.out.print("Digite el nombre: ");
                var nombre = entrada.nextLine();
                System.out.print("Digite el telefono: ");
                var tel = entrada.nextLine();
                System.out.print("Digite el correo: ");
                var email = entrada.nextLine();
                //Creamos el objeto persona
                var persona = new Persona(nombre, tel, email);
                //agregamos la persona a la lista
                personas.add(persona);
                System.out.println("La lista tiene: "+personas.size()+" elementos");
            }//Fin del caso 1
        }//Fin del switch
    }//Fin del método ejecutarOperacion
}//Fin de la clase ListadoPersonasApp