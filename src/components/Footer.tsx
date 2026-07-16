import React from 'react';
import { Box, IconButton, Typography } from '@mui/material';
import GitHubIcon from '@mui/icons-material/GitHub';
import LinkedInIcon from '@mui/icons-material/LinkedIn';
import EmailIcon from '@mui/icons-material/Email';
import {
  DISPLAY_NAME,
  CONTACT_GITHUB_URL,
  CONTACT_LINKEDIN_URL,
  CONTACT_EMAIL_URL,
} from '../constants';
import { useColorTheme } from '../context/ColorThemeContext';

const YEAR_WEBSITE_STARTED = 2017;

const formatFooterDisplayText = ({ year, displayName }: { year: number; displayName: string }) =>
  `© ${YEAR_WEBSITE_STARTED}-${year} ${displayName}`;

const Footer: React.FC = () => {
  const year = new Date().getFullYear();
  const footerText = formatFooterDisplayText({ year, displayName: DISPLAY_NAME });
  const { colors } = useColorTheme();

  return (
    <Box
      component='footer'
      sx={{
        width: '100%',
        boxSizing: 'border-box',
        backgroundColor: colors.footerBackground,
        py: 0.75,
        px: { xs: 2, sm: 3, md: 4 },
        transition: 'background-color 0.3s ease',
      }}
    >
      <Box
        sx={{
          width: '100%',
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'space-between',
        }}
      >
        <Typography variant='body2' sx={{ color: colors.footerText, opacity: 0.7 }}>
          {footerText}
        </Typography>

        <Box sx={{ display: 'flex', gap: 0.5 }}>
          {[
            { href: CONTACT_GITHUB_URL, icon: <GitHubIcon fontSize='small' />, label: 'GitHub' },
            {
              href: CONTACT_LINKEDIN_URL,
              icon: <LinkedInIcon fontSize='small' />,
              label: 'LinkedIn',
            },
            { href: CONTACT_EMAIL_URL, icon: <EmailIcon fontSize='small' />, label: 'Email' },
          ].map(({ href, icon, label }) => (
            <IconButton
              key={label}
              component='a'
              href={href}
              target={href.startsWith('mailto') ? undefined : '_blank'}
              rel={href.startsWith('mailto') ? undefined : 'noopener noreferrer'}
              size='small'
              aria-label={label}
              sx={{
                color: colors.footerText,
                opacity: 0.7,
                transition: 'opacity 0.2s, color 0.2s',
                '&:hover': { opacity: 1, color: colors.footerHover },
              }}
            >
              {icon}
            </IconButton>
          ))}
        </Box>
      </Box>
    </Box>
  );
};

export default Footer;
