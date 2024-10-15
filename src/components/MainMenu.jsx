import React from 'react';
import './MainMenu.css'; // Asegúrate de tener este archivo para los estilos

function MainMenu({ onSectionChange }) {
  return (
    <div className="p-6 bg-gray-100 rounded-lg">
      <h1 className="text-2xl font-bold mb-4">Menú Principal</h1>
      <button 
        onClick={() => onSectionChange('registros')}
        className="bg-blue-500 text-white px-4 py-2 rounded mb-4"
      >
        Ir a Registro
      </button>
      <button 
        onClick={() => onSectionChange('calendario')}
        className="bg-green-500 text-white px-4 py-2 rounded"
      >
        Ver Calendario
      </button>
    </div>
  );
}

export default MainMenu;
