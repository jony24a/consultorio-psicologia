import express from 'express';
import mysql from 'mysql2';
import cors from 'cors';

const app = express();
app.use(cors());
app.use(express.json());

// Configura la conexión a la base de datos
const conexion = mysql.createConnection({
  host: 'localhost',
  database: 'Agendamiento',
  user: 'root',
  password: '852574565126Pp?',
});

conexion.connect((error) => {
  if (error) {
    console.error('Error al conectar a la base de datos:', error);
    return;
  }
  console.log('Conexión exitosa a la base de datos');
});

// Ruta para insertar un profesional
app.post('/profesionales', (req, res) => {
  const { tipo_documento, numero_documento, nombre, genero, estrato, barrio, localidad } = req.body;
  const query = `INSERT INTO profesionales (tipo_documento, numero_documento, nombre, genero, estrato, barrio, localidad) VALUES (?, ?, ?, ?, ?, ?, ?)`;

  conexion.query(query, [tipo_documento, numero_documento, nombre, genero, estrato, barrio, localidad], (error, results) => {
    if (error) {
      console.error('Error al insertar datos:', error);
      res.status(500).send('Error al insertar los datos');
    } else {
      res.status(201).send('Registro agregado exitosamente');
    }
  });
});

// Ruta para insertar un practicante
app.post('/practicantes', (req, res) => {
  const { tipo_documento, numero_documento, nombre, genero, estrato, barrio, localidad, periodo, jornada, año_matricula } = req.body;
  const query = `INSERT INTO practicantes (tipo_documento, numero_documento, nombre, genero, estrato, barrio, localidad, periodo, jornada, año_matricula) VALUES (?, ?, ?, ?, ?, ?, ?, ?, ?, ?)`;

  conexion.query(query, [tipo_documento, numero_documento, nombre, genero, estrato, barrio, localidad, periodo, jornada, año_matricula], (error, results) => {
    if (error) {
      console.error('Error al insertar datos:', error);
      res.status(500).send('Error al insertar los datos');
    } else {
      res.status(201).send('Registro de practicante agregado exitosamente');
    }
  });
});

// Ruta para insertar un paciente
app.post('/pacientes', (req, res) => {
  const { tipo_documento, numero_documento, nombre, genero, estrato, barrio, localidad, escolaridad, id_practicante_fk, id_profesional_fk } = req.body;
  const query = `INSERT INTO pacientes (tipo_documento, numero_documento, nombre, genero, estrato, barrio, localidad, escolaridad, id_practicante_fk, id_profesional_fk) VALUES (?, ?, ?, ?, ?, ?, ?, ?, ?, ?)`;

  conexion.query(query, [tipo_documento, numero_documento, nombre, genero, estrato, barrio, localidad, escolaridad, id_practicante_fk, id_profesional_fk], (error, results) => {
    if (error) {
      console.error('Error al insertar datos:', error);
      res.status(500).send('Error al insertar los datos');
    } else {
      res.status(201).send('Registro de paciente agregado exitosamente');
    }
  });
});

// Nueva ruta para agendar una cita
app.post('/agendar-cita', (req, res) => {
  const { fecha, hora, lugar, id_paciente_fk, id_profesional_fk, id_practicante_fk } = req.body;

  // Validaciones básicas
  if (!fecha || !hora || !lugar || !id_paciente_fk) {
    return res.status(400).json({ error: 'Todos los campos son obligatorios excepto el profesional o practicante' });
  }

  if (id_profesional_fk && id_practicante_fk) {
    return res.status(400).json({ error: 'Solo puedes seleccionar un profesional o un practicante, no ambos' });
  }

  const query = `
    INSERT INTO citas (fecha, hora, lugar, id_paciente_fk, id_profesional_fk, id_practicante_fk)
    VALUES (?, ?, ?, ?, ?, ?)
  `;
  const values = [fecha, hora, lugar, id_paciente_fk, id_profesional_fk || null, id_practicante_fk || null];

  conexion.query(query, values, (error, results) => {
    if (error) {
      console.error('Error al agendar la cita:', error);
      res.status(500).send('Error al agendar la cita');
    } else {
      res.status(201).send('Cita agendada exitosamente');
    }
  });
});

// Iniciar el servidor
const PORT = 5000;
app.listen(PORT, () => {
  console.log(`Servidor corriendo en http://localhost:${PORT}`);
});
