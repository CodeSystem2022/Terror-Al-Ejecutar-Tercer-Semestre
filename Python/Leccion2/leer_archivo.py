
# 'w' write 'r' read
archivo = open('C:\\Users\usr\semestre3\Python\Leccion2\prueba.txt', 'r',
                encoding='utf8')
#   print(archivo.read())
# 'a' anexar información 'x' crea un archivo, regresa error si no existe archivo
# print(archivo.read(15)) # lee hasta la cantidad de caracteres ingresados
# print(archivo.read(5)) # continuamos desde la linea anterior
print(archivo.readline())# lee la primer linea
print(archivo.readline())# lee la linea siguiente

# vamos a iterar el archivo, cada una de las líneas
for linea in archivo:
 #   print(linea): iteramos todos los elementos del archivo
 #   print(archivo.readlines()[1]): accedemos al archivo como si fuera una lista
 # Anexamos información, copiamos a otro
 archivo2 = open('copia.txt', 'a', encoding='utf8')
 archivo2.write(archivo.read())
 archivo.close  # cerramos el primero archivo
 archivo2.close # cerramos el segundo archivo
 
print('Se ha terminado el proceso de leer y copiar archivos')







 