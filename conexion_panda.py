import pandas as pd
from app import engine  # Importa el engine desde app.py

# Ruta al archivo Excel
archivo_excel = 'Registro Total - Consultorio.xlsx'

# Importar las hojas del archivo Excel
df_pacientes = pd.read_excel(archivo_excel, sheet_name='DATOS PACIENTES')
df_practicantes = pd.read_excel(archivo_excel, sheet_name='DATOS PRACTICANTES')

# Mostrar las primeras filas de cada DataFrame para verificar
print("Datos Pacientes:")
print(df_pacientes.head())

print("\nDatos Practicantes:")
print(df_practicantes.head())

# Insertar datos del DataFrame de pacientes en la tabla 'pacientes'
df_pacientes.to_sql('pacientes', con=engine, if_exists='append', index=False)

# Insertar datos del DataFrame de practicantes en la tabla 'practicantes'
df_practicantes.to_sql('practicantes', con=engine, if_exists='append', index=False)

print("Datos insertados correctamente en las tablas correspondientes")
