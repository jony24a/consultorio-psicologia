import mysql.connector
from sqlalchemy import create_engine

# Configuración de la conexión a la base de datos
usuario = 'root'
contraseña = 'root'
host = 'localhost'
puerto = '3306'
nombre_bd = 'agendamiento'

# Crear una cadena de conexión usando SQLAlchemy
conexion_str = f'mysql+mysqlconnector://{usuario}:{contraseña}@{host}:{puerto}/{nombre_bd}'

# Crear un engine de SQLAlchemy
engine = create_engine(conexion_str)

# Conectar usando mysql-connector-python
try:
    conexion = mysql.connector.connect(
        host=host, user=usuario, passwd=contraseña, db=nombre_bd, port=puerto
    )
    print("La conexión se hizo correctamente")
except mysql.connector.Error as e:
    print("No se hizo conexión a la base de datos:", e)
