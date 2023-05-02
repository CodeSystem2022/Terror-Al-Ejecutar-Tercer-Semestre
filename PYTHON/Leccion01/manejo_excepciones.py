from NumerosIgualesException import NumerosIgualesException

resultado = None # indica qu la variable no tiene ningun valor


try:
    a = int(input(f'Digite un primer numero: ')) # las variales tamb se pueden crear dentro de bloques
    b = int(input(f'Digite un segundo numero: '))
    if a == b:
        raise NumerosIgualesException('Son numeros iguales')
    resultado = a / b # modificamos
except TypeError as e:
    print(f'TypeError - Ocurrio un error: {type(e)}')
except ZeroDivisionError as e:
    print(f' ZeroDivisionError- Ocurrio un error: {type(e)}')
except Exception as e:
    print(f'Exception- Ocurrio un error: {type(e)}')
else:
    print('No se arrojo ninguna excepcion: ')
finally:  # Siempre se va a ejecutar
    print(f'Ejecucion de este bloque finally')


print(f'El resultado es: {resultado}')
print('seguimos ...')