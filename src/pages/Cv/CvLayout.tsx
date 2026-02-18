import React, { useState } from 'react';
import { useTranslation } from 'react-i18next';
import { useTheme } from '@mui/material/styles';
import { Typography, Button, IconButton, Box } from '@mui/material';

import HomeIcon from '@mui/icons-material/Home';
import SchoolIcon from '@mui/icons-material/School';
import LinkedInIcon from '@mui/icons-material/LinkedIn';
import GitHubIcon from '@mui/icons-material/GitHub';
import TwitterIcon from '@mui/icons-material/Twitter';
import FacebookIcon from '@mui/icons-material/Facebook';
import DownloadIcon from '@mui/icons-material/Download';

import BioSection from './BioSection'; 
import ResumeSection from './ResumeSection';
import ProfilePic from '../../assets/p2.jpeg'; 
import './CvLayout.css';

const NAV_ITEMS = [
  { id: 'exp', icon: <SchoolIcon />, labelKey: 'sidebar.exp' },
];

export default function CvLayout() {
    const { t } = useTranslation();
    const theme = useTheme();
    const primaryColor = theme.palette.primary.main;

    const [activeSection, setActiveSection] = useState('about');

    const customStyle = {  '--primary-color': primaryColor  } as React.CSSProperties;

    return (
        <div className="cv-container" style={customStyle}>
            <nav className="cv-sidebar">

                <div  className={`sidebar-item ${activeSection === 'home' ? 'active' : ''}`} onClick={() => setActiveSection('about')} >
                    <HomeIcon />
                </div>
                
                {NAV_ITEMS.map((item) => (
                    <div 
                        key={item.id} 
                        className={`sidebar-item ${activeSection === item.id ? 'active' : ''}`}
                        role="button"
                        onClick={() => setActiveSection(item.id)}
                        tabIndex={0}
                    >
                        {item.icon}
                    </div>
                ))}
            </nav>

            <div className="cv-content">
                <div className="cv-grid">
                    
                    <div className="profile-section">
                        <div className="dotted-pattern" />
                        <div className="profile-avatar-container">
                            <img src={ProfilePic} alt="Stephane Evrard" className="profile-img" loading="lazy" />
                        </div>

                        <Typography variant="h4" component="h1" sx={{ fontWeight: 'bold', mb: 0.5 }}>
                            Stephane Evrard
                        </Typography>
                        
                        <Typography variant="subtitle1" sx={{ color: 'rgba(255,255,255,0.6)', textTransform: 'uppercase', fontSize: '0.8rem' }}>
                            {t('cv.role')}
                        </Typography>

                        <Box className="social-links" sx={{ display: 'flex', gap: 1, my: 1 }}>
                            <IconButton aria-label="LinkedIn" sx={{ color: 'white', '&:hover': { color: '#0077b5' } }}><LinkedInIcon /></IconButton>
                            <IconButton aria-label="Facebook" sx={{ color: 'white', '&:hover': { color: '#1877f2' } }}><FacebookIcon /></IconButton>
                            <IconButton aria-label="Twitter" sx={{ color: 'white', '&:hover': { color: '#1da1f2' } }}><TwitterIcon /></IconButton>
                        </Box>

                        <Button 
                            startIcon={<GitHubIcon />} 
                            sx={{ color: primaryColor, textTransform: 'none', fontWeight: 'bold', mb: 2 }}
                            href="https://github.com" target="_blank"
                        >
                            {t('cv.github_cta', 'Github')}
                        </Button>

                        <Button 
                            variant="outlined" 
                            startIcon={<DownloadIcon />}
                            sx={{ color: 'white', borderColor: 'white', borderRadius: '20px', px: 4 }}
                        >
                            {t('cv.download_cv', 'Download CV')}
                        </Button>
                    </div>

                    <div className="dynamic-content">
                        {activeSection === 'about' && <BioSection />}
                        {activeSection === 'exp' &&  <ResumeSection />}
                    </div>

                </div>
            </div>
        </div>
    );
}