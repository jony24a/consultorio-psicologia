import React, { useState } from 'react';

const AgendarCita = () => {
  const [fecha, setFecha] = useState('');
  const [hora, setHora] = useState('');
  const [lugar, setLugar] = useState('');
  const [idPaciente, setIdPaciente] = useState('');
  const [idProfesional, setIdProfesional] = useState('');
  const [idPracticante, setIdPracticante] = useState('');

  const handleSubmit = async (e) => {
    e.preventDefault();

    if (!fecha || !hora || !lugar || !idPaciente) {
      alert('Todos los campos son obligatorios');
      return;
    }

    if (idProfesional && idPracticante) {
      alert('Solo puedes seleccionar un profesional o un practicante');
      return;
    }

    const citaData = {
      fecha,
      hora,
      lugar,
      idPaciente,
      idProfesional,
      idPracticante
    };

    try {
      const response = await fetch('http://localhost:5001/agendar-cita', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(citaData),
      });

      if (response.ok) {
        alert('Cita agendada con éxito');
      } else {
        alert('Error al agendar la cita');
      }
    } catch (error) {
      console.error('Error:', error);
      alert('Error en la solicitud');
    }
  };

  return (
    <form onSubmit={handleSubmit}>
      <div>
        <label>Fecha:</label>
        <input 
          type="date" 
          value={fecha} 
          onChange={(e) => setFecha(e.target.value)} 
          required 
        />
      </div>

      <div>
        <label>Hora:</label>
        <input 
          type="time" 
          value={hora} 
          onChange={(e) => setHora(e.target.value)} 
          required 
        />
      </div>

      <div>
        <label>Lugar:</label>
        <select value={lugar} onChange={(e) => setLugar(e.target.value)} required>
          <option value="">Selecciona--</option>
          <option value="IPS">IPS</option>
          <option value="Sede Consultorios">Sede Consultorios</option>
        </select>
      </div>

      <div>
        <label>Cédula del Paciente:</label>
        <input 
          type="text" 
          value={idPaciente} 
          onChange={(e) => setIdPaciente(e.target.value)} 
          required 
        />
      </div>

      <div>
        <label>Cédula del Profesional:</label>
        <input 
          type="text" 
          value={idProfesional} 
          onChange={(e) => setIdProfesional(e.target.value)} 
          disabled={!!idPracticante} 
        />
      </div>

      <div>
        <label>Cédula del Practicante:</label>
        <input 
          type="text" 
          value={idPracticante} 
          onChange={(e) => setIdPracticante(e.target.value)} 
          disabled={!!idProfesional} 
        />
      </div>

      <button type="submit">Agendar Cita</button>
    </form>
  );
};

export default AgendarCita;
