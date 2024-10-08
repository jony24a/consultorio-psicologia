import React from 'react';
import { Calendar as BigCalendar, dayjsLocalizer } from 'react-big-calendar';
import dayjs from 'dayjs';
import "react-big-calendar/lib/css/react-big-calendar.css";

// Configura el localizador
const localizer = dayjsLocalizer(dayjs);

function Calendar() {
  // Define tus eventos
  const events = [
    {
      start: dayjs('2024-12-18T12:00:00').toDate(),
      end: dayjs('2024-12-18T13:00:00').toDate(),
      title: "Evento 1"
    }
  ];

  return (
    <div style={{
      height: '95vh',
      width: '70vw',
    }}>
      <BigCalendar
        localizer={localizer}
        events={events}
        startAccessor="start"
        endAccessor="end"
        style={{ height: '100%' }} // Ajusta el estilo si es necesario
      />
    </div>
  );
}

export default Calendar;

