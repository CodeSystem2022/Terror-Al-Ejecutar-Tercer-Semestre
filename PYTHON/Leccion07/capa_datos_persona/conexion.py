
    @classmethod
    def liberarConexion(cls, conexion):
        """
        Para poder liberar un objeto de tipo conexion vamos a recibir como argumento el objeto conexion, de modo
        que cuando ya no estemos utilizando este objeto de conexion, lo podemos regresar al pool de conexiones

        para ello llamamos al metodo obtenerPool ya que este metodo, si no existe el pool lo crea, y si existe regresa al
        mismo, debido a que estamos utilizando una variable de clase (_pool = None)

        lo recomendable es utilizar ese metodo, para no tener que lidiar con errores si es que el objeto pool no a sido
        inicializado, de esta manera trabajamos con un objeto pool valido y para regresar la conexion que ya no estamos
        utilizando, llamamos al petodo putconn() ("poner o colocar"), este metodo va a poner o colocar el objeto conexion
        de nuevo en el pool de conexiones y entonces lo que hacemos es regresar el objeto conexion que ya no se esta utilizando
        o no utiliza cierto usuario y lo regresamos a cierto usuario, con el metodo putcon, podemos mandar un mensaje


        """
        cls.obtenerPool().putconn(conexion)
        log.debug(f'Regresamos la conexion del pool: {conexion}')#indicamos que objeto de conexion estamos regresando

        


