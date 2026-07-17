import React from 'react';
import { Box, Divider, Paper, Typography } from '@mui/material';
import {
  DISPLAY_NAME,
  PROFESSIONAL_SUMMARY,
  RESUME_AVAILABILITY,
  RESUME_HEADLINE,
  RESUME_TAGLINE,
} from '../constants';
import { useColorTheme } from '../context/ColorThemeContext';
import ResumeSidebar from './ResumeSidebar';

const ResumeSection: React.FC = () => {
  const { colors } = useColorTheme();

  return (
    <Box
      sx={{
        display: 'flex',
        flexDirection: { xs: 'column', md: 'row' },
        gap: 3,
        width: '100%',
        maxWidth: 1100,
        alignItems: 'flex-start',
      }}
    >
      <ResumeSidebar />
      <Paper
        elevation={3}
        sx={{
          padding: { xs: 4, sm: 6 },
          flexGrow: 1,
          minWidth: 0,
          borderRadius: 2,
          backgroundColor: colors.paperBackground,
          borderTop: `4px solid ${colors.cardAccentBorder}`,
        }}
      >
        <Typography
          variant='h4'
          component='h1'
          sx={{ color: colors.resumeHeadingText, fontWeight: 700 }}
        >
          {DISPLAY_NAME}
        </Typography>

        <Typography
          variant='subtitle1'
          sx={{ color: colors.resumeSubheadingText, fontWeight: 600, mt: 0.5 }}
        >
          {RESUME_HEADLINE}
        </Typography>

        <Typography variant='body2' sx={{ color: colors.resumeSubheadingText, mt: 0.5 }}>
          {RESUME_AVAILABILITY}
        </Typography>

        <Divider sx={{ my: 2, borderColor: colors.resumeAccent }} />

        <Box
          sx={{
            borderLeft: `3px solid ${colors.resumeAccent}`,
            pl: 2,
          }}
        >
          <Typography
            variant='body1'
            sx={{ color: colors.resumeBodyText, fontStyle: 'italic', lineHeight: 1.8 }}
          >
            {RESUME_TAGLINE}
          </Typography>
        </Box>

        <Divider sx={{ my: 2, borderColor: colors.resumeAccent }} />

        <Typography variant='h6' sx={{ color: colors.resumeHeadingText, fontWeight: 700, mb: 1.5 }}>
          Professional Summary
        </Typography>

        <Box component='ul' sx={{ m: 0, pl: 2.5 }}>
          {PROFESSIONAL_SUMMARY.map(({ heading, body }, i) => (
            <Box
              component='li'
              key={i}
              sx={{
                color: colors.resumeBodyText,
                lineHeight: 1.8,
                mb: i < PROFESSIONAL_SUMMARY.length - 1 ? 1.5 : 0,
              }}
            >
              <Typography variant='body1' component='span'>
                <Typography
                  component='span'
                  sx={{ fontWeight: 700, color: colors.resumeHeadingText }}
                >
                  {heading}
                </Typography>{' '}
                {body}
              </Typography>
            </Box>
          ))}
        </Box>
      </Paper>
    </Box>
  );
};

export default ResumeSection;
