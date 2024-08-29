import app  # Importa la conexión desde app.py

cursor = app.conexion.cursor()  # Usar la conexión importada

# Sentencia SQL para insertar datos
sql = '''
    INSERT INTO profesionales (id_profesional, tipo_documento, numero_documento, nombre, genero, estrato, barrio, localidad)
    VALUES (%s, %s, %s, %s, %s, %s, %s, %s)
'''

# Datos que quieres insertar
nuevo_profesional = (None, 'Cc', 1687541347, 'Juen Gomez', 'Masculino', 3, 'Bosa', 'Fusagasuga')

# Ejecutar la sentencia SQL
cursor.execute(sql, nuevo_profesional)

# Confirmar los cambios
app.conexion.commit()

# Cerrar la conexión
app.conexion.close()

print("Datos insertados correctamente.")

#  id_profesional int primary key auto_increment,
#     tipo_documento varchar(10),
#     numero_documento int,
#     nombre varchar(50),
#     genero varchar(10),
#     estrato int,
#     barrio varchar(50),
#     localidad varchar(50)
