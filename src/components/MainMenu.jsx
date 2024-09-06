import React from 'react';
import './MainMenu.css';

function MainMenu({ onSectionChange }) {
  return (
    <div className="menu-container">
      <h1>Bienvenido</h1>
      <p>Selecciona una opción</p>
      <div className="button-group">
        <button className="menu-button" onClick={() => onSectionChange('registros')}>
          Registros
        </button>
        <button className="menu-button" onClick={() => onSectionChange('agendarCitas')}>
          Agendar Citas
        </button>
      </div>
    </div>
  );
}

export default MainMenu;
