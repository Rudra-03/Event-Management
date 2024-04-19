import React from 'react';
import './App.css';

// Components for individual events
const ClassicalNight = () => {
  return (
    <div className="event-card">
      <h3>The Classical Night</h3>
      <p>Experience the finest of classical music to transcend into...</p>
      <ul className="schedule">
        <li>5 PM onwards: Pre-Music Gala</li>
        <li>7 PM - 8:30 PM: The Classical Night - Part 1</li>
        <li>8:30 PM - 10 PM: The Classical Night - Part 2</li>
      </ul>
      <button className="ticket-btn">Get Tickets</button>
    </div>
  );
};

const PoemsNight = () => {
  // Render the Poems Night event details
};

const HolidayNight = () => {
  // Render the Holiday Night event details
};

const MusicalNight = () => {
  // Render the Musical Night event details
};

// Main component
const App = () => {
  return (
    <div className="app">
      <header className="header">
        <nav>
          {/* Navigation menu */}
        </nav>
      </header>
      <main className="main">
        <section className="pre-events">
          <h2>Pre-Events</h2>
          {/* Render pre-event information */}
        </section>
        <section className="event-list">
          <ClassicalNight />
          <PoemsNight />
          <HolidayNight />
          <MusicalNight />
        </section>
      </main>
      <footer className="footer">
        {/* Footer content */}
      </footer>
    </div>
  );
};

export default App;