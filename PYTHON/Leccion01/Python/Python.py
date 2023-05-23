from NumerosIgualesException import NumerosIgualesExeption

try:
    10/0
except Exception as e: # Excepcion clase padre
    print(f'Ocurrio un error: {e}')

try:
    10/0
except ZeroDivisionError as e: #Excepcion mas especifica
    print(f'Ocurrio un error: {e}')


#Excepciones varias

resultado = None #La variable no tienen ningun valor
a = '10'
b = 0

try:
    resultado = a / b
except TypeError as e:
    print(f'TypeError - Ocurrio un error: {type(e)}') #Excepcion de tipo, mas especifica

except ZeroDivisionError as e:
    print(f'ZeroDivisionError - Ocurrio un error: {type(e)}')

except Exception as e: #Excepcion es mas generico,una clase de mayor jerarquia, abarca mas errores
     print(f'Exception - Ocurrio un error: {type(e)}')

print(f'El resultado es: {resultado}')
print('seguimos... ')


#Podemos declarar variables dentro del bloque Try

try:
    a= int(input('Digite el primero numero: ')) 
    b= int(input('Digite el primero numero: '))
    if a == b:
        raise NumerosIgualesExeption('Son numeros iguales') #raise nos permite lanzar excepciones personalizadas 
    resultado = a / b

except TypeError as e:
    print(f'TypeError - Ocurrio un error: {type(e)}')

except ZeroDivisionError as e:
     print(f'ZeroDivisionError - Ocurrio un error: {type(e)}')

except Exception as e: #Excepcion es mas generico,una clase de mayor jerarquia, abarca mas errores
     print(f'Exception - Ocurrio un error: {type(e)}')

else: #Se activa el bloque cuando no hay ninguna excepcion, Su uso es opcional
    print("No se arrojo ninguna exepcion")

finally: #Siempre se va a ejecutar este bloque
    print("Ejecucion del bloque finally")


print(f'El resultado es: {resultado}')
print('seguimos... ')