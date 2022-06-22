mes = int(input("Ingrese un mes del año. Del mes 1 al 12: "))

if mes == 1 or mes == 2 or mes == 3:
    print("Estas en el mes de Verano -- Del 21/12 al 21/03")
elif mes == 4 or mes == 5 or mes == 6:
    print("estas en el mes de Otoño -- Del 21/03 al 21/06")
elif mes == 7 or mes == 8 or mes == 9:
    print("estas en el mes de Invierno -- Del 21/06 al 21/09")
elif mes == 10 or mes == 11 or mes == 12:
    print("estas en el mes de Primavera -- Del 21/09 al 21/12")
else:
    print(f"Para el mes {mes} no hay estacion. Ingresar nuevamente")














