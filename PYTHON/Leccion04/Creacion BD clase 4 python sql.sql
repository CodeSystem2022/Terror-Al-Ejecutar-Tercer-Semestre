--BUENA PRACTICA ES UTILIZAR LAS PALABRAS RESERVADAS EN MAYUSCULA

--Consulta infurmacion seleccionada
--SELECT * FROM persona WHERE id_persona in (1,2,3)

--Ingresamos un nuevo elemeto a la taba
--INSERT INTO persona(nombre, apellido, email)VALUES ('Susana', 'Lara', 'slara@gmai.com')

--Hacemos la consulta para ver toda la informacion de la tabla
--SELECT * FROM persona

--Actualizamos un valor de la tabla
-- Hay que tener cuidado con este comando ya que al no especificar el id del elemento
-- o utilizar algun filgro de where, cambiaraemos los datos de toda la tabla
--UPDATE persona SET nombre = 'Ivonne', apellido = 'Esperanza', email = 'iesperanza@gmail.com' WHERE id_persona = 3

--Mostramos los datos
--SELECT * FROM persona

--Borrar datos
--DELETE FROM PERSONA -- NOOOOOOO
-- CUIDADO si no usamos filtros borramos toda la tabla

--Borrar con filtro
--DELETE FROM persona WHERE id_persona = 3
SELECT * FROM persona