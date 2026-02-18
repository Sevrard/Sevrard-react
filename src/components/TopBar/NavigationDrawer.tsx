import { useState } from 'react';
import { Drawer, Box, Typography, List, ListItem, ListItemButton, ListItemIcon, ListItemText, Divider, Collapse, Stack } from '@mui/material';
// Import des icônes Lucide
import {
  Rocket,
  Code2,
  ChevronDown,
  ChevronUp,
  Globe,
  Github,
  Gamepad2,
  Palette
} from 'lucide-react';

interface Props {
  open: boolean;
  onClose: () => void;
  themeName: string;
}

const NavigationDrawer = ({ open, onClose, themeName }: Props) => {
  const [openAngular, setOpenAngular] = useState(true);
  const [openReact, setOpenReact] = useState(true);
  const [openProject, setOpenProject] = useState(true);

  // Style commun pour les icônes Lucide avec la couleur accent
  const iconStyle = { size: 25, color: 'var(--mat-primary)' };
  const subIconStyle = { size: 19, color: 'var(--mat-accent)' };
  const styleSubItem = { pl: 4, minWidth: 15, '&:hover': { backgroundColor: 'rgba(255,255,255,0.05)' } };
  const itemIconSx = { minWidth: '35px', display: 'flex', alignItems: 'center' };

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
          <Rocket size={24} color="var(--mat-accent)" />
          <Typography variant="h6" sx={{ fontWeight: 700, letterSpacing: 1 }}>
            NAVIGATION
          </Typography>
        </Box>

        <Divider sx={{ borderColor: 'rgba(255,255,255,0.1)' }} />

        <List sx={{ flexGrow: 1, pt: 2 }}>

          {/* SECTION ANGULAR */}
          <ListItem disablePadding>
            <ListItemButton onClick={() => setOpenAngular(!openAngular)}>
              <ListItemIcon>
                <Code2 {...iconStyle} />
              </ListItemIcon>
              <ListItemText primary="Angular DEMO" primaryTypographyProps={{ fontWeight: 600 }} />
              {openAngular ? <ChevronUp size={18} /> : <ChevronDown size={18} />}
            </ListItemButton>
          </ListItem>

          <Collapse in={openAngular} timeout="auto" unmountOnExit>
            <List component="div" disablePadding>
              <ListItemButton sx={styleSubItem} component="a" href="https://demo.fuky.synology.me" target="_blank">
                <ListItemIcon sx={itemIconSx}><Globe {...subIconStyle} /></ListItemIcon>
                <ListItemText primary="Live Demo" secondary="demo.fuky.synology.me" secondaryTypographyProps={{ fontSize: '0.7rem', color: 'rgba(255,255,255,0.5)' }} />
              </ListItemButton>

              <ListItemButton sx={styleSubItem} component="a" href="https://github.com/Sevrard/mybank-angular-dashboard" target="_blank">
                <ListItemIcon sx={itemIconSx}><Github {...subIconStyle} /></ListItemIcon>
                <ListItemText primary="GitHub Front" secondary="github.com/Sevrard/mybank-angular-dashboard" secondaryTypographyProps={{ fontSize: '0.7rem', color: 'rgba(255,255,255,0.5)' }} />
              </ListItemButton>

              <ListItemButton sx={styleSubItem} component="a" href="https://github.com/Sevrard/mybank-Spring-boot-API" target="_blank">
                <ListItemIcon sx={itemIconSx}><Github {...subIconStyle} /></ListItemIcon>
                <ListItemText primary="GitHub Back" secondary="github.com/Sevrard/mybank-Spring-boot-API" secondaryTypographyProps={{ fontSize: '0.7rem', color: 'rgba(255,255,255,0.5)' }} />
              </ListItemButton>
            </List>
          </Collapse>

          <Box sx={{ my: 2 }} />

          {/* SECTION REACT */}
          <ListItem disablePadding>
            <ListItemButton onClick={() => setOpenReact(!openReact)}>
              <ListItemIcon>
                <Code2 {...iconStyle} />
              </ListItemIcon>
              <ListItemText primary="React DEMO" primaryTypographyProps={{ fontWeight: 600 }} />
              {openReact ? <ChevronUp size={18} /> : <ChevronDown size={18} />}
            </ListItemButton>
          </ListItem>

          <Collapse in={openReact} timeout="auto" unmountOnExit>
            <List component="div" disablePadding>
              <ListItemButton sx={styleSubItem} component="a" href="https://github.com/Sevrard/Sevrard-react" target="_blank">
                <ListItemIcon sx={itemIconSx}><Github {...subIconStyle} /></ListItemIcon>
                <ListItemText primary="Current site" secondary=" github.com/Sevrard/Sevrard-react" secondaryTypographyProps={{ fontSize: '0.7rem', color: 'rgba(255,255,255,0.5)' }} />

                
              </ListItemButton>
            </List>
          </Collapse>

          <Box sx={{ my: 2 }} />

          {/* SECTION PROJET JEUX */}
          <ListItem disablePadding>
            <ListItemButton onClick={() => setOpenProject(!openProject)}>
              <ListItemIcon>
                <Gamepad2 {...iconStyle} />
              </ListItemIcon>
              <ListItemText primary="React Project" primaryTypographyProps={{ fontWeight: 600 }} />
              {openProject ? <ChevronUp size={18} /> : <ChevronDown size={18} />}
            </ListItemButton>
          </ListItem>

          <Collapse in={openProject} timeout="auto" unmountOnExit>
            <List component="div" disablePadding>
              <ListItemButton sx={styleSubItem} component="a" href="https://game.fuky.synology.me" target="_blank">
                <ListItemIcon sx={itemIconSx}><Globe {...subIconStyle} /></ListItemIcon>
                <ListItemText primary="Mille Sabords" secondary="game.fuky.synology.me" secondaryTypographyProps={{ fontSize: '0.7rem', color: 'rgba(255,255,255,0.5)' }} />
              </ListItemButton>
            </List>
          </Collapse>

        </List>

        {/* FOOTER THEME */}
        <Box sx={{ p: 2, backgroundColor: 'rgba(0,0,0,0.2)' }}>
          <Stack direction="row" alignItems="center" spacing={1}>
            <Palette size={14} style={{ opacity: 0.6 }} />
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