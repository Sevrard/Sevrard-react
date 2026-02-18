import React, { createContext, useContext, useEffect, useMemo, useState } from 'react';
import { ThemeProvider as MuiThemeProvider } from '@mui/material/styles';
import { themes } from '../../theme/theme';
import { buildTheme } from '../../theme/createTheme';
import { applyCssVariables } from '../../theme/cssVariables';

type ThemeKey = keyof typeof themes;

const ThemeContext = createContext<any>(null);

export const useThemeContext = () => useContext(ThemeContext);

export const AppThemeProvider = ({ children }: { children: React.ReactNode }) => {
  const [themeName, setThemeName] = useState<ThemeKey>(() => {
    return (localStorage.getItem('theme') as ThemeKey) || 'indigo-pink';
  });

  const muiTheme = useMemo(() => {
    return buildTheme(themes[themeName]);
  }, [themeName]);

  useEffect(() => {
    localStorage.setItem('theme', themeName);
  }, [themeName]);

  useEffect(() => {
    applyCssVariables(muiTheme);
  }, [muiTheme]);

  return (
    <ThemeContext.Provider value={{ themeName, setThemeName }}>
      <MuiThemeProvider theme={muiTheme}>
        {children}
      </MuiThemeProvider>
    </ThemeContext.Provider>
  );
};
