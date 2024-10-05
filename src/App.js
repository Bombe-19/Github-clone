// App.js

import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import EventPage from './components/EventPage'; // Keep this import
import Header from './components/Header'; // Keep this import
import Footer from './components/footer'; // Keep this import

function App() {
    return (
        <Router>
            <Header />
            <Routes>
                {/* Set EventPage as the default route */}
                <Route path="/" element={<EventPage />} /> {/* Default route */}
                {/* Optionally, you can keep the /events route */}
                <Route path="/events" element={<EventPage />} /> 
            </Routes>
            <Footer />
        </Router>
    );
}

export default App;
