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
            sentencia = 'INSERT INTO persona (nombre, apellido, email) VALUES (%s, %s, %s)' #Placeholder, para sustituir con una variable
            entrada = input('Digite los números de registros a eliminar (separados por coma): ')
            valores = (tuple(entrada.split(',')),) #es una lista de tuplas
            cursor.execute(sentencia, valores) # De esta manera ejecutamos la sentencia
            #registros = cursor.fetchall() #Recuperamos todos los registro que seran una lista
            registros_insertados = cursor.rowcount #Optimizamos el fetch
            print(f'Los registros insertados son: {registros_insertados}')
except Exception as e:
    print(f'Ocurrio un error: {e}')
finally:
    conexion.close()
