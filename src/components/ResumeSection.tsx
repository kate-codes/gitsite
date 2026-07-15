import React from 'react';
import { Box, Divider, Paper, Typography } from '@mui/material';
import {
  DISPLAY_NAME,
  PROFESSIONAL_SUMMARY,
  RESUME_AVAILABILITY,
  RESUME_HEADLINE,
  RESUME_TAGLINE,
} from '../constants';
import { palette } from '../theme/palette';

const ResumeSection: React.FC = () => {
  return (
    <Paper
      elevation={3}
      sx={{
        padding: { xs: 4, sm: 6 },
        maxWidth: 800,
        width: '100%',
        borderRadius: 2,
        borderTop: `4px solid ${palette.colors.rosyTaupe.hex}`,
      }}
    >
      <Typography
        variant='h4'
        component='h1'
        sx={{ color: palette.colors.ashBrown.hex, fontWeight: 700 }}
      >
        {DISPLAY_NAME}
      </Typography>

      <Typography
        variant='subtitle1'
        sx={{ color: palette.colors.terracottaClay.hex, fontWeight: 600, mt: 0.5 }}
      >
        {RESUME_HEADLINE}
      </Typography>

      <Typography variant='body2' sx={{ color: palette.colors.smokyRose.hex, mt: 0.5 }}>
        {RESUME_AVAILABILITY}
      </Typography>

      <Divider sx={{ my: 2, borderColor: palette.colors.rosyTaupe.hex }} />

      <Box
        sx={{
          borderLeft: `3px solid ${palette.colors.rosyTaupe.hex}`,
          pl: 2,
        }}
      >
        <Typography
          variant='body1'
          sx={{ color: palette.colors.black.hex, fontStyle: 'italic', lineHeight: 1.8 }}
        >
          {RESUME_TAGLINE}
        </Typography>
      </Box>

      <Divider sx={{ my: 2, borderColor: palette.colors.rosyTaupe.hex }} />

      <Typography
        variant='h6'
        sx={{ color: palette.colors.ashBrown.hex, fontWeight: 700, mb: 1.5 }}
      >
        Professional Summary
      </Typography>

      <Box component='ul' sx={{ m: 0, pl: 2.5 }}>
        {PROFESSIONAL_SUMMARY.map(({ heading, body }, i) => (
          <Box
            component='li'
            key={i}
            sx={{
              color: palette.colors.black.hex,
              lineHeight: 1.8,
              mb: i < PROFESSIONAL_SUMMARY.length - 1 ? 1.5 : 0,
            }}
          >
            <Typography variant='body1' component='span'>
              <Typography
                component='span'
                sx={{ fontWeight: 700, color: palette.colors.ashBrown.hex }}
              >
                {heading}
              </Typography>{' '}
              {body}
            </Typography>
          </Box>
        ))}
      </Box>
    </Paper>
  );
};

export default ResumeSection;
