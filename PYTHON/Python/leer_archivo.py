archivo = open('prueba.txt','r',encoding='utf8') # las letras son: 'r' read, 'a' append, 'w' write, 'x'.
# print(archivo.read())
# print(archivo.read(16))
# print(archivo.read(10)) # Continuamos con la linea antorior con el siguiente print
# print(archivo.readline())
# print(archivo.readline())
# Vamos a iterar el archivo, cada una de las lineas
# for linea in archivo:
    #print(linea): itearmos todos los elementos del archivo
    #print(archivo.readlines()): accedemos al archivo como si fuera una lista
# print(archivo.readlines()[11])  accedemos al archivo como si fuera una lista
# Anexamos información, copiamos a otro

archivo2 = open('copia.txt','w',encoding='utf8')
archivo2.write(archivo.read())
archivo.close() # Cerramos el primer achivo
archivo2.close() # Cerramos el segundo archivo

print('Se ha terminado el proceso de leer y copiar archivos')