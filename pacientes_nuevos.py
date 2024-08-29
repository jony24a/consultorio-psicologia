import app  # Importa la conexión desde app.py

cursor = app.conexion.cursor()  # Usar la conexión importada

# Sentencia SQL para insertar datos
sql = '''
    INSERT INTO pacientes (id_paciente, tipo_documento, numero_documento, nombre, genero, estrato, barrio, localidad, escolaridad)
    VALUES (%s, %s, %s, %s, %s, %s, %s, %s, %s)
'''

# Datos que quieres insertar
nuevo_paciente = (None, 'Cc', 1687541347, 'Juen Gomez', 'Masculino', 3, 'Bosa', 'Fusagasuga', 'Bachiller')

# Ejecutar la sentencia SQL
cursor.execute(sql, nuevo_paciente)

# Confirmar los cambios
app.conexion.commit()

# Cerrar la conexión
app.conexion.close()

print("Datos insertados correctamente.")
