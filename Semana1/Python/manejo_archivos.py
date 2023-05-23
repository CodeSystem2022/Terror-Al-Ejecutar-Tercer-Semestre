# Declaramos una variable

try:
    archivo = open('prueba.txt','w', encoding='utf8') # La w es de write que significa escribir
    archivo.write('Programamos con diferentes tipos de archivos, ahora en txt.\n')
    archivo.write('Los acentos son importantes para las palabras\n')
    archivo.write('como por ejemplo: acción, ejecución y producción\n')
    archivo.write(' las letras son: \nr read leer, \na append anexa, \nw write escribe, \nx crea un archivo\n')
    archivo.write('t es para texto o text, \nb archivos binarios\nw+ lee y escribe,\nr+ lee y escribe la r y w son iguales\n')
    archivo.write('Saludos a todos los alumnos de la tecnicatura\n')
    archivo.write('Con esto terminamos')
except Exception as e:
    print(e)
finally: #Siempre se ejecuta
    archivo.close() # Con esto se debe cerrar el archivo
#archivo.write('Todo quedó perfecto') este es un error porque salé del bloque y esta cerrado



