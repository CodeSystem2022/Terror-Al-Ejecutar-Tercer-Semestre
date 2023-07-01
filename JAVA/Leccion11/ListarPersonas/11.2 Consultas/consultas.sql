--Comenzamos con CRUD: create (insertar), read (leer), update (actualizar), delete (eliminar)
--Listar los estudiantes (read)
SELECT * FROM estudiantes2022;
--Insertar estudiante

INSERT INTO estudaintes2022(nombre,apellido, telefono, emial)VALUES("Juan", "Perez", "261455456", juan@gmail.com);
--Update (modificar)

UPDATE estudiantes2022 SET nombre="Juan Carlos", apellido="Garcia" WHERE idestudiantes2022= 1;
--Delate(eliminar)

DELATE FROM estudantes2022 WHERE idestuantes2022=3;

--para modificar el id estudiantes2022 y comience en 1
ALTER TABLE estudiantes2022 AUTO_INCREMENT = 1;
