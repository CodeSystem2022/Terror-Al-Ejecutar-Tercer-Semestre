public class TestArgumentosVariables {
    public static void main(String[] args) {
        imprimirNumeros(1,2,3,4,5);
        variosParametros("Juan","Perez","blabla@blabla.com",7,8,9);
    }

    private static void variosParametros(String nombre, String apellido, String email, int ...numeros){
        System.out.println("Nombre: " + nombre);
        System.out.println("Apellido: " + apellido);
        System.out.println("Email: " + email);

        imprimirNumeros(numeros);
    }

    private static void imprimirNumeros(int ...numeros){
        for (int i = 0; i < numeros.length; i++) {
            System.out.println("Elementos: " + numeros[i]);
        }
    }

}
