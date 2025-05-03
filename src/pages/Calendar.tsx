import React from 'react';
import FullCalendar from '@fullcalendar/react';
import dayGridPlugin from '@fullcalendar/daygrid';
import timeGridPlugin from '@fullcalendar/timegrid';
import { VideoIcon } from 'lucide-react';

const Calendar = () => {
  const events = [
    {
      title: 'Cours de langue des signes',
      start: new Date(),
      end: new Date(new Date().setHours(new Date().getHours() + 2)),
      meetLink: 'https://meet.google.com/abc-defg-hij',
      backgroundColor: '#10b981',
      borderColor: '#059669'
    }
  ];

  const renderEventContent = (eventInfo: any) => {
    return (
      <div className="flex items-center gap-2 p-1">
        <VideoIcon size={16} className="text-white" />
        <div>
          <div className="font-medium">{eventInfo.event.title}</div>
          {eventInfo.event.extendedProps.meetLink && (
            <a
              href={eventInfo.event.extendedProps.meetLink}
              target="_blank"
              rel="noopener noreferrer"
              className="text-xs text-white underline"
              onClick={(e) => e.stopPropagation()}
            >
              Rejoindre Meet
            </a>
          )}
        </div>
      </div>
    );
  };

  return (
    <div className="bg-white rounded-3xl shadow-lg p-6">
      <h2 className="text-2xl font-bold text-emerald-800 mb-6">Mon Calendrier de Classe</h2>
      <FullCalendar
        plugins={[dayGridPlugin, timeGridPlugin]}
        initialView="timeGridWeek"
        locale="fr"
        headerToolbar={{
          left: 'prev,next today',
          center: 'title',
          right: 'timeGridWeek,timeGridDay'
        }}
        events={events}
        eventContent={renderEventContent}
        height="auto"
        allDaySlot={false}
        slotMinTime="08:00:00"
        slotMaxTime="18:00:00"
      />
    </div>
  );
};

export default Calendar;