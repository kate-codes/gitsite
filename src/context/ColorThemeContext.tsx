import React, { createContext, useContext, useState } from 'react';
import { ColorTheme, DARK_MODE_COLORS, LIGHT_MODE_COLORS } from '../constants';

interface ColorThemeContextType {
  isDarkMode: boolean;
  colors: ColorTheme;
  toggleDarkMode: () => void;
}

const ColorThemeContext = createContext<ColorThemeContextType>({
  isDarkMode: false,
  colors: LIGHT_MODE_COLORS,
  toggleDarkMode: () => undefined,
});

export const ColorThemeProvider: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  const [isDarkMode, setIsDarkMode] = useState(false);

  return (
    <ColorThemeContext.Provider
      value={{
        isDarkMode,
        colors: isDarkMode ? DARK_MODE_COLORS : LIGHT_MODE_COLORS,
        toggleDarkMode: () => setIsDarkMode((prev) => !prev),
      }}
    >
      {children}
    </ColorThemeContext.Provider>
  );
};

export const useColorTheme = () => useContext(ColorThemeContext);
