import React from 'react';
import { Box, Divider, Link, Paper, Typography } from '@mui/material';
import LinkedInIcon from '@mui/icons-material/LinkedIn';
import EmailIcon from '@mui/icons-material/Email';
import GitHubIcon from '@mui/icons-material/GitHub';
import { useNavigate } from 'react-router-dom';
import {
  CONTACT_EMAIL_URL,
  CONTACT_GITHUB_URL,
  CONTACT_INQUIRY_URL,
  CONTACT_LINKEDIN_URL,
  DISPLAY_NAME,
} from '../constants';
import BackButton from './BackButton';
import { useColorTheme } from '../context/ColorThemeContext';

const CONTACT_LINKS = new Map<string, { url: string; icon: React.ReactNode; label: string }>([
  [
    'General Inquiries',
    { url: CONTACT_INQUIRY_URL, icon: <EmailIcon fontSize='small' />, label: 'Open inquiry form' },
  ],
  [
    'Email',
    { url: CONTACT_EMAIL_URL, icon: <EmailIcon fontSize='small' />, label: 'Send an email' },
  ],
  [
    'LinkedIn',
    {
      url: CONTACT_LINKEDIN_URL,
      icon: <LinkedInIcon fontSize='small' />,
      label: 'View LinkedIn profile',
    },
  ],
  [
    'GitHub',
    {
      url: CONTACT_GITHUB_URL,
      icon: <GitHubIcon fontSize='small' />,
      label: 'View GitHub profile',
    },
  ],
]);

const ContactSection: React.FC = () => {
  const navigate = useNavigate();
  const { colors } = useColorTheme();

  return (
    <Paper
      elevation={3}
      sx={{
        padding: { xs: 4, sm: 6 },
        maxWidth: 520,
        width: '100%',
        borderRadius: 2,
        backgroundColor: colors.paperBackground,
        borderTop: `4px solid ${colors.cardAccentBorder}`,
      }}
    >
      <BackButton onClick={() => navigate(-1)} />
      <Typography
        variant='h4'
        component='h2'
        sx={{ color: colors.cardHeadingText, fontWeight: 700, marginBottom: 1 }}
      >
        Contact
      </Typography>
      <Typography variant='body2' sx={{ color: colors.resumeMutedText, marginBottom: 3 }}>
        Get in touch with {DISPLAY_NAME}
      </Typography>

      <Divider sx={{ mb: 3, borderColor: colors.cardAccentBorder }} />

      <Box sx={{ display: 'flex', flexDirection: 'column', gap: 2 }}>
        {Array.from(CONTACT_LINKS.entries()).map(([name, { url, icon, label }]) =>
          url ? (
            <Link
              key={name}
              href={url}
              target='_blank'
              rel='noopener noreferrer'
              aria-label={label}
              underline='none'
              sx={{
                display: 'flex',
                alignItems: 'center',
                gap: 1.5,
                padding: 2,
                borderRadius: 1,
                border: `1px solid ${colors.cardAccentBorder}`,
                color: colors.cardHeadingText,
                transition: 'background-color 0.2s',
                '&:hover': { backgroundColor: `${colors.cardAccentBorder}20` },
              }}
            >
              {icon}
              <Typography variant='body1' fontWeight={500}>
                {name}
              </Typography>
            </Link>
          ) : null
        )}
      </Box>
    </Paper>
  );
};

export default ContactSection;
