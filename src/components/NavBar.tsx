import React, { useRef, useLayoutEffect, useState } from 'react';
import {
  AppBar,
  Toolbar,
  Box,
  Button,
  Avatar,
  Switch,
  Drawer,
  IconButton,
  List,
  ListItemButton,
  ListItemText,
  useMediaQuery,
} from '@mui/material';
import Brightness7Icon from '@mui/icons-material/Brightness7';
import Brightness4Icon from '@mui/icons-material/Brightness4';
import MenuIcon from '@mui/icons-material/Menu';
import CloseIcon from '@mui/icons-material/Close';
import { NavLink, useNavigate } from 'react-router-dom';
import githubLogo from '../assets/images/github_logo.png';
import { DISPLAY_NAME } from '../constants';
import { useColorTheme } from '../context/ColorThemeContext';
import '../styles/NavBar.css';

const NAV_ITEMS = [
  { label: 'About', path: '/about' },
  { label: 'Resume', path: '/resume' },
  { label: 'Projects', path: '/projects' },
  { label: 'Contact', path: '/contact' },
];

const NavBar: React.FC = () => {
  const nameRef = useRef<HTMLSpanElement>(null);
  const navigate = useNavigate();
  const isDesktop = useMediaQuery('(min-width: 960px)');
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
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

  const handleNavigate = (path: string) => {
    navigate(path);
    setMobileMenuOpen(false);
  };

  const themeToggle = (
    <Box sx={{ display: 'flex', alignItems: 'center' }}>
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
  );

  return (
    <>
      <AppBar
        position='static'
        elevation={2}
        sx={{ backgroundColor: colors.headerBackground, transition: 'background-color 0.3s ease' }}
      >
        <Toolbar sx={{ minHeight: { xs: 64, sm: 72 }, gap: 1 }}>
          <Box sx={{ display: 'flex', alignItems: 'center', minWidth: 0, flexGrow: 1 }}>
            <Avatar
              src={githubLogo}
              alt='Home'
              onClick={() => navigate('/')}
              sx={{ width: 36, height: 36, cursor: 'pointer', flexShrink: 0 }}
            />
            <span
              ref={nameRef}
              className='typewriter-name'
              onClick={() => navigate('/')}
              style={{ cursor: 'pointer' }}
            >
              {DISPLAY_NAME}
            </span>
          </Box>

          {isDesktop ? (
            <>
              <Box sx={{ display: 'flex', flexWrap: 'wrap', justifyContent: 'flex-end' }}>
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
              </Box>
              {themeToggle}
            </>
          ) : (
            <Box sx={{ display: 'flex', alignItems: 'center', gap: 0.5 }}>
              {themeToggle}
              <IconButton
                onClick={() => setMobileMenuOpen(true)}
                edge='end'
                sx={{ color: colors.headerText, ml: 0.25 }}
                aria-label='Open navigation menu'
              >
                <MenuIcon />
              </IconButton>
            </Box>
          )}
        </Toolbar>
      </AppBar>

      <Drawer
        anchor='right'
        open={mobileMenuOpen}
        onClose={() => setMobileMenuOpen(false)}
        PaperProps={{
          sx: {
            width: 220,
            backgroundColor: colors.headerBackground,
            color: colors.headerText,
          },
        }}
      >
        <Box sx={{ display: 'flex', justifyContent: 'flex-end', p: 1 }}>
          <IconButton
            onClick={() => setMobileMenuOpen(false)}
            sx={{ color: colors.headerText }}
            aria-label='Close navigation menu'
          >
            <CloseIcon />
          </IconButton>
        </Box>
        <List>
          {NAV_ITEMS.map(({ label, path }) => (
            <ListItemButton key={path} onClick={() => handleNavigate(path)}>
              <ListItemText
                primary={label}
                sx={{ '& .MuiListItemText-primary': { color: colors.headerText } }}
              />
            </ListItemButton>
          ))}
        </List>
      </Drawer>
    </>
  );
};

export default NavBar;
