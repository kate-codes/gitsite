import React from 'react';
import { Button, Typography, Paper } from '@mui/material';
import { HelloWorldCardProps } from '../types';
import { APP_GREETING, APP_DESCRIPTION, APP_SUBTEXT, APP_BUTTON_TEXT } from '../constants';
import { palette } from '../theme/palette';

const HelloWorldCard: React.FC<HelloWorldCardProps> = ({ onButtonClick }) => {
  return (
    <Paper
      elevation={3}
      sx={{
        padding: 4,
        textAlign: 'center',
        maxWidth: 500,
        borderRadius: 2,
      }}
    >
      <Typography variant='h3' component='h1' gutterBottom sx={{ marginBottom: 2 }}>
        {APP_GREETING}
      </Typography>
      <Typography variant='body1' paragraph>
        {APP_DESCRIPTION}
      </Typography>
      <Typography variant='body2' paragraph sx={{ color: 'text.secondary' }}>
        {APP_SUBTEXT}
      </Typography>
      <Button
        variant='contained'
        size='large'
        onClick={onButtonClick}
        sx={{
          marginTop: 2,
          background: palette.colors.rosyTaupe.hex,
          '&:hover': {
            background: palette.colors.rosyTaupe.hex,
          },
        }}
      >
        {APP_BUTTON_TEXT}
      </Button>
    </Paper>
  );
};

export default HelloWorldCard;
