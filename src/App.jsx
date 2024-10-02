import React, { useState } from 'react';
import MainMenu from './components/MainMenu';
import RegisterSection from './connection/Registros/RegisterSection';
import Calendario from './components/Calendario'; // Asegúrate de importar correctamente el Calendario

function App() {
  const [activeSection, setActiveSection] = useState('menu');

  const renderSection = () => {
    switch (activeSection) {
      case 'menu':
        return <MainMenu onSectionChange={setActiveSection} />;
      case 'registros':
        return <RegisterSection />;
      case 'calendario': // Aquí asegúrate de que 'calendario' esté como sección
        return <Calendario />; // Renderiza el componente del Calendario
      default:
        return <MainMenu onSectionChange={setActiveSection} />;
    }
  };

  return (
    <div className="App" style={{ padding: '20px', fontFamily: 'Arial, sans-serif' }}>
      {renderSection()}
    </div>
  );
}

export default App;
