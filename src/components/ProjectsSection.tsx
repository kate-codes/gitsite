import React from 'react';
import { Button, Paper, Typography } from '@mui/material';
import ArrowBackIcon from '@mui/icons-material/ArrowBack';
import { palette } from '../theme/palette';

interface ProjectsSectionProps {
  onBack: () => void;
}

const ProjectsSection: React.FC<ProjectsSectionProps> = ({ onBack }) => {
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
      <Button startIcon={<ArrowBackIcon />} onClick={onBack} sx={{ mb: 3 }} variant='outlined'>
        Back
      </Button>
      <Typography
        variant='h4'
        component='h2'
        sx={{ color: palette.colors.ashBrown.hex, fontWeight: 700, marginBottom: 2 }}
      >
        Projects
      </Typography>
      <Typography variant='body1' sx={{ color: palette.colors.black.hex, lineHeight: 1.8 }}>
        Under construction — please check back later.
      </Typography>
    </Paper>
  );
};

export default ProjectsSection;
