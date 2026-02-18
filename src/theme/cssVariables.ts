import type { Theme } from '@mui/material/styles';

export const applyCssVariables = (theme: Theme) => {
  const root = document.documentElement;

  const { palette } = theme;

  root.style.setProperty('--mat-primary', palette.primary.main);
  root.style.setProperty('--mat-primary-dark', palette.primary.dark);
  root.style.setProperty('--mat-primary-light', palette.primary.light);

  root.style.setProperty('--mat-accent', palette.secondary.main);

  root.style.setProperty('--mat-bg', palette.background.default);
  root.style.setProperty('--mat-card', palette.background.paper);

  root.style.setProperty('--mat-text', palette.text.primary);
  root.style.setProperty('--mat-text-sec', palette.text.secondary);
  root.style.setProperty('--mat-divider', palette.divider);

  root.style.setProperty('--mat-accent-soft', `${palette.secondary.main}22`);
};
