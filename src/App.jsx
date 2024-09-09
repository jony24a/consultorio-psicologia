import React, { useState } from 'react';
import MainMenu from './components/MainMenu';
import RegisterSection from './connection/Registros/RegisterSection';
import AgendarCitas from './components/AgendarCitas';

function App() {
  const [activeSection, setActiveSection] = useState('menu');

  const renderSection = () => {
    console.log(activeSection); // Agregar para verificar el valor
    switch (activeSection) {
      case 'menu':
        return <MainMenu onSectionChange={setActiveSection} />;
      case 'registros':
        return <RegisterSection />;
      case 'agendarCitas':
        return <AgendarCitas />;
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