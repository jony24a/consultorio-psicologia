import React, { useState } from 'react';
import RegisterForm from './RegistroProfesional';
import PracticanteForm from './RegistroPracticante';
import PacienteForm from './registroPaciente';
import './RegisterSection.css'; // Importamos el archivo CSS

function RegisterSection() {
  const [activeForm, setActiveForm] = useState('profesionales');

  const renderForm = () => {
    switch (activeForm) {
      case 'profesionales':
        return <RegisterForm />;
      case 'practicantes':
        return <PracticanteForm />;
      case 'pacientes':
        return <PacienteForm />;
      default:
        return <RegisterForm />;
    }
  };

  return (
    <div className="register-container">
      <header className="register-header">
        <nav className="register-nav">
          <button className="nav-button" onClick={() => setActiveForm('profesionales')}>
            Profesionales
          </button>
          <button className="nav-button" onClick={() => setActiveForm('practicantes')}>
            Practicantes
          </button>
          <button className="nav-button" onClick={() => setActiveForm('pacientes')}>
            Pacientes
          </button>
        </nav>
        <h1>Registro</h1>
        <p>Por favor, ingresa los datos para registrarlo en la base de datos.</p>
      </header>

      <main className="register-main">
        {renderForm()}
      </main>
    </div>
  );
}

export default RegisterSection;
