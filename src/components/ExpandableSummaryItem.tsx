import React from 'react';
import { Box, Collapse, Typography } from '@mui/material';
import { useColorTheme } from '../context/ColorThemeContext';
import { useTypewriterEffect } from '../hooks/useTypewriterEffect';

const TRIANGLE_VERTICAL_OFFSET = '7px';

interface Props {
  heading: string;
  body: string;
  isLast: boolean;
}

const ExpandableSummaryItem: React.FC<Props> = ({ heading, body, isLast }) => {
  const { colors } = useColorTheme();
  const { isOpen, displayedText, isTyping, handleToggle } = useTypewriterEffect(body);

  return (
    <Box
      component='li'
      sx={{
        color: colors.resumeBodyText,
        lineHeight: 1.8,
        mb: isLast ? 0 : 1.5,
        listStyle: 'none',
      }}
    >
      <Box
        role='button'
        tabIndex={0}
        onClick={handleToggle}
        onKeyDown={(e) => (e.key === 'Enter' || e.key === ' ') && handleToggle()}
        sx={{
          display: 'flex',
          alignItems: 'flex-start',
          gap: 1,
          cursor: 'pointer',
          userSelect: 'none',
          '&:hover .summary-heading': {
            color: colors.resumeSubheadingText,
          },
        }}
      >
        <Box
          sx={{
            mt: TRIANGLE_VERTICAL_OFFSET,
            flexShrink: 0,
            fontSize: '0.7rem',
            color: colors.resumeAccent,
            transform: isOpen ? 'rotate(90deg)' : 'rotate(0deg)',
            transition: 'transform 0.25s ease',
            lineHeight: 1,
          }}
        >
          ▶
        </Box>
        <Typography
          component='span'
          className='summary-heading'
          sx={{
            fontWeight: 700,
            color: colors.resumeHeadingText,
            transition: 'color 0.2s ease',
          }}
        >
          {heading}
        </Typography>
      </Box>

      <Collapse in={isOpen} timeout={200}>
        <Typography
          variant='body1'
          sx={{
            color: colors.resumeBodyText,
            mt: 0.5,
            pl: 2.5,
            lineHeight: 1.8,
          }}
        >
          {displayedText}
          {isTyping && (
            <Box
              component='span'
              sx={{
                display: 'inline-block',
                width: '2px',
                height: '1em',
                backgroundColor: colors.resumeAccent,
                verticalAlign: 'text-bottom',
                ml: '1px',
                '@keyframes blink': {
                  '0%, 100%': { opacity: 1 },
                  '50%': { opacity: 0 },
                },
                animation: 'blink 0.7s step-start infinite',
              }}
            />
          )}
        </Typography>
      </Collapse>
    </Box>
  );
};

export default ExpandableSummaryItem;
