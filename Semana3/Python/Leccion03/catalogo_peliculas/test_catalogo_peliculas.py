from dominio.Pelicula import Pelicula
from servicio.catalogo_pelicula import CatalogoPeliculas as cp
opcion = None

while(opcion != 4):
    try:
        print('Opciones: ')
        print('1. Agregar Peliculas')
        print('2. Listar Peliculas')
        print('3. Eliminar Catálogo')
        print('4. Salir')
        opcion = int(input('Digite una opción de menú (1-4): '))
        if (opcion == 1):
            nombre_pelicula = input('Digite el nombre de la pelicula: ')
            pelicula = Pelicula(nombre_pelicula)
            cp.agregar_peliculas(pelicula)
        elif (opcion == 2):
            cp.listar_peliculas()
        elif (opcion == 3):
            cp.eliminarPeliculas()

    except Exception as e:
        print(f'Ocurrió un error de tipo: {e}')
        opcion = None
    else:
        print('Salimos del programa...')

