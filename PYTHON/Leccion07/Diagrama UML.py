<diagram program="umletino" version="15.1"><zoom_level>10</zoom_level><element><id>UMLClass</id><coordinates><x>80</x><y>50</y><w>250</w><h>230</h></coordinates><panel_attributes>conexion
--
-DATABASE: String
-USERNAME: String
-PASSWORD:String
-DB PORT: String
-HOST: String
-conexion: connection
-cursor:Cursor
--
+obtenerconexion(cls): Connection
+obtenerCursor(cls).Cursor
+cerrar(cls)
--
Responsabilidades:
Administrar la conexion a la base de datos</panel_attributes><additional_attributes></additional_attributes></element><element><id>UMLClass</id><coordinates><x>470</x><y>50</y><w>210</w><h>190</h></coordinates><panel_attributes>Persona
--
-id_persona:int
-nombre:String
-apellido:String
-email:String
--
+_str_():String
+metodo Get/Set de cada atributo
--
Responsibilidades:
Crear objetos de la entidad de 
persona</panel_attributes><additional_attributes></additional_attributes></element><element><id>UMLClass</id><coordinates><x>470</x><y>360</y><w>210</w><h>190</h></coordinates><panel_attributes> PersonaDao
--
-SELECCIONAR:String
-INSERTAR:String
-ACTUALIZAR:String
-ELIMINAR:String
--
+seleccionar(cls)
+insertar(cls,persona)
+actualizar(cls,persona)
+eliminar(cls,persona)
--
Responsibilidades:
Realizar las operaciones obre la base 
de datos de la entidad
Persona
</panel_attributes><additional_attributes></additional_attributes></element><element><id>Relation</id><coordinates><x>570</x><y>230</y><w>30</w><h>150</h></coordinates><panel_attributes>lt=&lt;&lt;&lt;&lt;-</panel_attributes><additional_attributes>10;130;10;10</additional_attributes></element><element><id>Relation</id><coordinates><x>190</x><y>270</y><w>300</w><h>210</h></coordinates><panel_attributes>lt=&lt;&lt;-
</panel_attributes><additional_attributes>280;190;10;190;10;10</additional_attributes></element></diagram>
