package UTN.datos;

import UTN.dominio.Estudiante;
import static UTN.conexion.Conexion.getConnection;
import java.sql.Connection;
import java.sql.PreparedStatement;
import java.sql.ResultSet;
import java.util.ArrayList;
import java.util.List;

//DAO data access object
public class EstudianteDAO {
    //Método listar
    public List<Estudiante> listarEstudiantes(){
        List<Estudiante> estudiantes = new ArrayList<>();//objeto
        //creamos algunos objetos necesarios para comunicarnos
        //con la base de datos
        PreparedStatement ps;//Envia la sentencia a la base de datos
        ResultSet rs;//Obtenemos el resultado de la base de datos
        //quearys ↑

        //creamos un objeto de tipo conexion
        Connection con = getConnection();
        String sql = "SELECT * FROM estudiantes2022 ORDER BY idestudiantes2022";
        try {                       //↑tabla                    ↑ID
            ps = con.prepareStatement(sql);//enviamos la consulta
            rs = ps.executeQuery();//recibir el query
            while (rs.next()){
                var estudiante = new Estudiante();//columnas
                estudiante.setIdEstudiante(rs.getInt("idestudiantes2022"));
                estudiante.setNombre(rs.getString("nombre"));
                estudiante.setApellido(rs.getString("apellido"));
                estudiante.setTelefono(rs.getString("telefono"));
                estudiante.setEmail(rs.getString("email"));
                //Falta agregarlo a la lista
                estudiantes.add(estudiante);//lista
            }
        } catch (Exception e){
            System.out.println("Ocurrió un error al seleccionar datos: "+e.getMessage());
        }
        finally {
            try{
                con.close();//cerrar conexion
            } catch (Exception e){
                System.out.println("Ocurrió un error al cerrar: "+e.getMessage());
            }
        }//fin finally
        return estudiantes;
    }//Fin método listar

    //Método por id -> find by id
    public boolean buscarEstudiantePorId(Estudiante estudiante){
        PreparedStatement ps;
        ResultSet rs;
        Connection con = getConnection();
        String sql = "SELECT * FROM estudiantes2022 WHERE idestudiantes2022=?";
        try {
            ps = con.prepareStatement(sql);
            ps.setInt(1, estudiante.getIdEstudiante());
            rs = ps.executeQuery();
            if(rs.next()){
                estudiante.setNombre(rs.getString("nombre"));
                estudiante.setApellido(rs.getString("apellido"));
                estudiante.setTelefono(rs.getString("telefono"));
                estudiante.setEmail(rs.getString("email"));
                return true; //Se encontró un registro
            }//Fin if
        } catch (Exception e){
            System.out.println("Ocurrió un error al buscar estudiante: "+e.getMessage());
        }//fin catch
        finally {
            try {
                con.close();
            } catch (Exception e){
                System.out.println("Ocurrió un error al cerrar la conexión: "+e.getMessage());
            }//fin catch
        }//fin finally
        return false;

        //Método agregar un nuevo estudiante
        public boolean agregarEstudiante(Estudiante estudiante){
            PreparedStatement ps;
            Connection con = getConnection();
            String sql = "INSERT INTO estudiantes2022 (nombre, apellido, telefono, email) VALUES (?, ?, ?, ?)";
            try {
                ps = con.prepareStatement(sql);
                ps.setString(1, estudiante.getNombre());
                ps.setString(2, estudiante.getApellido());
                ps.setString(3, estudiante.getTelefono());
                ps.setString(4, estudiante.getEmail());
                ps.execute()//para insertar, sin query
                return true;

            } catch (Exception e){
                System.out.println("Ocurrió un error al agregar el estudiante: "+e.getMessage());
            }//fin catch
            finally {
                try {
                    con.close();
                } catch (Exception e){
                    System.out.println("Ocurrió un error al cerrar la conexión: "+e.getMessage());
                }//fin catch
            }//fin finally
            return false;
        }//Fin método agregarEstudiante

    }

    public static void main(String[] args) {
        //Listar los estudiantes
        var estudianteDao = new EstudianteDAO();
        System.out.println("Listado de estrudiantes: ");
        List<Estudiante> estudiantes = estudianteDao.listarEstudiantes();
        estudiantes.forEach(System.out::println);//Función lambda para imprimir

        //Buscar estudiante por id
        var estudiante1 = new Estudiante(1);
        System.out.println("Estudiantes antes de la busqueda: "+estudiante1);
        var encontrado = estudianteDao.buscarEstudiantePorId(estudiante1);
        if(encontrado)
            System.out.println("Estudiante enocontrado: "+estudiante1);
        else
            System.out.println("No se encontró el estudiante: "+estudiante1.getIdEstudiante());
    }


}
