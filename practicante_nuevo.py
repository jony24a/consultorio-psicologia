import app  # Importa la conexión desde app.py

cursor = app.conexion.cursor()  # Usar la conexión importada

# Sentencia SQL para insertar datos
sql = '''
    INSERT INTO practicantes (id_practicante, tipo_documento, numero_documento, nombre, genero, estrato, barrio, localidad, periodo,jornada ,año_matricula)
    VALUES (%s, %s, %s, %s, %s, %s, %s, %s, %s, %s, %s)
'''

# Datos que quieres insertar
nuevo_practicante = (None, 'Cc', 1687541347, 'Juen Gomez', 'Masculino', 3, 'Bosa', 'Fusagasuga', 3, 'Diurna', 1600)

# Ejecutar la sentencia SQL
cursor.execute(sql, nuevo_practicante)

# Confirmar los cambios
app.conexion.commit()

# Cerrar la conexión
app.conexion.close()

print("Datos insertados correctamente.")
