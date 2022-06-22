num = int(input("ingrese un mun dentro del rango de 1 a 3: "))
numTexto = ''

if num == 1:
    numTexto = 'Numero uno'
elif num == 2:
    numTexto = 'Numero dos'
elif num == 3:
    numTexto = 'Numero tres'
else:
    numTexto = "ingresaste un num fuera del rango"
print(f"El numero ingresado es: {num} -- {numTexto}")

