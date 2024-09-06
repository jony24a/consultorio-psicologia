import express from 'express';
import mysql from 'mysql';

// Inicialización de express
const app = express();
app.use(express.json());

// Configuración de la base de datos
const db = mysql.createConnection({
  host: 'localhost',
  user: 'root',
  password: 'tu_contraseña',
  database: 'tu_base_de_datos'
});

db.connect((err) => {
  if (err) {
    throw err;
  }
  console.log('MySQL Conectado');
});

// Ruta para agendar una nueva cita
app.post('/agendar-cita', (req, res) => {
  const { fecha, hora, lugar, idPaciente, idProfesional, idPracticante } = req.body;

  if (!fecha || !hora || !lugar || !idPaciente) {
    return res.status(400).json({ error: 'Todos los campos son obligatorios' });
  }

  if (idProfesional && idPracticante) {
    return res.status(400).json({ error: 'Solo puedes seleccionar un profesional o un practicante' });
  }

  const query = `
    INSERT INTO citas (fecha, hora, lugar, id_paciente_fk, id_profesional_fk, id_practicante_fk)
    VALUES (?, ?, ?, ?, ?, ?)
  `;
  const values = [fecha, hora, lugar, idPaciente, idProfesional || null, idPracticante || null];

  db.query(query, values, (err, result) => {
    if (err) {
      return res.status(500).json({ error: 'Error al agendar la cita' });
    }
    res.status(201).json({ message: 'Cita agendada con éxito' });
  });
});

// Iniciar el servidor
const PORT = 5001; // Cambia a un puerto que esté libre
app.listen(PORT, () => {
  console.log(`Servidor corriendo en el puerto ${PORT}`);
});

