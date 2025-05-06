import React, { useState } from 'react';
import FullCalendar from '@fullcalendar/react';
import dayGridPlugin from '@fullcalendar/daygrid';
import timeGridPlugin from '@fullcalendar/timegrid';
import interactionPlugin from '@fullcalendar/interaction'; // Important !
import { VideoIcon, X } from 'lucide-react';

const Calendar = () => {
  const [events, setEvents] = useState<any[]>([]);
  const [showModal, setShowModal] = useState(false);
  const [selectedDate, setSelectedDate] = useState<string>('');
  const [newEventTitle, setNewEventTitle] = useState('');
  const [meetLink, setMeetLink] = useState('');

  const handleDateClick = (arg: any) => {
    setSelectedDate(arg.dateStr);
    setShowModal(true);
  };

  const handleAddEvent = () => {
    if (!newEventTitle) return;

    setEvents([
      ...events,
      {
        title: newEventTitle,
        start: selectedDate,
        meetLink: meetLink,
        backgroundColor: '#10b981',
        borderColor: '#059669'
      }
    ]);

    // Reset
    setNewEventTitle('');
    setMeetLink('');
    setShowModal(false);
  };

  const renderEventContent = (eventInfo: any) => (
    <div className="flex items-start gap-2 p-1 text-sm text-white">
      <VideoIcon size={14} />
      <div>
        <div className="font-semibold">{eventInfo.event.title}</div>
        {eventInfo.event.extendedProps.meetLink && (
          <a
            href={eventInfo.event.extendedProps.meetLink}
            target="_blank"
            rel="noopener noreferrer"
            className="underline text-xs"
            onClick={(e) => e.stopPropagation()}
          >
            Rejoindre Meet
          </a>
        )}
      </div>
    </div>
  );

  return (
    <div className="bg-white rounded-3xl shadow-lg p-6">
      <h2 className="text-2xl font-bold text-emerald-800 mb-6">
        Mon Calendrier de Classe
      </h2>

      <FullCalendar
        plugins={[dayGridPlugin, timeGridPlugin, interactionPlugin]}
        initialView="timeGridWeek"
        locale="fr"
        headerToolbar={{
          left: 'prev,next today',
          center: 'title',
          right: 'timeGridWeek,timeGridDay',
        }}
        events={events}
        eventContent={renderEventContent}
        dateClick={handleDateClick}
        height="auto"
        allDaySlot={false}
        slotMinTime="08:00:00"
        slotMaxTime="18:00:00"
      />

      {/* Modal pour ajouter un événement */}
      {showModal && (
        <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50">
          <div className="bg-white rounded-xl p-6 shadow-xl w-full max-w-md relative">
            <button
              className="absolute top-2 right-2 text-gray-500 hover:text-red-500"
              onClick={() => setShowModal(false)}
            >
              <X size={20} />
            </button>
            <h3 className="text-xl font-semibold mb-4 text-emerald-700">Ajouter un événement</h3>
            <input
              type="text"
              placeholder="Titre de l’événement"
              value={newEventTitle}
              onChange={(e) => setNewEventTitle(e.target.value)}
              className="w-full border rounded-md px-3 py-2 mb-3 focus:outline-none focus:ring-2 focus:ring-emerald-400"
            />
            <input
              type="text"
              placeholder="Lien Google Meet (facultatif)"
              value={meetLink}
              onChange={(e) => setMeetLink(e.target.value)}
              className="w-full border rounded-md px-3 py-2 mb-4 focus:outline-none focus:ring-2 focus:ring-emerald-400"
            />
            <button
              onClick={handleAddEvent}
              className="bg-emerald-500 text-white px-4 py-2 rounded-md hover:bg-emerald-600 transition"
            >
              Ajouter
            </button>
          </div>
        </div>
      )}
    </div>
  );
};

export default Calendar;
