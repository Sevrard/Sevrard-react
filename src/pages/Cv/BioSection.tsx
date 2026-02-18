import { Typography } from '@mui/material';
import { useTranslation } from 'react-i18next';

const BioSection = () => {
  const { t } = useTranslation();

  return (
    <div className="bio-section">
      <Typography variant="h1" className="script-font">
        {t('cv.greeting', 'Bonjour.')}
      </Typography>

      <Typography variant="h5" sx={{ mb: 3, fontWeight: 300 }}>
        {t('cv.intro_title', 'Quelques mots de présentation..')}
      </Typography>

      <Typography paragraph className="bio-text">
        {t('cv.bio_p1', "Je m'appelle Stéphane...")}
      </Typography>

      <Typography paragraph className="bio-text">
        {t('cv.bio_p2', "Habitué à travailler...")}
      </Typography>
    </div>
  );
};

export default BioSection;