if __name__ = '__main__':
    # Eliminar un registro.
    persona1 = Persona(id_persona = 18)
    personas_eliminadas = PersonaDAO.eliminar(persona1)
    log.debug(f'Personas eliminadas: {personas_eliminadas}')

    # Actualizar un registro.
    persona1 = Persona(1, 'Juan', 'Pena', 'jpena@mail.com')
    personas_actualizadas = PersonaDAO.actualizar(persona1)
    log.debug(f'Personas actualizadas: {personas_actualizadas}')
    
    # Insertar un registro.
    persona1 = Persona(nombre = 'Mateo', apellido = 'Torres', email = 'tmateo@mail.com')
    personas_insertadas = PersonaDAO.insertar(persona1)
    log.debug(f'Personas insertadas: {personas_insertadas}')

    # Seleccionar objetos.
    personas = PersonaDAO.seleccionar()
    for persona in personas:
        log.debug(persona)