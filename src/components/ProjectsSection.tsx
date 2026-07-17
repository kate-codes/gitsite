import React from 'react';
import { Paper, Typography } from '@mui/material';
import { useNavigateBack } from '../hooks/useNavigateBack';
import BackButton from './BackButton';
import { useColorTheme } from '../context/ColorThemeContext';

const ProjectsSection: React.FC = () => {
  const navigateBack = useNavigateBack();
  const { colors } = useColorTheme();

  return (
    <Paper
      elevation={3}
      sx={{
        padding: { xs: 4, sm: 6 },
        maxWidth: 640,
        width: '100%',
        borderRadius: 2,
        backgroundColor: colors.paperBackground,
        borderTop: `4px solid ${colors.cardAccentBorder}`,
      }}
    >
      <BackButton onClick={navigateBack} />
      <Typography
        variant='h4'
        component='h2'
        sx={{ color: colors.cardHeadingText, fontWeight: 700, marginBottom: 2 }}
      >
        Projects
      </Typography>
      <Typography variant='body1' sx={{ color: colors.defaultText, lineHeight: 1.8 }}>
        Under construction — please check back later.
      </Typography>
    </Paper>
  );
};

export default ProjectsSection;
