import React, { useState, useEffect } from 'react';
import Calendar from 'react-calendar';
import 'react-calendar/dist/Calendar.css';

function Calendario() {
  const [value, setValue] = useState(new Date());
  const [events, setEvents] = useState([]);

  // Obtener eventos desde el backend
  useEffect(() => {
    async function fetchEvents() {
      try {
        const response = await fetch('http://localhost:5000/obtener-eventos');
        const data = await response.json();
        setEvents(data);
      } catch (error) {
        console.error('Error al obtener los eventos:', error);
      }
    }

    fetchEvents();
  }, []);

  return (
    <div className="container mx-auto p-4">
      <h1 className="text-3xl font-bold mb-6 text-center">Calendario de Citas</h1>
      <Calendar 
        value={value}
        onChange={setValue}
        tileContent={({ date, view }) =>
          view === 'month' &&
          events.map(event =>
            new Date(event.fecha).toDateString() === date.toDateString() ? (
              <p key={event.id} className="text-sm bg-blue-500 text-white rounded p-1">
                {event.titulo}
              </p>
            ) : null
          )
        }
      />
    </div>
  );
}

export default Calendario;
