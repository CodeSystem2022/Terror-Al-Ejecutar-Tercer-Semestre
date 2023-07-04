// Agregar estudiante
ver nuevoEstudiante = new Estudiante('Carlos', 'Lara', '5495544223', 'carlosl@mail.com')
var agregado = estudianteDao.agregarEstudiante(nuevoEstudiante);
if(agregado)
    System.out.println("Estudiante agregado: "+nuevoEstudiante);
else
    System.out.println("No se ha agregado estudiante: "+nuevoEstudiante);