import React, { useState } from 'react';
import { Box, ThemeProvider, IconButton } from '@mui/material';
import HelpOutlineIcon from '@mui/icons-material/HelpOutline';
import HelloWorldCard from './components/HelloWorldCard';
import PaletteView from './components/PaletteView';
import { useHelloWorldClick } from './hooks/useHelloWorldClick';
import { theme } from './theme/theme';
import { GRADIENT_PRIMARY, GRADIENT_SECONDARY } from './constants';
import './styles/App.css';

const App: React.FC = () => {
  const { handleClick } = useHelloWorldClick();
  const [showPalette, setShowPalette] = useState(false);

  return (
    <ThemeProvider theme={theme}>
      <Box
        sx={{
          display: 'flex',
          justifyContent: 'center',
          alignItems: 'center',
          minHeight: '100vh',
          background: `linear-gradient(135deg, ${GRADIENT_PRIMARY} 0%, ${GRADIENT_SECONDARY} 100%)`,
          padding: 2,
        }}
      >
        <Box sx={{ position: 'relative', width: '100%', maxWidth: 560 }}>
          {!showPalette && (
            <Box sx={{ position: 'absolute', top: 16, right: 16, zIndex: 2 }}>
              <IconButton
                onClick={() => setShowPalette(true)}
                color='secondary'
                aria-label='Open palette view'
                sx={{ backgroundColor: 'rgba(255,255,255,0.92)' }}
              >
                <HelpOutlineIcon />
              </IconButton>
            </Box>
          )}

          {showPalette ? (
            <PaletteView onBack={() => setShowPalette(false)} />
          ) : (
            <HelloWorldCard onButtonClick={handleClick} />
          )}
        </Box>
      </Box>
    </ThemeProvider>
  );
};

export default App;
