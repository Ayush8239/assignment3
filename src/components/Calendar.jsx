import React, { useContext, useState } from 'react';
import { Calendar, momentLocalizer } from 'react-big-calendar';
import 'react-big-calendar/lib/css/react-big-calendar.css';
import { useStateContext } from '../contexts/ContextProvider';
import { Box } from '@chakra-ui/react';
import moment from 'moment';

const localizer = momentLocalizer(moment);

const MyCalendar = () => {
  const { events, setEvents } = useStateContext();
  const [newEvent, setNewEvent] = useState({ title: '', start: '', end: '' });

  const handleSelectSlot = ({ start, end }) => {
    const title = window.prompt('New Event name');
    if (title) {
      const newEvent = {
        title,
        start,
        end,
      };
      setEvents([...events, newEvent]);
    }
  };

  return (
    <Box>
      <Calendar
        localizer={localizer}
        events={events}
        startAccessor="start"
        endAccessor="end"
        style={{ height: 500 }}
        selectable
        onSelectSlot={handleSelectSlot}
      />
    </Box>
  );
};

export default MyCalendar;
