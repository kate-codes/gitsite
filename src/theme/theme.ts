import { createTheme } from '@mui/material/styles'
import { GRADIENT_PRIMARY, GRADIENT_SECONDARY } from '../constants'

export const theme = createTheme({
    palette: {
        primary: {
            main: GRADIENT_PRIMARY,
        },
        secondary: {
            main: GRADIENT_SECONDARY,
        },
    },
    typography: {
        fontFamily: "'Segoe UI', Tahoma, Geneva, Verdana, sans-serif",
    },
})
