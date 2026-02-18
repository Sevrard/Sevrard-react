import { useState } from 'react';
import { Drawer,Box,Typography,List,ListItem,ListItemButton,ListItemIcon,ListItemText,Divider,Collapse } from '@mui/material';
import { Stack } from '@mui/material';

import CodeIcon from '@mui/icons-material/Code';
import GitHubIcon from '@mui/icons-material/GitHub';
import TerminalIcon from '@mui/icons-material/Terminal';
import SportsEsportsIcon from '@mui/icons-material/SportsEsports';
import ExpandLess from '@mui/icons-material/ExpandLess';
import ExpandMore from '@mui/icons-material/ExpandMore';
import LanguageIcon from '@mui/icons-material/Language';
import RocketLaunchIcon from '@mui/icons-material/RocketLaunch';
import PaletteIcon from '@mui/icons-material/Palette';

interface Props {
  open: boolean;
  onClose: () => void;
  themeName: string;
}

const NavigationDrawer = ({ open, onClose, themeName }: Props) => {
  const [openAngular, setOpenAngular] = useState(true);
  const [openReact, setOpenReact] = useState(true);

  const styleSubItem = { pl: 4, '&:hover': { backgroundColor: 'rgba(255,255,255,0.05)' } };

  return (
    <Drawer
      anchor="left"
      open={open}
      onClose={onClose}
      disableScrollLock
      PaperProps={{
        sx: {
          background: 'rgba(31, 46, 56, 0.95)',
          backdropFilter: 'blur(10px)',
          color: '#fff',
          width: 280,
          borderRight: '1px solid rgba(255,255,255,0.1)'
        }
      }}
    >
      <Box sx={{ height: '100%', display: 'flex', flexDirection: 'column' }}>
        
        <Box sx={{ p: 3, display: 'flex', alignItems: 'center', gap: 2 }}>
          <RocketLaunchIcon sx={{ color: '#e91e63' }} />
          <Typography variant="h6" sx={{ fontWeight: 700, letterSpacing: 1 }}>
            NAVIGATION
          </Typography>
        </Box>

        <Divider sx={{ borderColor: 'rgba(255,255,255,0.1)' }} />

        <List sx={{ flexGrow: 1, pt: 2 }}>
          
          <ListItem disablePadding>
            <ListItemButton onClick={() => setOpenAngular(!openAngular)}>
              <ListItemIcon><CodeIcon sx={{ color: '#dd0031' }} /></ListItemIcon>
              <ListItemText primary="Angular DEMO" primaryTypographyProps={{ fontWeight: 600 }} />
              {openAngular ? <ExpandLess /> : <ExpandMore />}
            </ListItemButton>
          </ListItem>
          
          <Collapse in={openAngular} timeout="auto" unmountOnExit>

            <List component="div" disablePadding>
              <ListItemButton  sx={styleSubItem} component="a" href="https://demo.fuky.synology.me" target="_blank">
                <ListItemIcon><LanguageIcon sx={{ fontSize: 20, color: 'rgba(255,255,255,0.7)' }} /></ListItemIcon>
                <ListItemText primary="Live Demo" secondary="demo.fuky.synology.me" secondaryTypographyProps={{ fontSize: '0.7rem', color: 'rgba(255,255,255,0.5)' }} />
              </ListItemButton>

              <ListItemButton sx={styleSubItem} component="a" href="https://github.com/Sevrard/mybank-angular-dashboard" target="_blank">
                <ListItemIcon><GitHubIcon sx={{ fontSize: 20, color: 'rgba(255,255,255,0.7)' }} /></ListItemIcon>
                <ListItemText primary="GitHub Front" />
              </ListItemButton>

              <ListItemButton sx={styleSubItem} component="a" href="https://github.com/Sevrard/mybank-Spring-boot-API" target="_blank">
                <ListItemIcon><TerminalIcon sx={{ fontSize: 20, color: 'rgba(255,255,255,0.7)' }} /></ListItemIcon>
                <ListItemText primary="GitHub Back" />
              </ListItemButton>
            </List>
          </Collapse>

          <Box sx={{ my: 2 }} />

          <ListItem disablePadding>
            <ListItemButton onClick={() => setOpenReact(!openReact)}>
              <ListItemIcon><SportsEsportsIcon sx={{ color: '#61dafb' }} /></ListItemIcon>
              <ListItemText primary="React Project" primaryTypographyProps={{ fontWeight: 600 }} />
              {openReact ? <ExpandLess /> : <ExpandMore />}
            </ListItemButton>
          </ListItem>

          <Collapse in={openReact} timeout="auto" unmountOnExit>
            <List component="div" disablePadding>
              <ListItemButton  sx={styleSubItem}  component="a" href="https://game.fuky.synology.me" target="_blank">
                <ListItemIcon><LanguageIcon sx={{ fontSize: 20, color: 'rgba(255,255,255,0.7)' }} /></ListItemIcon>
                <ListItemText primary="Mille Sabords" secondary="game.fuky.synology.me" secondaryTypographyProps={{ fontSize: '0.7rem', color: 'rgba(255,255,255,0.5)' }} />
              </ListItemButton>
            </List>
          </Collapse>

        </List>

        <Box sx={{ p: 2, backgroundColor: 'rgba(0,0,0,0.2)' }}>
          <Stack direction="row" alignItems="center" spacing={1}>
            <PaletteIcon sx={{ fontSize: 16, opacity: 0.6 }} />
            <Typography variant="caption" sx={{ opacity: 0.6, textTransform: 'uppercase' }}>
              Theme: {themeName}
            </Typography>
          </Stack>
        </Box>

      </Box>
    </Drawer>
  );
};

export default NavigationDrawer;