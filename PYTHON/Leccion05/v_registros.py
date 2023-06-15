import psycopg2 # Esto es para poder conectarnos a Postgre

conexion = psycopg2.connect(user='postgres', password='240484', host='127.0.0.1', port='5432', database='test_bd')
try:
    with conexion:
        with conexion.cursor() as cursor:
            sentencia = 'SELECT * FROM persona WHERE id_persona IN (1,2,3,4,5,6,7)' # Placeholder
            cursor.execute(sentencia) # De esta manera ejecutamos la sentencia
            registros = cursor.fetchall() # Recuperamos todos los registros que serán una lista
            for registro in registros:
                print(registro)

except Exception as e:
    print(f'Ocurrió un error: {e}')
finally:
    conexion.close()