import React from 'react';
import { Box, Divider, Link, Paper, Typography } from '@mui/material';
import LinkedInIcon from '@mui/icons-material/LinkedIn';
import EmailIcon from '@mui/icons-material/Email';
import {
  CONTACT_EMAIL_URL,
  CONTACT_INQUIRY_URL,
  CONTACT_LINKEDIN_URL,
  DISPLAY_NAME,
} from '../constants';
import { palette } from '../theme/palette';

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
]);

const ContactSection: React.FC = () => {
  return (
    <Paper
      elevation={3}
      sx={{
        padding: { xs: 4, sm: 6 },
        maxWidth: 520,
        width: '100%',
        borderRadius: 2,
        borderTop: `4px solid ${palette.colors.rosyTaupe.hex}`,
      }}
    >
      <Typography
        variant='h4'
        component='h2'
        sx={{ color: palette.colors.ashBrown.hex, fontWeight: 700, marginBottom: 1 }}
      >
        Contact
      </Typography>
      <Typography variant='body2' sx={{ color: palette.colors.smokyRose.hex, marginBottom: 3 }}>
        Get in touch with {DISPLAY_NAME}
      </Typography>

      <Divider sx={{ mb: 3, borderColor: palette.colors.rosyTaupe.hex }} />

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
                border: `1px solid ${palette.colors.rosyTaupe.hex}`,
                color: palette.colors.ashBrown.hex,
                transition: 'background-color 0.2s',
                '&:hover': { backgroundColor: `${palette.colors.rosyTaupe.hex}20` },
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
