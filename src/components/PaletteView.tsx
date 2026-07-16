import React from 'react';
import { Box, Button, Tooltip, Typography, Paper } from '@mui/material';
import FileDownloadIcon from '@mui/icons-material/FileDownload';
import { PaletteViewProps } from '../types';
import { palette } from '../theme/palette';
import { useColorTheme } from '../context/ColorThemeContext';
import githubLogo from '../assets/images/github_logo.png';
import BackButton from './BackButton';

const PaletteView: React.FC<PaletteViewProps> = ({ onBack }) => {
  const { colors } = useColorTheme();
  const colorList = Object.values(palette.colors);
  const logoExplanation =
    'This image was initially commissioned to show a comic of a cute "cat 5" disaster.';
  const downloadButtonText = 'Download Palette as CSV';

  return (
    <Paper
      elevation={3}
      sx={{
        padding: { xs: 4, sm: 6 },
        maxWidth: 860,
        width: '100%',
        textAlign: 'center',
        borderRadius: 2,
        backgroundColor: colors.paperBackground,
        borderTop: `4px solid ${colors.cardAccentBorder}`,
      }}
    >
      <Box sx={{ textAlign: 'left' }}>
        <BackButton onClick={onBack} />
      </Box>

      <Typography
        variant='h4'
        component='h1'
        gutterBottom
        sx={{ marginBottom: 1, color: colors.cardHeadingText }}
      >
        {palette.name}
      </Typography>
      <Typography variant='body2' sx={{ color: colors.defaultText, opacity: 0.7, mb: 2 }}>
        Explore the exported color formats for this palette.
      </Typography>

      <Box
        sx={{
          display: 'grid',
          gridTemplateColumns: {
            xs: 'repeat(3, 1fr)',
            sm: 'repeat(5, 1fr)',
            md: `repeat(${colorList.length}, 1fr)`,
          },
          gap: 1,
          mb: 3,
        }}
      >
        {colorList.map((color) => (
          <Box key={color.hex}>
            <Box
              sx={{
                height: 72,
                borderRadius: 1,
                backgroundColor: color.hex,
                border: '1px solid rgba(0,0,0,0.08)',
              }}
            />
            <Typography
              variant='caption'
              display='block'
              sx={{ mt: 0.5, color: colors.defaultText, opacity: 0.75, lineHeight: 1.3 }}
            >
              {color.name}
            </Typography>
            <Typography
              variant='caption'
              display='block'
              sx={{ color: colors.defaultText, opacity: 0.5, fontFamily: 'monospace' }}
            >
              {color.hex}
            </Typography>
          </Box>
        ))}
      </Box>

      <Box sx={{ mb: 3, textAlign: 'center' }}>
        <Tooltip title={logoExplanation} arrow>
          <img
            src={githubLogo}
            alt='Cat 5 Disaster illustration'
            style={{
              maxWidth: '100%',
              height: 'auto',
              maxHeight: 300,
              cursor: 'help',
            }}
          />
        </Tooltip>
        <Typography variant='body2' sx={{ color: colors.defaultText, opacity: 0.7, mt: 1 }}>
          Palette generated from this custom illustration commission by the artist{' '}
          <Box
            component='a'
            href='mailto:achmadyoungky3@gmail.com'
            sx={{
              textDecoration: 'none',
              color: colors.linkColor,
              '&:hover': { textDecoration: 'underline' },
            }}
          >
            Tee Spoon.
          </Box>
        </Typography>
      </Box>

      <Box
        sx={{
          textAlign: 'left',
          backgroundColor: 'rgba(0,0,0,0.06)',
          borderRadius: 2,
          p: 2,
          mb: 2,
          fontFamily: 'Monospace, monospace',
          fontSize: '0.85rem',
          whiteSpace: 'pre-wrap',
          wordBreak: 'break-word',
          color: colors.defaultText,
        }}
      >
        <Typography component='div' sx={{ mb: 1, fontWeight: 600, color: colors.cardHeadingText }}>
          CSV
        </Typography>
        <Typography component='div' sx={{ mb: 1 }}>
          {palette.csv}
        </Typography>
        <Typography component='div' sx={{ mb: 1, fontWeight: 600, color: colors.cardHeadingText }}>
          Hex List
        </Typography>
        <Typography component='div' sx={{ mb: 1 }}>
          {palette.withHash}
        </Typography>
        <Typography component='div' sx={{ mb: 1, fontWeight: 600, color: colors.cardHeadingText }}>
          JSON Array
        </Typography>
        <Typography component='div' sx={{ mb: 1 }}>
          {palette.array}
        </Typography>
        <Typography component='div' sx={{ mb: 1, fontWeight: 600, color: colors.cardHeadingText }}>
          JSON Object
        </Typography>
        <Typography component='div' sx={{ mb: 1 }}>
          {palette.object}
        </Typography>
        <Typography component='div' sx={{ mb: 1, fontWeight: 600, color: colors.cardHeadingText }}>
          Extended JSON
        </Typography>
        <Typography component='div' sx={{ mb: 1 }}>
          {palette.extendedArray}
        </Typography>
        <Typography component='div' sx={{ fontWeight: 600, color: colors.cardHeadingText }}>
          XML
        </Typography>
        <Typography component='div'>{palette.xml}</Typography>
      </Box>

      <Button
        startIcon={<FileDownloadIcon />}
        variant='outlined'
        size='large'
        sx={{
          marginTop: 1,
          width: '100%',
          color: colors.backButtonColor,
          borderColor: colors.backButtonColor,
          '& .MuiButton-startIcon': { color: colors.backButtonColor },
          '&:hover': {
            borderColor: colors.backButtonColor,
            color: colors.backButtonColor,
            backgroundColor: `${colors.backButtonColor}20`,
          },
        }}
        onClick={() => navigator.clipboard.writeText(palette.csv)}
      >
        {downloadButtonText}
      </Button>
    </Paper>
  );
};

export default PaletteView;
