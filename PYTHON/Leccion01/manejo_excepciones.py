from NumerosIgualesException import NumerosIgualesException

resultado = None
a = 7
b = 0
try:
   #Si creamos variables dentro del bloque try estas seran exclusivas del bloque
    a = int(input("Ingrese un numero: "))
    b = int(input("Ingrese otro numero"))#En caso de ingresar un valor erroneo
    #al tipo de dato de entrada que especificamos, exception captara el error
    if a == b:

        raise NumerosIgualesException('Son numeros iguales')
        #la palabra recervada raise nos permite arrojar una excepcion
        #A travez de ella accedemos a la exccepcion
    resultado = a/b # modificamos

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