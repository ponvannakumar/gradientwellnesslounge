import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { motion, AnimatePresence } from 'framer-motion';
import Navigation from './components/Navigation';
import Footer from './components/Footer';
import Home from './pages/Home';
import About from './pages/About';
import Services from './pages/Services';
import FitnessAssessment from './pages/services/FitnessAssessment';
import PersonalTraining from './pages/services/PersonalTraining';
import Physiotherapy from './pages/services/Physiotherapy';
import Nutrition from './pages/services/Nutrition';
import StressManagement from './pages/services/StressManagement';
import Menu from './pages/Menu';
import Testimonials from './pages/Testimonials';
import FAQ from './pages/FAQ';
import Contact from './pages/Contact';
import './App.css';

function App() {
  return (
    <Router>
      <div className="App">
        <Navigation />
        <AnimatePresence mode="wait">
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/about" element={<About />} />
            <Route path="/services" element={<Services />} />
            <Route path="/services/fitness-assessment" element={<FitnessAssessment />} />
            <Route path="/services/personal-training" element={<PersonalTraining />} />
            <Route path="/services/physiotherapy" element={<Physiotherapy />} />
            <Route path="/services/nutrition" element={<Nutrition />} />
            <Route path="/services/stress-management" element={<StressManagement />} />
            <Route path="/menu" element={<Menu />} />
            <Route path="/testimonials" element={<Testimonials />} />
            <Route path="/faq" element={<FAQ />} />
            <Route path="/contact" element={<Contact />} />
          </Routes>
        </AnimatePresence>
        <Footer />
      </div>
    </Router>
  );
}

export default App;