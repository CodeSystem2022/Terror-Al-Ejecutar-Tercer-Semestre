# Declaramos una variable.

archivo = open('prueba.txt', 'w') # La W es de Write, que simplifica escribir.
except Exception as e:
    print(e)
finally: # Siempre se ejecuta
    archivo.close() # Con esto se debe cerrar el archivo.