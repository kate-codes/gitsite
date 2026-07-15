import React, { useState } from 'react';
import { Paper, Typography, Link } from '@mui/material';
import { DISPLAY_NAME, ABOUT_BIO } from '../constants';
import { palette } from '../theme/palette';
import PaletteView from './PaletteView';

const INLINE_LINKS = new Map<string, string>([
  [
    "University of Washington's Intelligent Networks Laboratory",
    'https://depts.washington.edu/biocomp/people.html',
  ],
  ['review and fork the basic project on GitHub Pages', 'https://github.com/kate-codes/gitsite'],
]);

const renderParagraph = (raw: string): React.ReactNode => {
  let parts: React.ReactNode[] = [raw];
  for (const [text, url] of INLINE_LINKS) {
    parts = parts.flatMap((part) => {
      if (typeof part !== 'string') {
        return [part];
      }
      const idx = part.indexOf(text);
      if (idx === -1) {
        return [part];
      }
      return [
        part.slice(0, idx),
        <Link
          key={url}
          href={url}
          target='_blank'
          rel='noopener noreferrer'
          sx={{ color: palette.colors.terracottaClay.hex }}
        >
          {text}
        </Link>,
        part.slice(idx + text.length),
      ];
    });
  }
  return <>{parts}</>;
};

const AboutSection: React.FC = () => {
  const [showPalette, setShowPalette] = useState(false);

  if (showPalette) {
    return <PaletteView onBack={() => setShowPalette(false)} />;
  }

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
      {ABOUT_BIO.map((paragraph, i) => {
        const isLast = i === ABOUT_BIO.length - 1;
        return (
          <Typography
            key={i}
            variant='body1'
            sx={{
              color: palette.colors.black.hex,
              lineHeight: 1.8,
              marginBottom: isLast ? 0 : 2,
            }}
          >
            {renderParagraph(paragraph)}
            {isLast && (
              <>
                {' '}
                Here is the{' '}
                <Link
                  component='button'
                  onClick={() => setShowPalette(true)}
                  sx={{
                    color: palette.colors.terracottaClay.hex,
                    verticalAlign: 'baseline',
                    cursor: 'pointer',
                    background: 'none',
                    border: 'none',
                    padding: 0,
                    font: 'inherit',
                  }}
                >
                  palette used for this website
                </Link>
                , which you can also export if you like.
              </>
            )}
          </Typography>
        );
      })}
    </Paper>
  );
};

export default AboutSection;
