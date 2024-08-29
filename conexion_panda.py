import pandas as pd

# Ruta al archivo Excel
archivo_excel = 'Registro Total - Consultorio.xlsx'

# Importar el archivo Excel
df = pd.read_excel(archivo_excel)

# Mostrar las primeras filas del DataFrame
print(df.head())
