package test;


import domain.*;

public class TestConversionObjetos {
    public static void main (String [] args) {
        Empleado empleado;
        empleado = new Escritor("Juan", 5000, TipoEscritura.CLASICO);
        //System.out.println("empleado = " + empleado);
        System.out.println(empleado.obtenerDetalles());//Si queremos acceder a métodos Escritor
        //empleado.getTipoEscritura(); No se puede hacer
        //Downcasting
        //((Escritor)empleado).getTipoEscritura();//Tenemos 2 opciones:esta es una
        Escritor escritor=(Escritor)empleado;//Esta es la segunda opción
        escritor.getTipoEscritura();