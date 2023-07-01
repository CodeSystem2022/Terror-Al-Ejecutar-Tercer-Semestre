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
}//Fin método modificarEstudiante