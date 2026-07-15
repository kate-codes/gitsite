import React, { useState } from 'react';
import { Box, ThemeProvider } from '@mui/material';
import HelloWorldCard from './components/HelloWorldCard';
import NavBar from './components/NavBar';
import AboutSection from './components/AboutSection';
import ResumeSection from './components/ResumeSection';
import ContactSection from './components/ContactSection';
import ExperienceSection from './components/ExperienceSection';
import ProjectsSection from './components/ProjectsSection';
import { useHelloWorldClick } from './hooks/useHelloWorldClick';
import { theme } from './theme/theme';
import { GRADIENT_PRIMARY, GRADIENT_SECONDARY } from './constants';
import './styles/App.css';

const App: React.FC = () => {
  const { handleClick } = useHelloWorldClick();
  const [activeSection, setActiveSection] = useState('');

  const handleNavClick = (section: string) => {
    setActiveSection((prev) => (prev === section ? '' : section));
  };

  const handleHomeClick = () => {
    setActiveSection('');
  };

  const renderMainContent = () => {
    if (activeSection === 'About') {
      return <AboutSection />;
    }
    if (activeSection === 'Resume') {
      return <ResumeSection />;
    }
    if (activeSection === 'Experience') {
      return <ExperienceSection onBack={handleHomeClick} />;
    }
    if (activeSection === 'Projects') {
      return <ProjectsSection onBack={handleHomeClick} />;
    }
    if (activeSection === 'Contact') {
      return <ContactSection onBack={handleHomeClick} />;
    }
    return <HelloWorldCard onButtonClick={handleClick} />;
  };

  return (
    <ThemeProvider theme={theme}>
      <Box sx={{ display: 'flex', flexDirection: 'column', minHeight: '100vh' }}>
        <NavBar
          onNavClick={handleNavClick}
          onHomeClick={handleHomeClick}
          activeSection={activeSection}
        />
        <Box
          sx={{
            display: 'flex',
            justifyContent: 'center',
            alignItems: 'center',
            flexGrow: 1,
            background: `linear-gradient(180deg, ${GRADIENT_PRIMARY} 0%, ${GRADIENT_SECONDARY} 100%)`,
            padding: 2,
          }}
        >
          <Box sx={{ width: '100%', display: 'flex', justifyContent: 'center' }}>
            {renderMainContent()}
          </Box>
        </Box>
      </Box>
    </ThemeProvider>
  );
};

export default App;
