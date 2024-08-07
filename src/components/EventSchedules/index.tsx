import React from 'react';

const EventSchedule = () => {
  const schedule = [
    { time: '9:00 AM - 9:30 AM', title: 'Doors open' },
    { time: '9:30 AM - 10:45 AM', title: 'Speaker Event: Artisan Shops' },
    { time: '11:00 AM - 11:30 AM', title: 'Giveaway Raffle #1' },
    { time: '1:00 PM - 1:30 PM', title: 'Giveaway Raffle #2' },
    { time: '2:00 PM - 2:30 PM', title: 'Closing Statements' },
  ];

  return (
    <div>
      <h2>Event Schedules</h2>
      <ul>
        {schedule.map((event, index) => (
          <li key={index}>
            <div>
              <strong>{event.title}</strong> - <span>{event.time}</span>
            </div>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default EventSchedule;
