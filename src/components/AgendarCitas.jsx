import React, { useState } from 'react';
import hogarIcon from '../connection/Registros/css/hogar.png';  

function AgendarCitas() {
  const [formData, setFormData] = useState({
    fecha: '',
    hora: '',
    lugar: '',
    cedulaPaciente: '',
    seleccion: '', // 'practicante' o 'profesional'
    cedulaPracticante: '',
    cedulaProfesional: '',
  });

  const goToHome = () => {
    window.location.href = '/MainMenu'; // Cambia la ruta según sea necesario
  };

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prevFormData) => ({
      ...prevFormData,
      [name]: value,
    }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    const { fecha, hora, lugar, cedulaPaciente, seleccion, cedulaPracticante, cedulaProfesional } = formData;

    if (!fecha || !hora || !lugar || !cedulaPaciente) {
      alert('Todos los campos son obligatorios');
      return;
    }

    const cedulaSeleccionada = seleccion === 'practicante' ? cedulaPracticante : cedulaProfesional;

    if (!cedulaSeleccionada) {
      alert('Debes ingresar la cédula del practicante o del profesional');
      return;
    }

    const citaData = {
      fecha,
      hora,
      lugar,
      id_paciente_fk: cedulaPaciente,
      id_practicante_fk: seleccion === 'practicante' ? cedulaPracticante : null,
      id_profesional_fk: seleccion === 'profesional' ? cedulaProfesional : null,
    };

    try {
      const response = await fetch('http://localhost:5000/agendar-cita', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(citaData),
      });

      if (response.ok) {
        alert('Cita agendada con éxito');
      } else {
        const data = await response.json();
        alert(data.error);
      }
    } catch (error) {
      console.error('Error al agendar la cita:', error);
      alert('Error al agendar la cita');
    }
  };

  return (
    <div>
      <button className="nav-button" onClick={goToHome}>
        <img 
          src={hogarIcon} 
          alt="Inicio" 
          style={{ width: '20px', height: '20px', marginRight: '5px' }} 
        />
      </button>
      <h1>Agendar Cita</h1>
      <form onSubmit={handleSubmit}>
        <div style={{ marginBottom: '10px' }}>
          <label>Fecha:</label>
          <input 
            type="date" 
            name="fecha"
            value={formData.fecha} 
            onChange={handleChange} 
            required 
            style={{ width: '100%', padding: '8px', marginTop: '5px' }} 
          />
        </div>

        <div style={{ marginBottom: '10px' }}>
          <label>Hora:</label>
          <input 
            type="time" 
            name="hora"
            value={formData.hora} 
            onChange={handleChange} 
            required 
            style={{ width: '100%', padding: '8px', marginTop: '5px' }} 
          />
        </div>

        <div style={{ marginBottom: '10px' }}>
          <label>Lugar:</label>
          <select
            name="lugar"
            value={formData.lugar}
            onChange={handleChange}
            required
            style={{ width: '100%', padding: '8px', marginTop: '5px' }}
          >
            <option value="">Selecciona--</option>
            <option value="IPS">IPS</option>
            <option value="Sede Consultorios">Sede Consultorios</option>
          </select>
        </div>

        <div style={{ marginBottom: '10px' }}>
          <label>Cédula del Paciente:</label>
          <input 
            type="text" 
            name="cedulaPaciente"
            value={formData.cedulaPaciente} 
            onChange={handleChange} 
            required 
            style={{ width: '100%', padding: '8px', marginTop: '5px' }} 
          />
        </div>

        <div style={{ marginBottom: '10px' }}>
          <label htmlFor="seleccion">Seleccione quién estará a cargo:</label>
          <select
            id="seleccion"
            name="seleccion"
            value={formData.seleccion}
            onChange={handleChange}
            required
            style={{ width: '100%', padding: '8px', marginTop: '5px' }}
          >
            <option value="">Selecciona--</option>
            <option value="practicante">Practicante</option>
            <option value="profesional">Profesional</option>
          </select>
        </div>
        
        {formData.seleccion === 'practicante' && (
          <div style={{ marginBottom: '10px' }}>
            <label htmlFor="cedulaPracticante">Cédula del Practicante:</label>
            <input
              type="text"
              id="cedulaPracticante"
              name="cedulaPracticante"
              value={formData.cedulaPracticante}
              onChange={handleChange}
              required={formData.seleccion === 'practicante'}
              style={{ width: '100%', padding: '8px', marginTop: '5px' }}
            />
          </div>
        )}
        
        {formData.seleccion === 'profesional' && (
          <div style={{ marginBottom: '10px' }}>
            <label htmlFor="cedulaProfesional">Cédula del Profesional:</label>
            <input
              type="text"
              id="cedulaProfesional"
              name="cedulaProfesional"
              value={formData.cedulaProfesional}
              onChange={handleChange}
              required={formData.seleccion === 'profesional'}
              style={{ width: '100%', padding: '8px', marginTop: '5px' }}
            />
          </div>
        )}

        <button type="submit">Agendar Cita</button>
      </form>
    </div>
  );
}

export default AgendarCitas;
