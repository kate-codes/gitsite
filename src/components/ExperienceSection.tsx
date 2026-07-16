import React from 'react';
import { Paper, Typography } from '@mui/material';
import { useNavigate } from 'react-router-dom';
import BackButton from './BackButton';
import { palette } from '../theme/palette';

const ExperienceSection: React.FC = () => {
  const navigate = useNavigate();

  return (
    <Paper
      elevation={3}
      sx={{
        padding: { xs: 4, sm: 6 },
        maxWidth: 640,
        width: '100%',
        borderRadius: 2,
        borderTop: `4px solid ${palette.colors.rosyTaupe.hex}`,
      }}
    >
      <BackButton onClick={() => navigate(-1)} />
      <Typography
        variant='h4'
        component='h2'
        sx={{ color: palette.colors.ashBrown.hex, fontWeight: 700, marginBottom: 2 }}
      >
        Experience
      </Typography>
      <Typography variant='body1' sx={{ color: palette.colors.black.hex, lineHeight: 1.8 }}>
        Under construction — please check back later.
      </Typography>
    </Paper>
  );
};

export default ExperienceSection;
