import React, { useRef, useLayoutEffect } from 'react';
import { AppBar, Toolbar, Box, Button, Avatar } from '@mui/material';
import githubLogo from '../assets/images/github_logo.png';
import { palette } from '../theme/palette';
import { DISPLAY_NAME } from '../constants';
import '../styles/NavBar.css';

const NAV_ITEMS = ['About', 'Experience', 'Projects', 'Contact'];

const NavBar: React.FC = () => {
  const nameRef = useRef<HTMLSpanElement>(null);

  useLayoutEffect(() => {
    const el = nameRef.current;
    if (!el) { return; }
    // CSS animations override inline styles, so disable animation first to get natural width
    el.style.animation = 'none';
    el.style.setProperty('--typewriter-width', `${el.offsetWidth}px`);
    el.style.animation = '';
  }, []);

  return (
    <AppBar position='static' elevation={2} sx={{ backgroundColor: palette.colors.ashBrown.hex }}>
      <Toolbar>
        <Avatar src={githubLogo} alt='Home' sx={{ width: 36, height: 36, cursor: 'pointer' }} />
        <span ref={nameRef} className='typewriter-name'>
          {DISPLAY_NAME}
        </span>
        <Box sx={{ flexGrow: 1 }} />
        {NAV_ITEMS.map((item) => (
          <Button
            key={item}
            sx={{
              color: palette.colors.floralWhite.hex,
              textTransform: 'none',
              fontSize: '0.95rem',
              '&:hover': { backgroundColor: `${palette.colors.smokyRose.hex}40` },
            }}
          >
            {item}
          </Button>
        ))}
      </Toolbar>
    </AppBar>
  );
};

export default NavBar;
