@classmethod
def cerrarConexiones(cls):
    cls.obtenerPool().closeall()


if __name__ == '__main__':
    conexion1 = Conexion.obtenerConexion()
    conexion.liberarConexion(conexion1)
    conexion2 = Conexion.obtenerConexion()
    conexion.liberarConexion(conexion2)
    conexion3 = Conexion.obtenerConexion()
    conexion.liberarConexion(conexion3)
    conexion4 = Conexion.obtenerConexion()
    conexion5 = Conexion.obtenerConexion()
    conexion6 = Conexion.obtenerConexion()