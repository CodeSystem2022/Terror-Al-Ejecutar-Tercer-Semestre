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
            sentencia = 'SELECT * INTO persona (nombre, apellido, email)VALUE (%s, %s, %s)'
            valores = ('Carlos', 'Lara', 'clara@gamil.com') #Es una tupla
            cursor.execute(sentencia, valores) #De esta manera ejecutamos la sentencia 
            #conexion.commit() esto se utiliza para guardar los cambios en la base de datos
            registros_insertados = cursor.rowcount # Recuperamos todos los registros que seran una lista
            print(f'Los registros insertados son: {registros_insertados}')
            
except Exception as e:
    print(f'Ocurrio un error: {e}')
finally:
    conexion.close()