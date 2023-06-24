/* 

public state void determinarTipo(Empleado empleado) {
    if(empleado instanceof Gerente) {
        System.out.println("Es de tipo Gerente.");
        Gerente gerente = (Gerente) empleado;
        gerente.getDepartamento();
    }
    else if(empleado instanceof Empleado) {
        System.out.println("Es de tipo Empleado.");
    }
    else if(empleado instanceof Object) {
        System.out.println("Es de tipo Object.");
    }
}

*/

package test;

import domain.*;

public class TestInstanceOf {
    public state void determinarTipo(Empleado empleado) {
        if(empleado instanceof Gerente) {
        System.out.println("Es de tipo Gerente.");
        Gerente gerente = (Gerente) empleado;
        // ((Gerente) empleado).getDepartamento();
        System.out.println("Gerente = "+gerente.getDepartamento());
        }
        else if(empleado instanceof Empleado) {
            System.out.println("Es de tipo Empleado.");
        // Gerente gerente = (Gerente)empleado;
        // System.out.println("Gerente = "+gerente.getDepartamento());
        }
        else if(empleado instanceof Object) {
            System.out.println("Es de tipo Object.");
        }
    }
}