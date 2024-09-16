const handleAgendarCita = async (citaData) => {
  try {
    const response = await fetch('http://localhost:5000/agendar-cita', {  // Asegúrate que el puerto y la ruta sean correctos
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(citaData),
    });

    const result = await response.json();
    if (response.ok) {
      alert('Cita agendada con éxito');
    } else {
      alert(result.error);
    }
  } catch (error) {
    console.error('Error:', error);
    alert('Hubo un error al agendar la cita');
  }
};

// En el componente AgendarCita
<AgendarCita
  pacientes={pacientes}
  profesionales={profesionales}
  practicantes={practicantes}
  onSubmit={handleAgendarCita}
/>
