import React from 'react';
import './EventCard.css'; // Ensure you import your CSS styles

const EventCard = ({ event }) => {
  return (
    <div className="event-card-container">
      <div className="event-card">
        <img src={event.image} alt={event.title} className="event-image" />
      </div>
      <div className="event-content">
        <h2 className="event-title">{event.title}</h2>
        <button className="get-certificate-btn">Get Certificate</button>
      </div>
    </div>
  );
};

export default EventCard;
