import React, { useState, useEffect } from 'react';

function AgendarCita({ pacientes, profesionales, practicantes, onSubmit }) {
  const [fecha, setFecha] = useState('');
  const [hora, setHora] = useState('');
  const [lugar, setLugar] = useState('');
  const [idPaciente, setIdPaciente] = useState('');
  const [idProfesional, setIdProfesional] = useState('');
  const [idPracticante, setIdPracticante] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();

    if (!idPaciente) {
      alert("Debes seleccionar un paciente");
      return;
    }

    if (!fecha || !hora || !lugar) {
      alert("Debes completar todos los campos");
      return;
    }

    if (idProfesional && idPracticante) {
      alert("Solo puedes seleccionar un profesional o un practicante, no ambos");
      return;
    }

    onSubmit({
      fecha,
      hora,
      lugar,
      idPaciente,
      idProfesional: idProfesional || null,
      idPracticante: idPracticante || null
    });
  };

  return (
    <form onSubmit={handleSubmit}>
      <div>
        <label>Fecha:</label>
        <input type="date" value={fecha} onChange={(e) => setFecha(e.target.value)} required />
      </div>

      <div>
        <label>Hora:</label>
        <input type="time" value={hora} onChange={(e) => setHora(e.target.value)} required />
      </div>

      <div>
        <label>Lugar:</label>
        <input type="text" value={lugar} onChange={(e) => setLugar(e.target.value)} required />
      </div>

      <div>
        <label>Paciente:</label>
        <select value={idPaciente} onChange={(e) => setIdPaciente(e.target.value)} required>
          <option value="">Seleccione un paciente</option>
          {pacientes.map((paciente) => (
            <option key={paciente.id_paciente} value={paciente.id_paciente}>
              {paciente.nombre}
            </option>
          ))}
        </select>
      </div>

      <div>
        <label>Profesional:</label>
        <select value={idProfesional} onChange={(e) => setIdProfesional(e.target.value)}>
          <option value="">Seleccione un profesional (opcional)</option>
          {profesionales.map((profesional) => (
            <option key={profesional.id_profesional} value={profesional.id_profesional}>
              {profesional.nombre}
            </option>
          ))}
        </select>
      </div>

      <div>
        <label>Practicante:</label>
        <select value={idPracticante} onChange={(e) => setIdPracticante(e.target.value)}>
          <option value="">Seleccione un practicante (opcional)</option>
          {practicantes.map((practicante) => (
            <option key={practicante.id_practicante} value={practicante.id_practicante}>
              {practicante.nombre}
            </option>
          ))}
        </select>
      </div>

      <button type="submit">Agendar Cita</button>
    </form>
  );
}

export default AgendarCita;
