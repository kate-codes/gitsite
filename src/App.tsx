import React from 'react'
import { Box, ThemeProvider } from '@mui/material'
import HelloWorldCard from './components/HelloWorldCard'
import { useHelloWorldClick } from './hooks/useHelloWorldClick'
import { theme } from './theme/theme'
import { GRADIENT_PRIMARY, GRADIENT_SECONDARY } from './constants'
import './styles/App.css'

const App: React.FC = () => {
    const { handleClick } = useHelloWorldClick()

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
                <HelloWorldCard onButtonClick={handleClick} />
            </Box>
        </ThemeProvider>
    )
}

export default App
