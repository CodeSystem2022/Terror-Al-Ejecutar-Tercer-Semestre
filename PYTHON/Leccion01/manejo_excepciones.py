from NumerosIgualesException import NumerosIgualesException

resultado = None
a = 7
b = 0
try:
    a = int(input(f'Digite un primer numero: '))
    b = int(input(f'Digite un segundo numero: '))
    if a == b:
        raise NumerosIgualesException('Son números iguales')
    resultado = a / b # Modificamos
except TypeError as e:
    print(f'TypeError - Ocurrió un error: {type(e)}')
except ZeroDivisionError as e:
    print(f' ZeroDivisionError - Ocurrió un error: {type(e)}')
except Exception as e:
    print(f'Exception - Ocurrió un error: {type(e)}')
else:
    print('No se arrojó ninguna excepción: ')
finally:  # Siempre se va a ejecutar
    print(f'Ejecucion de este bloque finally')


print(f'El resultado es: {resultado}')
print('seguimos ...')