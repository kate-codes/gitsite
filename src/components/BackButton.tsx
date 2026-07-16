import React from 'react';
import { Button } from '@mui/material';
import ArrowBackIcon from '@mui/icons-material/ArrowBack';
import { useColorTheme } from '../context/ColorThemeContext';

interface BackButtonProps {
  onClick: () => void;
}

const BackButton: React.FC<BackButtonProps> = ({ onClick }) => {
  const { colors } = useColorTheme();

  return (
    <Button
      startIcon={<ArrowBackIcon />}
      onClick={onClick}
      sx={{
        mb: 3,
        color: colors.backButtonColor,
        borderColor: colors.backButtonColor,
        '& .MuiButton-startIcon': { color: colors.backButtonColor },
        '&:hover': {
          borderColor: colors.backButtonColor,
          color: colors.backButtonColor,
          backgroundColor: `${colors.backButtonColor}20`,
        },
      }}
      variant='outlined'
    >
      Back
    </Button>
  );
};

export default BackButton;
