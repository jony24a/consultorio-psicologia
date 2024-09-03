from flask import Flask, request, jsonify
from flask_cors import CORS
import app  # Importa la conexión desde tu archivo de configuración

app_flask = Flask(__name__)
CORS(app_flask)  # Habilita CORS para todas las rutas y orígenes

@app_flask.route('/registrar', methods=['POST'])
def registrar_profesional():
    data = request.json

    # Asignar los datos recibidos
    tipo_documento = data['tipo_documento']
    numero_documento = data['numero_documento']
    nombre = data['nombre']
    genero = data['genero']
    estrato = data['estrato']
    barrio = data['barrio']
    localidad = data['localidad']

    cursor = app.conexion.cursor()

    # Sentencia SQL para insertar datos
    sql = '''
        INSERT INTO profesionales (tipo_documento, numero_documento, nombre, genero, estrato, barrio, localidad)
        VALUES (%s, %s, %s, %s, %s, %s, %s)
    '''

    try:
        # Ejecutar la sentencia SQL
        cursor.execute(sql, (tipo_documento, numero_documento, nombre, genero, estrato, barrio, localidad))
        app.conexion.commit()
        return jsonify({"message": "Profesional registrado exitosamente."}), 201
    except Exception as e:
        app.conexion.rollback()
        return jsonify({"message": "Error al registrar el profesional: " + str(e)}), 500
    finally:
        cursor.close()

if __name__ == '__main__':
    app_flask.run(debug=True)
