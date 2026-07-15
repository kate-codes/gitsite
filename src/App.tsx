import React, { useState } from 'react';
import { Box, ThemeProvider, IconButton } from '@mui/material';
import HelpOutlineIcon from '@mui/icons-material/HelpOutline';
import HelloWorldCard from './components/HelloWorldCard';
import PaletteView from './components/PaletteView';
import NavBar from './components/NavBar';
import AboutSection from './components/AboutSection';
import { useHelloWorldClick } from './hooks/useHelloWorldClick';
import { theme } from './theme/theme';
import { GRADIENT_PRIMARY, GRADIENT_SECONDARY } from './constants';
import { palette } from './theme/palette';
import './styles/App.css';

const App: React.FC = () => {
  const { handleClick } = useHelloWorldClick();
  const [showPalette, setShowPalette] = useState(false);
  const [activeSection, setActiveSection] = useState('');

  const handleNavClick = (section: string) => {
    setActiveSection((prev) => (prev === section ? '' : section));
    setShowPalette(false);
  };

  const renderMainContent = () => {
    if (activeSection === 'About') { return <AboutSection />; }
    if (showPalette) { return <PaletteView onBack={() => setShowPalette(false)} />; }
    return <HelloWorldCard onButtonClick={handleClick} />;
  };

  return (
    <ThemeProvider theme={theme}>
      <Box sx={{ display: 'flex', flexDirection: 'column', minHeight: '100vh' }}>
        <NavBar onNavClick={handleNavClick} activeSection={activeSection} />
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
          <Box
            sx={{
              position: 'relative',
              width: '100%',
              maxWidth: 640,
              display: 'flex',
              justifyContent: 'center',
            }}
          >
            {!showPalette && activeSection === '' && (
              <Box sx={{ position: 'absolute', top: 16, right: 16, zIndex: 2 }}>
                <IconButton
                  onClick={() => setShowPalette(true)}
                  aria-label='Open palette view'
                  sx={{
                    backgroundColor: palette.colors.rosyTaupe.hex,
                    color: palette.colors.black.hex,
                    '&:hover': { backgroundColor: palette.colors.rosyTaupe.hex },
                  }}
                >
                  <HelpOutlineIcon />
                </IconButton>
              </Box>
            )}
            {renderMainContent()}
          </Box>
        </Box>
      </Box>
    </ThemeProvider>
  );
};

export default App;
