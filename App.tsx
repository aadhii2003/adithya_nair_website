import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { HelmetProvider } from 'react-helmet-async';
import Navbar from './components/Navbar';
import Footer from './components/Footer';
import ChatBot from './components/ChatBot';
import HomePage from './pages/HomePage';
import AboutPage from './pages/AboutPage';
import SkillsPage from './pages/SkillsPage';
import ProjectsPage from './pages/ProjectsPage';
import ExperiencePage from './pages/ExperiencePage';
import ContactPage from './pages/ContactPage';

import EducationPage from './pages/EducationPage';
import ProjectDetailsPage from './pages/ProjectDetailsPage';

const App: React.FC = () => {
  return (
    <HelmetProvider>
      <Router>
        <div className="relative">
          <Navbar />
          <Routes>
            <Route path="/" element={<HomePage />} />
            <Route path="/about" element={<AboutPage />} />
            <Route path="/skills" element={<SkillsPage />} />
            <Route path="/projects" element={<ProjectsPage />} />
            <Route path="/project/:id" element={<ProjectDetailsPage />} />
            <Route path="/experience" element={<ExperiencePage />} />
            <Route path="/education" element={<EducationPage />} />
            <Route path="/contact" element={<ContactPage />} />
          </Routes>
          <Footer />
          <ChatBot />
        </div>
      </Router>
    </HelmetProvider>
  );
};

export default App;
