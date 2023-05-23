import psycopg2 # Esto es para poder conectarnos a Postgre
conexion = psycopg2.connect(
    user='postgres',
    password='postgres',
    host='127.0.0.1',
    port='5432',
    database='test_bd'
)

cursor = conexion.cursor()
sentencia = 'SELECT * FROM persona'
cursor.execute(sentencia) # De esta manera ejecutamos la sentencia
registro = cursor.fetchall() # Recuperamos todos los registros que serán una lista
print(registro)
# [(1, 'Juan', 'Perez\n', 'jperez@mail.com\n'), (2, 'Carla', 'Gomez\n', 'kgomez@mail.com')] Nos encontramos
# una lista con 1 tubla por cada ID dentro
cursor.close()
conexion.close()