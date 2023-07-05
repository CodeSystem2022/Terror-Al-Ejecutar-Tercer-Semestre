
package UTN.datos;

import UTN.dominio.Estudiante;

import static UTN.conexion.Conexion.getConnection;
import java.sql.Connection;
import java.sql.PreparedStatement;
import java.sql.ResultSet;
import java.util.ArrayList;
import java.util.List;
public class EstudianteDAO {
    //Metodo listar
    public List<Estudiante> listar(){
        List<Estudiante> estudiantes = new ArrayList<>();
        //Creamos algunos objetos que son necesarios para comunicarnos con la base de datos
        PreparedStatement ps; //Envia la sentencia a la base de datos
        ResultSet rs;         //Obtenemos el resultado de la base de datos
        //Creamos un objeto de tipo conexión
        Connection con = getConnection();
        String sql = "SELECT * FROM estudiantes ORDER BY estudiantes2022"
                try{
                    ps = con.prepareStatement(sql);
                    rs = ps.executeQuery();
                    while (rs.next()){
                        var estudiante = new Estudiante();
                        estudiante.setIdEstudiante(rs.getInt("idestudiantes2022"));
                        estudiante.setNombre(rs.getString("nombre"));
                        estudiante.setApellido(rs.getString("apellido"));
                        estudiante.setTelefono(rs.getString("telefono"));
                        estudiante.setEmail(rs.getString("email"));
                        //Falta agregarlo a la lista
                        estudiantes.add(estudiante);
                    }
                } catch (Exception e){
                    System.out.println("Ocurrio un error al seleccionar datos: "+e.getMessage());
                }
                finally {
                    try {
                        con.close();
                    } catch (Exception e){
                        System.out.println("Ocurrio un error al cerrar la conexion: "+e.getMessage());
                    }
                } //Fin finally
                return estudiantes;
    }           // Fin metodo listar
}

// Método para modificar estudiante
public boolean modificarEstudiante(Estudiante estudiante){
    PreparedStatement ps;
    Connection con = getConnection();
    String sql = "UPDATE estudiantes2022 SET nombre=?, apellido=?, telefono=?, email=? WHERE idestudiantes2022=?";
    try{
        ps = con.prepareStatement(sql);
        ps.setString(1, estudiante.getNombre());
        ps.setString(2, estudiante.getApellido());
        ps.setString(3, estudiante.getTelefono());
        ps.setString(4, estudiante.getEmail());
        ps.setInt(5, estudiante.getIdEstudiante());
        ps.execute();
        return true;
    } catch (Exception e){
        System.out.println("Error al modificar estudiante: "+e.getMessage());
    }//Fin catch
    finally{
        try{
            con.close();
        } catch (Exception e){
            System.out.println("Error al cerrar la conexion: "+e.getMessage());
        }//Fin catch
    }//Fin finally
    return false;


