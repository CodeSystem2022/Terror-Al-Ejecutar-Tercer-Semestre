import psycopg2  #Para poder conectarnos a Postgre

conexion = psycopg2.connect(
    user='postgres',
    password='admin',
    host='127.0.0.1',
    port='5432',
    database='test_bd'
)

try:
    with conexion:
        with conexion.cursor() as cursor:
            sentencia = 'SELECT * FROM persona WHERE id_persona IN %s' #Placeholder, para sustituir con una variable
            entrada = input('Digite los números de registros a eliminar (separados por coma): ')
            valores = (tuple(entrada.split(',')),) #es una lista de tuplas
            cursor.execute(sentencia, valores) # De esta manera ejecutamos la sentencia
            #registros = cursor.fetchall() #Recuperamos todos los registro que seran una lista
            registros_eliminados = cursor.rowcount #Optimizamos el fetch
            print(f'los registros eliminados son: {registros_eliminados}')
except Exception as e:
    print(f'Ocurrio un error: {e}')
finally:
    conexion.close()
