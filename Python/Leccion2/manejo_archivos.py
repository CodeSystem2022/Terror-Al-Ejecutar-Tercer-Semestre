# Declaramos una varible
try:
    archivo = open('prueba.txt', 'w', encoding='utf8') # La w es de write, escribir información hacia el archivo
    archivo.write('Programamos con diferentes tipos de archivos, ahora en txt.\n')
    archivo.write('Los acentos son importantes para las palabras\n')
    archivo.write('como por ejemplo: acción, ejecución y producción\n')
    archivo.write('Las letras son :\nr read leer, \na append anexa, \nw write escribe, \nx crea un archivo')
    archivo.write('\nt esta es para texto o text, \nb archivos binarios, \nw+ leer y escribir y r+ son iguales')
    archivo.write('Saludamos a todos los alumnos de la tecnicatura\n')
    archivo.write('Con esto terminamos\n')
except Exception as e:
    print(e)
finally: # siempre se ejecuta
    archivo.close() # con esto se debe cerrar el archivo
# archivo.write('Todo quedo perfecto'): este es un error, ya se cerró el archivo.

