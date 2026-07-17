import { useState } from 'react';
import { useNavigate } from 'react-router-dom';

export const useMobileNavigation = () => {
  const navigate = useNavigate();
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  const openMenu = () => setMobileMenuOpen(true);
  const closeMenu = () => setMobileMenuOpen(false);

  const handleNavigate = (path: string) => {
    navigate(path);
    setMobileMenuOpen(false);
  };

  return { mobileMenuOpen, openMenu, closeMenu, handleNavigate };
};
