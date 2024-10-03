// src/components/ui/Calendar.jsx
import React, { useState } from 'react';
import Calendar from 'react-calendar';
import 'react-calendar/dist/Calendar.css';

export function CalendarComponent({ onDateChange }) {
  const [value, setValue] = useState(new Date());

  const handleChange = (date) => {
    setValue(date);
    onDateChange(date); // Notifica al componente padre cuando cambia la fecha
  };

  return (
    <div>
      <Calendar
        value={value}
        onChange={handleChange}
      />
    </div>
  );
}
