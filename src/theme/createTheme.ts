import { createTheme } from '@mui/material/styles';

export const buildTheme = (config: any) => {
  return createTheme({
    palette: {
      mode: config.mode,
      primary: { main: config.primary },
      secondary: { main: config.secondary },
    }
  });
};
