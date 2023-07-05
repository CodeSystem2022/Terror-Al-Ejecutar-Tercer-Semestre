//9.9 Función ejecutarOperacion y pruebas - JAVA (Semana 9)

private static void ejecutarOperacion(int operacion, Scanner entrada){
    System.out.println("Digite el valor para el operando1: ");
    var operando1 = Integer.parseInt(entrada.nextLine());
    System.out.println("Digite el valor para el operando2: ");
    var operando2 = Integer.parseInt(entrada.nextLine());
    int resultado;
    switch (operacion) {
        case 1 -> { //Suma
            resultado = operando1 + operando2;
            System.out.println("Resultado de la suma: " + resultado);
        }
        case 2 -> { //Resta
            resultado = operando1 - operando2;
            System.out.println("Resultado de la resta: " + resultado);
        }
        case 3 -> { //Multiplicacion
            resultado = operando1 * operando2;
            System.out.println("Resultado de la multiplicacion: " + resultado);
        }
        case 4 -> { //Division
            resultado = operando1 / operando2;
            System.out.println("Resultado de la division: " + resultado);
        }
        case 4 -> { //Resta
            resultado = operando1 - operando2;
            System.out.println("Resultado de la resta: " + resultado);
        }
        default -> System.out.println("Opcion erronea: " + operacion); 
    }//Fin switch
}//Fin metodo ejecutarOperacion