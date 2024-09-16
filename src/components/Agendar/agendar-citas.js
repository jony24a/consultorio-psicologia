const express = require('express');
const app = express();
const port = 5000;

// Middleware para parsear JSON
app.use(express.json());

// Ruta para agendar una cita
app.post('/agendar-cita', (req, res) => {
  const { fecha, hora, lugar, cedulaPaciente, cedulaPracticante, cedulaProfesional } = req.body;

  // Verificación de campos obligatorios
  if (!fecha || !hora || !lugar || !cedulaPaciente) {
    return res.status(400).json({ error: 'Todos los campos son obligatorios' });
  }

  // Verifica si se selecciona solo uno entre profesional y practicante
  if (cedulaPracticante && cedulaProfesional) {
    return res.status(400).json({ error: 'Solo puedes seleccionar un profesional o un practicante' });
  }

  // Ejemplo de cómo podrías validar que se ha proporcionado al menos una cédula válida
  if (!cedulaPracticante && !cedulaProfesional) {
    return res.status(400).json({ error: 'Debes ingresar la cédula del practicante o del profesional' });
  }

  // Aquí deberías añadir la lógica para guardar la cita en la base de datos
  // Por ejemplo:
  // const nuevaCita = new Cita({ fecha, hora, lugar, cedulaPaciente, cedulaPracticante, cedulaProfesional });
  // nuevaCita.save((err) => {
  //   if (err) {
  //     return res.status(500).json({ error: 'Error al guardar la cita' });
  //   }
  //   res.status(201).json({ message: 'Cita agendada con éxito' });
  // });

  // Respuesta de éxito para la demostración
  res.status(201).json({ message: 'Cita agendada con éxito' });
});

app.listen(port, () => {
  console.log(`Servidor escuchando en http://localhost:${port}`);
});
