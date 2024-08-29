from flask import Flask, request, jsonify
from flask_cors import CORS  # Importa CORS
import app  # Importa la conexión desde app.py

app_flask = Flask(__name__)
CORS(app_flask) 

@app_flask.route('/registrar', methods=['POST'])
def registrar_profesional():
    data = request.json
    tipo_documento = data.get('tipo_documento')
    numero_documento = data.get('numero_documento')
    nombre = data.get('nombre')
    genero = data.get('genero')
    estrato = data.get('estrato')
    barrio = data.get('barrio')
    localidad = data.get('localidad')

    cursor = app.conexion.cursor()  # Usar la conexión importada

    # Sentencia SQL para insertar datos
    sql = '''
        INSERT INTO profesionales (tipo_documento, numero_documento, nombre, genero, estrato, barrio, localidad)
        VALUES (%s, %s, %s, %s, %s, %s, %s)
    '''

    # Datos que quieres insertar
    nuevo_profesional = (tipo_documento, numero_documento, nombre, genero, estrato, barrio, localidad)

    try:
        # Ejecutar la sentencia SQL
        cursor.execute(sql, nuevo_profesional)
        # Confirmar los cambios
        app.conexion.commit()
        return jsonify({'message': 'Datos insertados correctamente'}), 201
    except Exception as e:
        print(e)
        return jsonify({'message': 'Error al insertar datos'}), 500
    finally:
        cursor.close()

if __name__ == '__main__':
    app_flask.run(debug=True)
