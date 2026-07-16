import { createTheme } from '@mui/material/styles';
import { LIGHT_MODE_COLORS } from '../constants';

export const theme = createTheme({
  palette: {
    primary: {
      main: LIGHT_MODE_COLORS.gradientPrimary,
    },
    secondary: {
      main: LIGHT_MODE_COLORS.gradientSecondary,
    },
    background: {
      default: '#F7F2EE',
      paper: '#FFFFFF',
    },
  },
  typography: {
    fontFamily: "'Segoe UI', Tahoma, Geneva, Verdana, sans-serif",
  },
});
