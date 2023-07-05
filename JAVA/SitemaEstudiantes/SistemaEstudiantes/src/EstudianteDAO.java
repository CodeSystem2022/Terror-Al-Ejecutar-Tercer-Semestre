import java.sql.PreparedStatement;
import java.sql.ResultSet;

public class EstudianteDAO {

    //Mètodo por id -> fin by id
    public boolean buscarEstudiantePorId(Estudiante estudiante){
        PreparedStatement ps;
        ResultSet rs;
        connection con = getConnection();
        String sql = "SELECT * FROM estudiantes2022 WHERE idestudiantes2022=?";
        try{
            ps = con.prepareStatement(sql);
            ps.setInt(1, estudiante.getIdEstudiante());
            rs = ps.executeQuery();
            if(rs.next()){
                estudiante.setNombre(rs.getString("nombre"));
                estudiante.setApellido(rs.getString("apellido"));
                estudiante.setTelefono(rs.getString("telefono"));
                estudiante.setEmail(rs.getString("email"));
                return true; //Se encontrò in registro
            }//Fin if
        } catch (Exception e){
            System.out.println("Ocurriò un error al buscar estudiante: "+e.getMessage());
        }//Fin catch
        finally {
            try {
                con.close();
            } catch (Exception e){
                System.out.println("Ocurriò un error al cerrar la conexion: "+e.getMessage());
            }//Fin catch
        }//Fin finally
        return false;
    }
}
