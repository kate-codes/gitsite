import React from 'react';
import { Box, Chip, Divider, Paper, Typography } from '@mui/material';
import SchoolOutlinedIcon from '@mui/icons-material/SchoolOutlined';
import CodeOutlinedIcon from '@mui/icons-material/CodeOutlined';
import TimelineOutlinedIcon from '@mui/icons-material/TimelineOutlined';
import BuildOutlinedIcon from '@mui/icons-material/BuildOutlined';
import AccountTreeOutlinedIcon from '@mui/icons-material/AccountTreeOutlined';
import BrushOutlinedIcon from '@mui/icons-material/BrushOutlined';
import ComputerOutlinedIcon from '@mui/icons-material/ComputerOutlined';
import LightbulbOutlinedIcon from '@mui/icons-material/LightbulbOutlined';
import LanguageOutlinedIcon from '@mui/icons-material/LanguageOutlined';
import { EDUCATION, SKILL_CATEGORIES } from '../constants';
import { useColorTheme } from '../context/ColorThemeContext';

const CATEGORY_ICONS: Record<string, React.ReactNode> = {
  software: <CodeOutlinedIcon fontSize='small' />,
  ml: <TimelineOutlinedIcon fontSize='small' />,
  devtools: <BuildOutlinedIcon fontSize='small' />,
  workflow: <AccountTreeOutlinedIcon fontSize='small' />,
  design: <BrushOutlinedIcon fontSize='small' />,
  os: <ComputerOutlinedIcon fontSize='small' />,
  general: <LightbulbOutlinedIcon fontSize='small' />,
  languages: <LanguageOutlinedIcon fontSize='small' />,
};

const ResumeSidebar: React.FC = () => {
  const { colors } = useColorTheme();

  return (
    <Paper
      elevation={3}
      sx={{
        padding: { xs: 3, sm: 4 },
        width: { xs: '100%', md: 280 },
        flexShrink: 0,
        borderRadius: 2,
        backgroundColor: colors.paperBackground,
        borderTop: `4px solid ${colors.cardAccentBorder}`,
        alignSelf: 'flex-start',
      }}
    >
      <Typography variant='h6' sx={{ color: colors.resumeHeadingText, fontWeight: 700, mb: 2 }}>
        At-a-glance
      </Typography>

      <Box sx={{ display: 'flex', alignItems: 'flex-start', gap: 1, mb: 2 }}>
        <Box sx={{ color: colors.resumeAccent, mt: 0.3, flexShrink: 0 }}>
          <SchoolOutlinedIcon fontSize='small' />
        </Box>
        <Box>
          <Typography
            variant='caption'
            sx={{
              color: colors.resumeSubheadingText,
              fontWeight: 700,
              display: 'block',
              textTransform: 'uppercase',
              letterSpacing: 0.6,
              mb: 0.25,
            }}
          >
            Education
          </Typography>
          <Typography
            variant='body2'
            sx={{ color: colors.resumeHeadingText, fontWeight: 600, lineHeight: 1.4 }}
          >
            {EDUCATION.degree}
          </Typography>
          <Typography
            variant='caption'
            sx={{ color: colors.resumeBodyText, display: 'block', lineHeight: 1.4 }}
          >
            {EDUCATION.institution}
          </Typography>
          <Typography variant='caption' sx={{ color: colors.resumeMutedText }}>
            {EDUCATION.location} · {EDUCATION.graduated}
          </Typography>
        </Box>
      </Box>

      <Divider sx={{ mb: 2, borderColor: colors.resumeAccent, opacity: 0.4 }} />

      {SKILL_CATEGORIES.map((category, i) => (
        <Box key={category.key} sx={{ mb: i < SKILL_CATEGORIES.length - 1 ? 2 : 0 }}>
          <Box sx={{ display: 'flex', alignItems: 'center', gap: 0.75, mb: 0.75 }}>
            <Box sx={{ color: colors.resumeAccent, display: 'flex', alignItems: 'center' }}>
              {CATEGORY_ICONS[category.key]}
            </Box>
            <Typography
              variant='caption'
              sx={{
                color: colors.resumeSubheadingText,
                fontWeight: 700,
                textTransform: 'uppercase',
                letterSpacing: 0.6,
              }}
            >
              {category.label}
            </Typography>
          </Box>
          <Box sx={{ display: 'flex', flexWrap: 'wrap', gap: 0.5 }}>
            {category.skills.map((skill) => (
              <Chip
                key={skill}
                label={skill}
                size='small'
                sx={{
                  height: 20,
                  fontSize: '0.68rem',
                  backgroundColor: `${colors.resumeAccent}22`,
                  color: colors.resumeBodyText,
                  border: `1px solid ${colors.resumeAccent}55`,
                  borderRadius: '4px',
                  '& .MuiChip-label': { px: 0.75 },
                }}
              />
            ))}
          </Box>
        </Box>
      ))}
    </Paper>
  );
};

export default ResumeSidebar;
