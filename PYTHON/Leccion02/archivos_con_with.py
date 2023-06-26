from ManejoArchivos import ManejoArchivos
#manejo de contexto with: sintaxis simplificada
#with open('prueba.txt','r',encoding='utf8') as archivo:
    # con with ademas de abrir el archivo lo renombra (da una etiqueta) y lo cierra
    #print(archivo.read())
# no hace falta el try ni el finally
# en el contexto de with lo que se ejecuta de manera automatica
# utiliza diferentes metodos: __enter__ este es el q abre
# ahora el siguiente metodo es el que cierra: __exit__

with ManejoArchivos('prueba.txt') as archivo:
    print(archivo.read())
