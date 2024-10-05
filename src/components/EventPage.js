import React, { Suspense } from 'react'; // All imports must be at the top
import './EventPage.css'; // Import your CSS file at the top
import { events } from '../data/event'; // Import data at the top

// Lazy-load components
const ComingSoonSection = React.lazy(() => import('./ComingSoonSection'));
const EventCard = React.lazy(() => import('./EventCard'));

const EventPage = () => {
  return (
    <div className="event-page">
      {/* Suspense component to handle loading state for lazy-loaded components */}
      <Suspense fallback={<div>Loading Coming Soon Section...</div>}>
        <ComingSoonSection />
      </Suspense>

      <div className="title-container">
        <h1 className="page-title">
          <span className="past-text">Past</span>
          <span className="events-text">Events</span>
        </h1>
      </div>

      <div className="event-list">
        {events.map((event, index) => (
          <Suspense key={index} fallback={<div>Loading Event...</div>}>
            <EventCard event={event} />
          </Suspense>
        ))}
      </div>
    </div>
  );
};

export default EventPage;
