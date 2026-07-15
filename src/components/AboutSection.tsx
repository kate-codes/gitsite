import React from 'react';
import { Paper, Typography, Link } from '@mui/material';
import { DISPLAY_NAME, ABOUT_BIO } from '../constants';
import { palette } from '../theme/palette';

const UW_LAB_NAME = "University of Washington's Intelligent Networks Laboratory";
const UW_LAB_URL = 'https://depts.washington.edu/biocomp/people.html';

const renderParagraph = (text: string) => {
  const idx = text.indexOf(UW_LAB_NAME);
  if (idx === -1) { return text; }
  return (
    <>
      {text.slice(0, idx)}
      <Link
        href={UW_LAB_URL}
        target='_blank'
        rel='noopener noreferrer'
        sx={{ color: palette.colors.terracottaClay.hex }}
      >
        {UW_LAB_NAME}
      </Link>
      {text.slice(idx + UW_LAB_NAME.length)}
    </>
  );
};

const AboutSection: React.FC = () => {
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
      <Typography
        variant='h4'
        component='h2'
        sx={{ color: palette.colors.ashBrown.hex, fontWeight: 700, marginBottom: 2 }}
      >
        {DISPLAY_NAME}
      </Typography>
      {ABOUT_BIO.map((paragraph, i) => (
        <Typography
          key={i}
          variant='body1'
          sx={{
            color: palette.colors.black.hex,
            lineHeight: 1.8,
            marginBottom: i < ABOUT_BIO.length - 1 ? 2 : 0,
          }}
        >
          {renderParagraph(paragraph)}
        </Typography>
      ))}
    </Paper>
  );
};

export default AboutSection;
