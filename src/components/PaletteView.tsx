import React from 'react';
import { Box, Button, Typography, Paper } from '@mui/material';
import ArrowBackIcon from '@mui/icons-material/ArrowBack';
import { PaletteViewProps } from '../types';
import { palette } from '../theme/palette';
import { GRADIENT_PRIMARY, GRADIENT_SECONDARY } from '../constants';

const PaletteView: React.FC<PaletteViewProps> = ({ onBack }) => {
  const colorList = Object.values(palette.colors);

  return (
    <Paper
      elevation={3}
      sx={{
        padding: 4,
        textAlign: 'center',
        borderRadius: 2,
      }}
    >
      <Button startIcon={<ArrowBackIcon />} onClick={onBack} sx={{ mb: 3 }} variant='outlined'>
        Back
      </Button>

      <Typography variant='h4' component='h1' gutterBottom sx={{ marginBottom: 1 }}>
        {palette.name}
      </Typography>
      <Typography variant='body2' color='text.secondary' paragraph>
        Explore the exported color formats for this palette.
      </Typography>

      <Box sx={{ display: 'grid', gridTemplateColumns: 'repeat(8, 1fr)', gap: 1, mb: 3 }}>
        {colorList.map((color) => (
          <Box
            key={color.hex}
            sx={{
              height: 72,
              borderRadius: 1,
              backgroundColor: `#${color.hex}`,
              border: '1px solid rgba(0,0,0,0.08)',
            }}
            title={`${color.name} #${color.hex}`}
          />
        ))}
      </Box>

      <Box
        sx={{
          textAlign: 'left',
          backgroundColor: '#f7f0ea',
          borderRadius: 2,
          p: 2,
          mb: 2,
          fontFamily: 'Monospace, monospace',
          fontSize: '0.85rem',
          whiteSpace: 'pre-wrap',
        }}
      >
        <Typography component='div' sx={{ mb: 1, fontWeight: 600 }}>
          CSV
        </Typography>
        <Typography component='div' sx={{ mb: 1 }}>
          {palette.csv}
        </Typography>
        <Typography component='div' sx={{ mb: 1, fontWeight: 600 }}>
          Hex List
        </Typography>
        <Typography component='div' sx={{ mb: 1 }}>
          {palette.withHash}
        </Typography>
        <Typography component='div' sx={{ mb: 1, fontWeight: 600 }}>
          JSON Array
        </Typography>
        <Typography component='div' sx={{ mb: 1 }}>
          {palette.array}
        </Typography>
        <Typography component='div' sx={{ mb: 1, fontWeight: 600 }}>
          JSON Object
        </Typography>
        <Typography component='div' sx={{ mb: 1 }}>
          {palette.object}
        </Typography>
        <Typography component='div' sx={{ mb: 1, fontWeight: 600 }}>
          Extended JSON
        </Typography>
        <Typography component='div' sx={{ mb: 1 }}>
          {palette.extendedArray}
        </Typography>
        <Typography component='div' sx={{ fontWeight: 600 }}>
          XML
        </Typography>
        <Typography component='div'>{palette.xml}</Typography>
      </Box>

      <Button
        variant='contained'
        size='large'
        sx={{
          marginTop: 1,
          width: '100%',
          background: `linear-gradient(135deg, ${GRADIENT_PRIMARY} 0%, ${GRADIENT_SECONDARY} 100%)`,
        }}
        onClick={() => navigator.clipboard.writeText(palette.csv)}
      >
        Copy CSV
      </Button>
    </Paper>
  );
};

export default PaletteView;
