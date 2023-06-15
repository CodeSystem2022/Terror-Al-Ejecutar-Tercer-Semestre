//7.2 Manejo de Interfaces Parte 2 - JAVA (SEMANA 7)
package accesodatos;

public interface IaccesoDatos {
    int MAX_REGISTRO = 10;

    //Metodo insertar es abstracto y sin cuerpo
    void insertar();

    void listar();

    void actualizar();

    void eliminar();
}