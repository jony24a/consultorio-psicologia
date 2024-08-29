# import pandas as pd
#from config import Config
#from models import db
import mysql.connector

try: 
    conexion = mysql.connector.connect(host="localhost", user="root", passwd="", db="agendamiento", port="3306")
    print("la conexion se hizo correctamente")
except mysql.connector.Error as r: 
    print("No se hizo conexion a la base de datos")


