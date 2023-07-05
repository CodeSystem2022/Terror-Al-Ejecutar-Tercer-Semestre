import psycopg2 #Esto es para poder conectarnos a Postgre

conexion = psycopg2.connect(
    user = 'postgres',
    password ='admin',
    host = '127.0.0.1',
    port = '5432',
    database = 'test_db'
)
try:
    with conexion:
        with conexion.cursor() as cursor:
            sentencia = 'UPDATE persona SET nombre=%s, apellido=%s, email=%s WHERE id_persona=%s'
            valores = (
                ('Juan', 'Perez', 'jperez@gmail.com', 4)
                ('Romina', 'Ayala', 'ayalar@gmail.com',5)
            )
            cursor.execute(sentencia, valores) #De esta manera ejecutamos la sentencia 
            #conexion.commit() esto se utiliza para guardar los cambios en la base de datos
            registros_actualizados = cursor.rowcount 
            print(f'Los registros actualizados son: {registros_actualizados}')
            
except Exception as e:
    print(f'Ocurrio un error: {e}')
finally:
    conexion.close()