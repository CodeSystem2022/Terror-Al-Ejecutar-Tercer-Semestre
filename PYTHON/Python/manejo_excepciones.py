from NumerosIgualesException import NumerosIgualesException
resultado = None

try:
    a =int(input("Digite el primer número: "))
    b = int(input("Digite el segundo número: "))
    if a == b:
        raise NumerosIgualesException('Son números iguales')
    resultado = a / b # Modificamos
except TypeError as e:
    print(f'TypeError - Ocurrió un error: {type(e)}')
except ZeroDivisionError as e:
    print(f'ZeroDivisionError - Ocurrió un error: {type(e)}')
except Exception as e:
    print(f'Exception - Ocurrió un error: {type(e)}') # Capturamos esta excepcion que es un objecto, por convencion se le llama e.
else: # Se ejecuta en caso de que ninguna excepcion se detecte, osea si el programa funciona con éxito
    print("No se arrojó ninguna excepción")
finally: # Siempre se va a ejecutar
    print("Ejecucion de este bloque finally")


print(f'El resultado es: {resultado}')
print('seguimos...')
