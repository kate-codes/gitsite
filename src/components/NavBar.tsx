import React, { useRef, useLayoutEffect } from 'react';
import { AppBar, Toolbar, Box, Button, Avatar, Switch } from '@mui/material';
import Brightness7Icon from '@mui/icons-material/Brightness7';
import Brightness4Icon from '@mui/icons-material/Brightness4';
import { NavLink, useNavigate } from 'react-router-dom';
import githubLogo from '../assets/images/github_logo.png';
import { DISPLAY_NAME } from '../constants';
import { useColorTheme } from '../context/ColorThemeContext';
import '../styles/NavBar.css';

const NAV_ITEMS = [
  { label: 'About', path: '/about' },
  { label: 'Resume', path: '/resume' },
  { label: 'Experience', path: '/experience' },
  { label: 'Projects', path: '/projects' },
  { label: 'Contact', path: '/contact' },
];

const NavBar: React.FC = () => {
  const nameRef = useRef<HTMLSpanElement>(null);
  const navigate = useNavigate();
  const { isDarkMode, colors, toggleDarkMode } = useColorTheme();

  useLayoutEffect(() => {
    const el = nameRef.current;
    if (!el) {
      return;
    }
    el.style.animation = 'none';
    el.style.setProperty('--typewriter-width', `${el.offsetWidth}px`);
    el.style.animation = '';
  }, []);

  return (
    <AppBar
      position='static'
      elevation={2}
      sx={{ backgroundColor: colors.headerBackground, transition: 'background-color 0.3s ease' }}
    >
      <Toolbar>
        <Avatar
          src={githubLogo}
          alt='Home'
          onClick={() => navigate('/')}
          sx={{ width: 36, height: 36, cursor: 'pointer' }}
        />
        <span
          ref={nameRef}
          className='typewriter-name'
          onClick={() => navigate('/')}
          style={{ cursor: 'pointer' }}
        >
          {DISPLAY_NAME}
        </span>
        <Box sx={{ flexGrow: 1 }} />
        {NAV_ITEMS.map(({ label, path }) => (
          <NavLink key={path} to={path} style={{ textDecoration: 'none' }}>
            {({ isActive }) => (
              <Button
                sx={{
                  color: colors.headerText,
                  textTransform: 'none',
                  fontSize: '0.95rem',
                  fontWeight: isActive ? 700 : 400,
                  borderBottom: isActive
                    ? `2px solid ${colors.headerAccent}`
                    : '2px solid transparent',
                  borderRadius: 0,
                  '&:hover': { backgroundColor: `${colors.headerAccent}40` },
                }}
              >
                {label}
              </Button>
            )}
          </NavLink>
        ))}
        <Box sx={{ display: 'flex', alignItems: 'center', ml: 1.5 }}>
          <Brightness7Icon
            sx={{ color: colors.headerText, fontSize: 18, opacity: isDarkMode ? 0.5 : 1 }}
          />
          <Switch
            checked={isDarkMode}
            onChange={toggleDarkMode}
            size='small'
            sx={{
              mx: 0.25,
              '& .MuiSwitch-switchBase.Mui-checked': { color: colors.headerAccent },
              '& .MuiSwitch-switchBase.Mui-checked + .MuiSwitch-track': {
                backgroundColor: colors.headerAccent,
              },
            }}
          />
          <Brightness4Icon
            sx={{ color: colors.headerText, fontSize: 18, opacity: isDarkMode ? 1 : 0.5 }}
          />
        </Box>
      </Toolbar>
    </AppBar>
  );
};

export default NavBar;
