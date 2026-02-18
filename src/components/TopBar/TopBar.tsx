import React, { useState } from 'react';
import { AppBar, Toolbar, Box, ToggleButton, ToggleButtonGroup, IconButton, Menu, MenuItem, Typography, Radio, Stack } from '@mui/material';
import DarkModeIcon from '@mui/icons-material/DarkMode';
import WallpaperIcon from '@mui/icons-material/Wallpaper';
import MenuIcon from '@mui/icons-material/Menu';

import { useThemeContext } from '../../app/providers/ThemeProvider';
import NavigationDrawer from './NavigationDrawer';
import { useTranslation } from 'react-i18next';

interface TopBarProps {
  onChangeBg: () => void;
}

const themes = [
  { id: 'pink-bluegrey', label: 'Pink & Blue Grey', colors: ['#e91e63', '#607d8b'] },
  { id: 'purple-green', label: 'Purple & Green', colors: ['#9c27b0', '#4caf50'] },
  { id: 'indigo-pink', label: 'Indigo & Pink', colors: ['#3f51b5', '#e91e63'] },
  { id: 'deep-purple-amber', label: 'Deep Purple & Amber', colors: ['#673ab7', '#ffc107'] },
];

const TopBar = ({ onChangeBg }: TopBarProps) => {

  const { i18n, t } = useTranslation();
  const currentLanguage = i18n.language;
  const [anchorEl, setAnchorEl] = useState<null | HTMLElement>(null);
  const [drawerOpen, setDrawerOpen] = useState(false);
  const { setThemeName, themeName } = useThemeContext();

  const handleLanguageChange = (_: any, newLang: string) => {
    if (newLang) i18n.changeLanguage(newLang);

  };

  const handleThemeSelect = (themeId: string) => {
    setThemeName(themeId as any);
    setAnchorEl(null);
  };

  return (
    <>
      <AppBar
        position="fixed"
        elevation={0}
        sx={{
          background: 'rgba(0,0,0,0)',
          backdropFilter: 'blur(10px)',
        }}
      >
        <Toolbar sx={{ justifyContent: 'space-between' }}>

          <Box sx={{display:'flex', flexDirection:'row', gap:'20px' }}>
            <IconButton onClick={() => setDrawerOpen(true)} sx={{ color: 'white' }}>
              <MenuIcon />
            </IconButton>
            <Typography sx={{ fontSize:'15px' , alignSelf:'center', color:'#67696b' }}>
                {t('topbar.selfHosted')}
            </Typography>
          </Box>



          <Box sx={{ display: 'flex', alignItems: 'center', gap: 2 }}>

            <ToggleButtonGroup
              value={currentLanguage}
              exclusive
              onChange={handleLanguageChange}
              size="small"
              sx={{
                display: { xs: 'none', md: 'flex' },
                border: '0px',
                '& .MuiToggleButton-root': {
                  color: 'white',
                  border: 'none'
                }
              }}
            >
              <ToggleButton value="fr">🇫🇷</ToggleButton>
              <ToggleButton value="en">🇬🇧</ToggleButton>
            </ToggleButtonGroup>

            <IconButton onClick={onChangeBg} sx={{ color: 'white' }}>
              <WallpaperIcon />
            </IconButton>

            <IconButton onClick={(e) => setAnchorEl(e.currentTarget)} sx={{ color: 'white' }}>
              <DarkModeIcon />
            </IconButton>

            <Menu anchorEl={anchorEl} open={Boolean(anchorEl)} onClose={() => setAnchorEl(null)}>
              {themes.map((t) => (
                <MenuItem key={t.id} onClick={() => handleThemeSelect(t.id)}>
                  <Stack direction="row" alignItems="center" spacing={2} sx={{ width: '100%' }}>
                    <Radio checked={themeName === t.id} />
                    <Typography sx={{ flexGrow: 1 }}>{t.label}</Typography>
                  </Stack>
                </MenuItem>
              ))}
            </Menu>

          </Box>
        </Toolbar>
      </AppBar>

      <NavigationDrawer open={drawerOpen} onClose={() => setDrawerOpen(false)} themeName={themeName} />
    </>
  );
};

export default TopBar;
