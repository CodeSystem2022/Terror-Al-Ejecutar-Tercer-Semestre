package test;

import enumeraciones.Continentes;
import enumeraciones.Dias;

public class TestEnumeraciones {
    public static void main(String[] args) {
  /*      System.out.println("Dia 1: " + Dias.LUNES); //Las enumeraciones se tratan como cadena
        //Ahora no se deben utilizar comillas, se accede através de el operador de punto
        System.out.println("Dia 2: " + Dias.MARTES);
        System.out.println("Dia 3: " + Dias.MIERCOLES);
        indicarDiaSemana(Dias.MARTES);*/

        // EUROPA
        System.out.println("Cotinentes: " + Continentes.EUROPA);
        System.out.println("No. de Paises en el 1ro continenente: "
                + Continentes.EUROPA.getPaises());
        System.out.println("No. de Habitantes en el 1ro continenente: "
                + Continentes.EUROPA.getHabitantes());
        // AFRICA
        System.out.println("Cotinentes: " + Continentes.AFRICA);
        System.out.println("No. de Paises en el 2do continenente: "
                + Continentes.AFRICA.getPaises());
        System.out.println("No. de Habitantes en el 2do continenente: "
                + Continentes.AFRICA.getHabitantes());
        // ASIA
        System.out.println("Cotinentes: " + Continentes.ASIA);
        System.out.println("No. de Paises en el 3er continenente: "
                + Continentes.ASIA.getPaises());
        System.out.println("No. de Habitantes en el 3er continenente: "
                + Continentes.ASIA.getHabitantes());
        // AMERICA
        System.out.println("Cotinentes: " + Continentes.AMERICA);
        System.out.println("No. de Paises en el 4to continenente: "
                + Continentes.AMERICA.getPaises());
        System.out.println("No. de Habitantes en el 4to continenente: "
                + Continentes.AMERICA.getHabitantes());
        // OCEANIA
        System.out.println("Cotinentes: " + Continentes.OCEANIA);
        System.out.println("No. de Paises en el 5to continenente: "
                + Continentes.OCEANIA.getPaises());
        System.out.println("No. de Habitantes en el 5to continenente: "
                + Continentes.OCEANIA.getHabitantes());
    }
    private static void indicarDiaSemana(Dias dias){
        switch (dias){
            case LUNES:
                System.out.println("Primer dia de la semana");
                break;
            case MARTES:
                System.out.println("Segundo dia de la semana");
                break;
            case MIERCOLES:
                System.out.println("Tercer dia de la semana");
                break;
            case JUEVES:
                System.out.println("Cuarto dia de la semana");
                break;
            case VIERNES:
                System.out.println("Quinto dia de la semana");
                break;
            case SABADO:
                System.out.println("Sexto dia de la semana");
                break;
            case DOMINGO:
                System.out.println("Septimo dia de la semana");
                break;
            default:
                System.out.println("Se ingresó otro tipo de dato que no corresponde");
                break;
        }
    }
}
