import psycopg2 # Esto es para poder conectarnos con postgre

conexion = psycopg2.connect(user = 'postgres', password = 'Alessio', host = '127.0.0.1', port='5432', database='test_bd')
try:
    with conexion:
        with conexion.cursor() as cursor:
            sentencia = 'UPDATE persona SET nombre=%s, apellido=%s, email=%s WHERE id_persona=%s'
            valores = ('German Gonzalo', 'perez', 'gcps@mail.com', 1) #Es una tupla
            cursor.execute(sentencia, valores) # De esta manera ejecuta la sentencia
            registros_actualizados = cursor.rowcount
            print(f'Los registros actualizados son: {registros_actualizados}')

except Exception as e:
    print(f'Ocurrio un error: {e}')
finally:
    conexion.close()
