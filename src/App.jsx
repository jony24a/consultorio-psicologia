import React, { useState } from 'react';
import MainMenu from './components/MainMenu';
import RegisterSection from './connection/Registros/RegisterSection';
import Calendar from './components/calendario'; // Este es tu componente personalizado

function App() {
  const [activeSection, setActiveSection] = useState('menu'); // Estado para cambiar entre secciones

  // Función para renderizar la sección correspondiente
  const renderSection = () => {
    switch (activeSection) {
      case 'menu':
        return <MainMenu onSectionChange={setActiveSection} />;
      case 'registros':
        return <RegisterSection onSectionChange={setActiveSection} />;
      case 'calendario':
        return <Calendar onSectionChange={setActiveSection} />;
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
