package test;

public class TestAutoboxing {
    public static void main(String[] args) {
        //Clases envolventes o wrapper
        /*
        Clases envolventes
        int = la clase envolvente es Integer
        long = la clase envolvente es Long
        float =  la clase envolvente es Float
        double = la clase envolvente es Double
        boolean = la clase envolvente es Boolean
        byte = la clase envolvente es Byte
        char = la clase envolvente es Character
        short = la clase envolvente es Short
        */
        
        int enteroPrim = 10; //Tipo primitivo
        System.out.println("enteroPrim = "+ enteroPrim);
        Integer entero = 10; //Tipo object con la clase Integer 
        System.out.println("entero = "+ entero.doubleValue()); //Autoboxing
        
        int entero2 = entero; //Unboxing
        System.out.println("entero2 = " + entero2);
    }   
}
