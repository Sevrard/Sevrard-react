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
  const [openPortfolio, setOpenPortfolio] = useState(true);
  const [openGithub, setOpenGithub] = useState(true);

  // Style commun pour les icônes Lucide avec la couleur accent
  const iconStyle = { size: 25, color: 'var(--mat-primary)' };
  const subIconStyle = { size: 19, color: 'var(--mat-accent)' };
  const styleSubItem = { pl: 4, minWidth: 15, '&:hover': { backgroundColor: 'rgba(255,255,255,0.05)' } };
  const itemIconSx = { minWidth: '35px', display: 'flex', alignItems: 'center' };
  const subItemPrimaryProps = { fontSize: '0.8rem', fontWeight: 600 };
  const subItemSecondaryProps = { fontSize: '0.7rem', color: 'rgba(255,255,255,0.5)' };

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

          {/* SECTION PORTFOLIO */}
          <ListItem disablePadding>
            <ListItemButton onClick={() => setOpenPortfolio(!openPortfolio)}>
              <ListItemIcon>
                <Globe {...iconStyle} />
              </ListItemIcon>
              <ListItemText primary="Portfolio" primaryTypographyProps={{ fontWeight: 600 }} />
              {openPortfolio ? <ChevronUp size={18} /> : <ChevronDown size={18} />}
            </ListItemButton>
          </ListItem>

          <Collapse in={openPortfolio} timeout="auto" unmountOnExit>
            <List component="div" disablePadding>
              <ListItemButton sx={styleSubItem} component="a" href="https://demo.fuky.synology.me" target="_blank">
                <ListItemIcon sx={itemIconSx}><Code2 {...subIconStyle} /></ListItemIcon>
                <ListItemText primary="Mybank Demo (Angular)" secondary="demo.fuky.synology.me" primaryTypographyProps={subItemPrimaryProps} secondaryTypographyProps={subItemSecondaryProps} />
              </ListItemButton>
              <ListItemButton sx={styleSubItem} component="a" href="https://game.fuky.synology.me" target="_blank">
                <ListItemIcon sx={itemIconSx}><Gamepad2 {...subIconStyle} /></ListItemIcon>
                <ListItemText primary="Game Demo (React)" secondary="game.fuky.synology.me" primaryTypographyProps={subItemPrimaryProps} secondaryTypographyProps={subItemSecondaryProps} />
              </ListItemButton>
              <ListItemButton sx={styleSubItem} component="a" href="https://libero.fuky.synology.me" target="_blank">
                <ListItemIcon sx={itemIconSx}><Code2 {...subIconStyle} /></ListItemIcon>
                <ListItemText primary="Libero (Angular)" secondary="libero.fuky.synology.me" primaryTypographyProps={subItemPrimaryProps} secondaryTypographyProps={subItemSecondaryProps} />
              </ListItemButton>
            </List>
          </Collapse>

          <Box sx={{ my: 2 }} />

          {/* SECTION GITHUB REPOS */}
          <ListItem disablePadding>
            <ListItemButton onClick={() => setOpenGithub(!openGithub)}>
              <ListItemIcon>
                <Github {...iconStyle} />
              </ListItemIcon>
              <ListItemText primary="GitHub repos" primaryTypographyProps={{ fontWeight: 600 }} />
              {openGithub ? <ChevronUp size={18} /> : <ChevronDown size={18} />}
            </ListItemButton>
          </ListItem>

          <Collapse in={openGithub} timeout="auto" unmountOnExit>
            <List component="div" disablePadding>
              <ListItemButton sx={styleSubItem} component="a" href="https://github.com/Sevrard/mybank-angular-dashboard" target="_blank">
                <ListItemIcon sx={itemIconSx}><Github {...subIconStyle} /></ListItemIcon>
                <ListItemText primary="Mybank-frontend (Angular)" secondary="github.com/Sevrard/mybank-angular-dashboard" primaryTypographyProps={subItemPrimaryProps} secondaryTypographyProps={subItemSecondaryProps} />
              </ListItemButton>

              <ListItemButton sx={styleSubItem} component="a" href="https://github.com/Sevrard/mybank-Spring-boot-API" target="_blank">
                <ListItemIcon sx={itemIconSx}><Github {...subIconStyle} /></ListItemIcon>
                <ListItemText primary="Mybank-backend (Springboot)" secondary="github.com/Sevrard/mybank-Spring-boot-API" primaryTypographyProps={subItemPrimaryProps} secondaryTypographyProps={subItemSecondaryProps} />
              </ListItemButton>

              <ListItemButton sx={styleSubItem} component="a" href="https://github.com/Sevrard/Sevrard-react" target="_blank">
                <ListItemIcon sx={itemIconSx}><Github {...subIconStyle} /></ListItemIcon>
                <ListItemText primary="Sevrard (current site)" secondary="github.com/Sevrard/Sevrard-react" primaryTypographyProps={subItemPrimaryProps} secondaryTypographyProps={subItemSecondaryProps} />
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