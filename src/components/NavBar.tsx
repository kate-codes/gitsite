import React, { useRef, useLayoutEffect } from 'react';
import { AppBar, Toolbar, Box, Button, Avatar } from '@mui/material';
import { NavLink, useNavigate } from 'react-router-dom';
import githubLogo from '../assets/images/github_logo.png';
import { palette } from '../theme/palette';
import { DISPLAY_NAME } from '../constants';
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
    <AppBar position='static' elevation={2} sx={{ backgroundColor: palette.colors.ashBrown.hex }}>
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
                  color: palette.colors.floralWhite.hex,
                  textTransform: 'none',
                  fontSize: '0.95rem',
                  fontWeight: isActive ? 700 : 400,
                  borderBottom: isActive
                    ? `2px solid ${palette.colors.rosyTaupe.hex}`
                    : '2px solid transparent',
                  borderRadius: 0,
                  '&:hover': { backgroundColor: `${palette.colors.smokyRose.hex}40` },
                }}
              >
                {label}
              </Button>
            )}
          </NavLink>
        ))}
      </Toolbar>
    </AppBar>
  );
};

export default NavBar;
