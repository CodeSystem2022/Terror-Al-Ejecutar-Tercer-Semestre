# 6.3 Manejo de transacciones con with - Python (SEMANA 6)

import psycopg2 as bd # Es para poder conectarnos a Postgre

conexion = bd.connect(user='postgrres',password='admin',host="127.0.0.1",port='5432',database='test_bd')
try:
    conexion.autocommit = False
    cursor = conexion.cursor()
    sentencia = 'ISERT INTO  persona(nombre,apellido,email) VALUES (%s,%s,%s)'
    valores = ('Maria','Esperanza','mesparza@mail.com')
    cursor.execute(sentencia,valores)
    print('Termina la transaccion')
except Exception as e:
    print(f'Ocurrio un error: {e}')
finally:
    conexion.close()
    