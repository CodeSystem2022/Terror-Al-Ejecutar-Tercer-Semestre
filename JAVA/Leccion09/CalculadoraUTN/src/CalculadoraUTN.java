import java.util.Scanner;
public class CalculadoraUTN {
    public static void main(String[] args) {
        Scanner entrada = new Scanner(System.in);
        while (true){ // Ciclo infinito, solo se finaliza con un break.


            System.out.println("******* Aplicación Calculadora *******");
            mostrarMenu();

            try {
                var operacion = Integer.parseInt(entrada.nextLine());
                if (operacion >= 1 && operacion <= 4) {
                    ejecutarOperacion(operacion, entrada);
                    // Imprimimos un salto de linea antes de repetir el menú.
                    System.out.println();
                } // Fin del if.
                else if (operacion == 5) {
                    System.out.println("Hasta pronto!");
                    break; // Rompe el ciclo y sale.
                } // Fin else if.
                else {
                    System.out.println("Opción erronea: " + operacion);
                } // Fin else.
                System.out.println();
            }catch(Exception e){ // Fin del try, comienzo del catch.
                System.out.println("Ocurrió un error: "+e.getMessage());
                System.out.println();
            } // Fin catch.
        } // Fin while.
    } // Fin main.
    private static void mostrarMenu(){
        // Mostramos el menú.
        System.out.println(" 1. Suma\n 2. Resta\n 3. Multiplicación\n 4. División\n 5. Salir");
        System.out.print("¿Operación a realizar? ");
    } // Fin método mostrar menú.

    private  static void ejecutarOperacion(int operacion, Scanner entrada){
        System.out.print("Digite el valor para el operando1: ");
        var operando1 = Double.parseDouble(entrada.nextLine());
        System.out.print("Digite el valor para el operando2: ");
        var operando2 = Double.parseDouble(entrada.nextLine());
        Double resultado;
        switch (operacion) {
            case 1 -> { // Suma.
                resultado = operando1 + operando2;
                System.out.println("Resultado de la suma: " + resultado);
            }
            case 2 -> { // Resta.
                resultado = operando1 - operando2;
                System.out.println("Resultado de la resta: " + resultado);
            }
            case 3 -> { // Multiplicación.
                resultado = operando1 * operando2;
                System.out.println("Resultado de la multiplicación: " + resultado);
            }
            case 4 -> { // División.
                resultado = operando1 / operando2;
                System.out.println("Resultado de la división: " + resultado);
            }
            default -> System.out.println("Opción erronea: " + operacion);
        } // Fin Switch
    } // Fin método ejecutar operación.

} // Fin clase.
