import React, { useState } from 'react';
import axios from 'axios';

function RegistroPaciente() {
  // Estado para los valores del formulario
  const [formData, setFormData] = useState({
    tipo_documento: '',
    numero_documento: '',
    nombre: '',
    genero: '',
    estrato: '',
    barrio: '',
    localidad: '',
    escolaridad: '',
    seleccion: 'practicante', // Valor inicial para la selección entre practicante y profesional
    id_practicante_fk: '',
    id_profesional_fk: ''
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value,
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    
    // Validar que solo uno de los campos (practicante o profesional) esté lleno
    if ((formData.seleccion === 'practicante' && !formData.id_practicante_fk) || 
        (formData.seleccion === 'profesional' && !formData.id_profesional_fk)) {
      alert('Por favor, complete el ID seleccionado antes de enviar.');
      return;
    }
    
    try {
      const dataToSend = {
        ...formData,
        id_practicante_fk: formData.seleccion === 'practicante' ? formData.id_practicante_fk : null,
        id_profesional_fk: formData.seleccion === 'profesional' ? formData.id_profesional_fk : null,
      };
      
      const response = await axios.post('http://localhost:5000/pacientes', dataToSend);
      console.log('Respuesta del servidor:', response.data);
      
      // Reiniciar el formulario después de enviar
      setFormData({
        tipo_documento: '',
        numero_documento: '',
        nombre: '',
        genero: '',
        estrato: '',
        barrio: '',
        localidad: '',
        escolaridad: '',
        seleccion: 'practicante',
        id_practicante_fk: '',
        id_profesional_fk: ''
      });
      
      alert('¡Registro exitoso!');
    } catch (error) {
      console.error('Error al registrar los datos:', error);
      alert('Hubo un error al registrar los datos.');
    }
  };

  return (
    <form onSubmit={handleSubmit} style={{ maxWidth: '400px', margin: '0 auto' }}>
      <h2>Registro de Paciente</h2>
      
      {/* Campos del formulario */}
      <div style={{ marginBottom: '10px' }}>
        <label htmlFor="tipo_documento">Tipo de Documento:</label>
        <select
          id="tipo_documento"
          name="tipo_documento"
          value={formData.tipo_documento}
          onChange={handleChange}
          required
          style={{ width: '100%', padding: '8px', marginTop: '5px' }}
        >
          <option value="">Seleccione...</option>
          <option value="CC">Cédula de Ciudadanía (CC)</option>
          <option value="TI">Tarjeta de Identidad (TI)</option>
          <option value="CE">Cédula de Extranjería (CE)</option>
        </select>
      </div>

      
      <div style={{ marginBottom: '10px' }}>
        <label htmlFor="numero_documento">Número de Documento:</label>
        <input
          type="number"
          id="numero_documento"
          name="numero_documento"
          value={formData.numero_documento}
          onChange={handleChange}
          required
          style={{ width: '100%', padding: '8px', marginTop: '5px' }}
        />
      </div>
      
      <div style={{ marginBottom: '10px' }}>
        <label htmlFor="nombre">Nombre:</label>
        <input
          type="text"
          id="nombre"
          name="nombre"
          value={formData.nombre}
          onChange={handleChange}
          required
          style={{ width: '100%', padding: '8px', marginTop: '5px' }}
        />
      </div>
      
      <div style={{ marginBottom: '10px' }}>
        <label htmlFor="genero">Género:</label>
        <select
          id="genero"
          name="genero"
          value={formData.genero}
          onChange={handleChange}
          required
          style={{ width: '100%', padding: '8px', marginTop: '5px' }}
        >
          <option value="">Seleccione...</option>
          <option value="Masculino">Masculino</option>
          <option value="Femenino">Femenino</option>
          <option value="Otro">Otro</option>
        </select>
      </div>
      
      <div style={{ marginBottom: '10px' }}>
        <label htmlFor="estrato">Estrato:</label>
        <input
          type="number"
          id="estrato"
          name="estrato"
          value={formData.estrato}
          onChange={handleChange}
          required
          style={{ width: '100%', padding: '8px', marginTop: '5px' }}
        />
      </div>
      
      <div style={{ marginBottom: '10px' }}>
        <label htmlFor="barrio">Barrio:</label>
        <input
          type="text"
          id="barrio"
          name="barrio"
          value={formData.barrio}
          onChange={handleChange}
          required
          style={{ width: '100%', padding: '8px', marginTop: '5px' }}
        />
      </div>
      
      <div style={{ marginBottom: '10px' }}>
        <label htmlFor="localidad">Localidad:</label>
        <input
          type="text"
          id="localidad"
          name="localidad"
          value={formData.localidad}
          onChange={handleChange}
          required
          style={{ width: '100%', padding: '8px', marginTop: '5px' }}
        />
      </div>
      
      <div style={{ marginBottom: '10px' }}>
        <label htmlFor="escolaridad">Escolaridad:</label>
        <input
          type="text"
          id="escolaridad"
          name="escolaridad"
          value={formData.escolaridad}
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
          <option value="practicante">Practicante</option>
          <option value="profesional">Profesional</option>
        </select>
      </div>
      
      {formData.seleccion === 'practicante' && (
        <div style={{ marginBottom: '10px' }}>
          <label htmlFor="id_practicante_fk">ID Practicante:</label>
          <input
            type="number"
            id="id_practicante_fk"
            name="id_practicante_fk"
            value={formData.id_practicante_fk}
            onChange={handleChange}
            required={formData.seleccion === 'practicante'}
            style={{ width: '100%', padding: '8px', marginTop: '5px' }}
          />
        </div>
      )}
      
      {formData.seleccion === 'profesional' && (
        <div style={{ marginBottom: '10px' }}>
          <label htmlFor="id_profesional_fk">ID Profesional:</label>
          <input
            type="number"
            id="id_profesional_fk"
            name="id_profesional_fk"
            value={formData.id_profesional_fk}
            onChange={handleChange}
            required={formData.seleccion === 'profesional'}
            style={{ width: '100%', padding: '8px', marginTop: '5px' }}
          />
        </div>
      )}
      
      <button type="submit" style={{ padding: '10px 20px', backgroundColor: '#4CAF50', color: '#fff', border: 'none', cursor: 'pointer' }}>
        Registrarse
      </button>
    </form>
  );
}

export default RegistroPaciente;
