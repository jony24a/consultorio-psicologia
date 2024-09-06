import React, { useState } from 'react';
import axios from 'axios';

function RegistroPracticante() {
  // Estado para los valores del formulario
  const [formData, setFormData] = useState({
    tipo_documento: '',
    numero_documento: '',
    nombre: '',
    genero: '',
    estrato: '',
    barrio: '',
    localidad: '',
    periodo: '',
    jornada: '',
    año_matricula: ''
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
    try {
      const response = await axios.post('http://localhost:5000/practicantes', formData);
      console.log('Respuesta del servidor:', response.data);
      setFormData({
        tipo_documento: '',
        numero_documento: '',
        nombre: '',
        genero: '',
        estrato: '',
        barrio: '',
        localidad: '',
        periodo: '',
        jornada: '',
        año_matricula: ''
      });
      alert('¡Registro exitoso!');
    } catch (error) {
      console.error('Error al registrar los datos:', error);
      alert('Hubo un error al registrar los datos.');
    }
  };

  return (
    <form onSubmit={handleSubmit} style={{ maxWidth: '400px', margin: '0 auto' }}>
      <h2>Registro de Practicante</h2>
      {/* Campos del formulario */}
      <div style={{ marginBottom: '20px' }}>
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
        <label htmlFor="periodo">Periodo:</label>
        <input
          type="number"
          id="periodo"
          name="periodo"
          value={formData.periodo}
          onChange={handleChange}
          required
          style={{ width: '100%', padding: '8px', marginTop: '5px' }}
        />
      </div>
      <div style={{ marginBottom: '10px' }}>
        <label htmlFor="jornada">Jornada:</label>
        <input
          type="text"
          id="jornada"
          name="jornada"
          value={formData.jornada}
          onChange={handleChange}
          required
          style={{ width: '100%', padding: '8px', marginTop: '5px' }}
        />
      </div>
      <div style={{ marginBottom: '10px' }}>
        <label htmlFor="año_matricula">Año de Matrícula:</label>
        <input
          type="number"
          id="año_matricula"
          name="año_matricula"
          value={formData.año_matricula}
          onChange={handleChange}
          required
          style={{ width: '100%', padding: '8px', marginTop: '5px' }}
        />
      </div>
      <button type="submit" style={{ padding: '10px 20px', backgroundColor: '#4CAF50', color: '#fff', border: 'none', cursor: 'pointer' }}>
        Registrarse
      </button>
    </form>
  );
}

export default RegistroPracticante;
