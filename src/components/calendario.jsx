import React, { useState, useEffect } from 'react';
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/Card"; // Ajusta las importaciones si es necesario
import { Calendar } from "@/components/ui/Calendar"; // Ajusta las importaciones si es necesario
import { Button } from "@/components/ui/Button"; // Ajusta las importaciones si es necesario
import { CalendarDays, Clock } from "lucide-react";

// Datos de eventos simulados - reemplaza con tu llamada API real
const mockEvents = [
  { id: 1, title: 'Appointment 1', date: '2024-10-05', time: '09:00' },
  { id: 2, title: 'Appointment 2', date: '2024-10-05', time: '14:00' },
  { id: 3, title: 'Appointment 3', date: '2024-10-07', time: '11:00' },
];

const AVAILABLE_TIMES = [
  '09:00', '10:00', '11:00', '12:00', '13:00', '14:00', '15:00', '16:00'
];

const TimeSlot = ({ time, isBooked, onSelect }) => (
  <Button 
    onClick={() => !isBooked && onSelect(time)}
    variant={isBooked ? "secondary" : "outline"}
    className="w-full justify-start"
    disabled={isBooked}
  >
    <Clock className="mr-2 h-4 w-4" />
    {time}
    {isBooked && <span className="ml-auto text-sm text-muted-foreground">Booked</span>}
  </Button>
);

const AvailableTimesList = ({ selectedDate, events, onTimeSelect }) => {
  const dateEvents = events.filter(event => 
    new Date(event.date).toDateString() === selectedDate?.toDateString()
  );

  return (
    <div className="space-y-2">
      {AVAILABLE_TIMES.map(time => {
        const isBooked = dateEvents.some(event => event.time === time);
        return (
          <TimeSlot 
            key={time} 
            time={time} 
            isBooked={isBooked}
            onSelect={onTimeSelect}
          />
        );
      })}
    </div>
  );
};

export default function AppointmentCalendar() {
  const [selectedDate, setSelectedDate] = useState(null);
  const [events, setEvents] = useState([]);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    // Llamada API simulada
    const fetchEvents = async () => {
      setIsLoading(true);
      try {
        // Reemplaza esto con tu llamada API real
        // const response = await fetch('http://localhost:5000/api/events');
        // const data = await response.json();
        setEvents(mockEvents);
      } catch (error) {
        console.error('Error fetching events:', error);
      } finally {
        setIsLoading(false);
      }
    };

    fetchEvents();
  }, []);

  const handleDateSelect = (date) => {
    setSelectedDate(date);
  };

  const handleTimeSelect = (time) => {
    console.log(`Selected time: ${time} for date: ${selectedDate?.toDateString()}`);
    // Aquí puedes manejar la creación de la cita
  };

  return (
    <div className="mx-auto max-w-7xl p-4">
      <h1 className="text-3xl font-bold mb-6">Appointment Calendar</h1>
      
      <div className="grid gap-6 md:grid-cols-2">
        <Card>
          <CardHeader>
            <CardTitle className="flex items-center">
              <CalendarDays className="mr-2" />
              Select a Date
            </CardTitle>
          </CardHeader>
          <CardContent>
            <Calendar
              mode="single"
              selected={selectedDate}
              onSelect={handleDateSelect}
              className="rounded-md border"
            />
          </CardContent>
        </Card>

        <Card>
          <CardHeader>
            <CardTitle className="flex items-center">
              <Clock className="mr-2" />
              {selectedDate ? 
                `Available Times for ${selectedDate.toLocaleDateString()}` : 
                'Select a date to view available times'}
            </CardTitle>
          </CardHeader>
          <CardContent>
            {isLoading ? (
              <p>Loading available times...</p>
            ) : selectedDate ? (
              <AvailableTimesList
                selectedDate={selectedDate}
                events={events}
                onTimeSelect={handleTimeSelect}
              />
            ) : (
              <p className="text-muted-foreground">
                Please select a date from the calendar to view available appointment times.
              </p>
            )}
          </CardContent>
        </Card>
      </div>
    </div>
  );
}
