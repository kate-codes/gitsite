import React from 'react';
import { Routes, Route } from 'react-router-dom';
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

  return (
    <ThemeProvider theme={theme}>
      <Box sx={{ display: 'flex', flexDirection: 'column', minHeight: '100vh' }}>
        <NavBar />
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
            <Routes>
              <Route path='/' element={<HelloWorldCard onButtonClick={handleClick} />} />
              <Route path='/about' element={<AboutSection />} />
              <Route path='/resume' element={<ResumeSection />} />
              <Route path='/experience' element={<ExperienceSection />} />
              <Route path='/projects' element={<ProjectsSection />} />
              <Route path='/contact' element={<ContactSection />} />
            </Routes>
          </Box>
        </Box>
      </Box>
    </ThemeProvider>
  );
};

export default App;
