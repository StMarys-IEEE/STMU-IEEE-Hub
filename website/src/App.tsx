import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { ThemeProvider } from './contexts/ThemeContext';
import Navbar from './components/Navbar';
import ScrollToTop from './components/ScrollToTop';
import Footer from './components/Footer';
import Home from './pages/Home';
import Events from './pages/Events';
import Workshops from './pages/Workshops';
import Projects from './pages/Projects';
import Members from './pages/Members';
import About from './pages/About';
import Contact from './pages/Contact';

function App() {
  return (
    <ThemeProvider>
      {/*
        basename must match Vite's `base`. In production that is
        "/STMU-IEEE-Hub/"; in `npm run dev` it is "/".
      */}
      <Router basename={import.meta.env.BASE_URL}>
        <ScrollToTop />
        <div className="min-h-screen flex flex-col">
          <Navbar />
          <main className="flex-grow">
            <Routes>
              <Route path="/" element={<Home />} />
              <Route path="/events" element={<Events />} />
              <Route path="/workshops" element={<Workshops />} />
              <Route path="/projects" element={<Projects />} />
              <Route path="/members" element={<Members />} />
              <Route path="/about" element={<About />} />
              <Route path="/contact" element={<Contact />} />
              <Route path="*" element={<Home />} />
            </Routes>
          </main>
          <Footer />
        </div>
      </Router>
    </ThemeProvider>
  );
}

export default App;
