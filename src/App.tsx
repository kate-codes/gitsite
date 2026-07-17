import React from 'react';
import { Routes, Route, useNavigate } from 'react-router-dom';
import { Box } from '@mui/material';
import HelloWorldCard from './components/HelloWorldCard';
import NavBar from './components/NavBar';
import Footer from './components/Footer';
import AboutSection from './components/AboutSection';
import ResumeSection from './components/ResumeSection';
import ContactSection from './components/ContactSection';
import ExperienceSection from './components/ExperienceSection';
import ProjectsSection from './components/ProjectsSection';
import PaletteView from './components/PaletteView';
import { useHelloWorldClick } from './hooks/useHelloWorldClick';
import { ColorThemeProvider, useColorTheme } from './context/ColorThemeContext';
import './styles/App.css';

const PalettePage: React.FC = () => {
  const navigate = useNavigate();

  return <PaletteView onBack={() => navigate('/about')} />;
};

const AppContent: React.FC = () => {
  const { handleClick } = useHelloWorldClick();
  const { colors } = useColorTheme();

  return (
    <Box sx={{ display: 'flex', flexDirection: 'column', minHeight: '100vh' }}>
      <NavBar />
      <Box
        sx={{
          display: 'flex',
          justifyContent: 'center',
          alignItems: 'center',
          flexGrow: 1,
          background: `linear-gradient(180deg, ${colors.gradientPrimary} 0%, ${colors.websiteBackground} 100%)`,
          padding: 2,
          transition: 'background 0.3s ease',
        }}
      >
        <Box sx={{ width: '100%', display: 'flex', justifyContent: 'center' }}>
          <Routes>
            <Route path='/' element={<HelloWorldCard onButtonClick={handleClick} />} />
            <Route path='/about' element={<AboutSection />} />
            <Route path='/palette' element={<PalettePage />} />
            <Route path='/resume' element={<ResumeSection />} />
            <Route path='/experience' element={<ExperienceSection />} />
            <Route path='/projects' element={<ProjectsSection />} />
            <Route path='/contact' element={<ContactSection />} />
          </Routes>
        </Box>
      </Box>
      <Footer />
    </Box>
  );
};

const App: React.FC = () => (
  <ColorThemeProvider>
    <AppContent />
  </ColorThemeProvider>
);

export default App;
