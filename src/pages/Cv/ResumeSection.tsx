import { Typography, Box } from '@mui/material';
import { useTranslation } from 'react-i18next';

const ResumeSection = () => {
  const { t } = useTranslation();

  // 1. RÉSUMÉ PROFIL (La Vision)
  const summaryPoints = [
    t('resume.summary_1'),
    t('resume.summary_2'),
    t('resume.summary_3'),
    t('resume.summary_4'),
  ];

  // 2. POINTS FORTS (L'Action)
  const pointsForts = [
    t('resume.points_forts_1'),
    t('resume.points_forts_2'),
    t('resume.points_forts_3'),
    t('resume.points_forts_4'),
    t('resume.points_forts_5'),
    t('resume.points_forts_6'),
  ];

  // 3. ENVIRONNEMENT TECHNIQUE CLÉ
  const envKeys = [
    { label: t('resume.env_frontend', 'Front-end'), value: t('resume.env_frontend_value') },
    { label: t('resume.env_backend', 'Back-end'), value: t('resume.env_backend_value') },
    { label: t('resume.env_qualite', 'Qualité / Tests'), value: t('resume.env_qualite_value') },
    { label: t('resume.env_devops', 'DevOps / Cloud'), value: t('resume.env_devops_value') },
    { label: t('resume.env_methodo', 'Méthodologie'), value: t('resume.env_methodo_value') },
    { label: t('resume.env_projets', 'Gestion de projet'), value: t('resume.env_projets_value') },
  ];

  // 4. HOBBIES
  const hobbies = [
    t('resume.hobby_1', 'Impression 3D'), 
    t('resume.hobby_2', 'VTT'), 
    t('resume.hobby_3', 'Rando'), 
    t('resume.hobby_4', 'Airsoft')
  ];

  return (
    <Box
      sx={{
        color: 'white',
        maxHeight: '60vh',
        overflowY: 'auto',
        mt: 0,
        p: { xs: 2, md: 4 },
        '&::-webkit-scrollbar': { width: '6px' },
        '&::-webkit-scrollbar-thumb': {
          backgroundColor: 'rgba(255,255,255,0.1)',
          borderRadius: '10px',
        },
      }}
    >
      {/* EN-TÊTE PROFIL */}
      <Box sx={{ mb: 3 }}>
        <Typography variant="overline" sx={{ color: 'var(--primary-color)', letterSpacing: 1, fontWeight: 'bold' }}>
          {t('resume.profil_type', 'PROFIL')}
        </Typography>
        <Typography variant="h6" sx={{ fontWeight: 'bold', mt: 0.5 }}>
          {t('resume.profil_poste', 'Développeur Full-Stack')}
        </Typography>
        <Typography variant="body2" sx={{ color: 'rgba(255,255,255,0.7)' }}>
          {t('resume.disponibilite', 'Disponibilité')} : {t('resume.disponibilite_value', 'immédiate')}
        </Typography>
      </Box>

      {/* SECTION : RÉSUMÉ PROFIL */}
      <Box sx={{ mb: 4 }}>
        <Typography variant="subtitle2" sx={{ color: 'var(--primary-color)', fontWeight: 'bold', mb: 1.5, textTransform: 'uppercase', letterSpacing: 0.5 }}>
          {t('resume.resume_profil_title', 'Résumé profil')}
        </Typography>
        <Box component="ul" sx={{ m: 0, pl: 2.5, color: 'rgba(255,255,255,0.9)', '& li': { mb: 1, lineHeight: 1.6 } }}>
          {summaryPoints.map((point, i) => (
            <li key={`summary-${i}`}>
              <Typography variant="body2" component="span">{point}</Typography>
            </li>
          ))}
        </Box>
      </Box>

      {/* SECTION : ENVIRONNEMENT TECHNIQUE */}
      <Box sx={{ mb: 4 }}>
        <Typography variant="subtitle2" sx={{ color: 'var(--primary-color)', fontWeight: 'bold', mb: 2, textTransform: 'uppercase', letterSpacing: 0.5 }}>
          {t('resume.env_technique_title', 'Environnement technique')}
        </Typography>

        {/* Sous-section : Points forts */}
        <Typography variant="caption" sx={{ color: 'rgba(255,255,255,0.8)', fontWeight: 'bold', display: 'block', mb: 1 }}>
          {t('resume.points_forts_title', 'Points forts')}
        </Typography>
        <Box component="ul" sx={{ m: 0, pl: 2.5, mb: 3, '& li': { mb: 1, lineHeight: 1.5 } }}>
          {pointsForts.map((point, i) => (
            <li key={`strong-point-${i}`}>
              <Typography variant="body2" component="span" sx={{ color: 'rgba(255,255,255,0.85)' }}>{point}</Typography>
            </li>
          ))}
        </Box>

        {/* Sous-section : Environnement clé */}
        <Typography variant="caption" sx={{ color: 'rgba(255,255,255,0.8)', fontWeight: 'bold', display: 'block', mb: 1 }}>
          {t('resume.env_cle_title', 'Environnement technique clé')}
        </Typography>
        <Box sx={{ display: 'flex', flexDirection: 'column', gap: 1 }}>
          {envKeys.map(({ label, value }, index) => (
            <Box key={`env-key-${index}`} sx={{ display: 'flex', flexWrap: 'wrap', gap: 0.5, alignItems: 'baseline' }}>
              <Typography variant="body2" component="span" sx={{ color: 'var(--primary-color)', fontWeight: 'bold', minWidth: { xs: '100%', sm: 140 } }}>
                {label} :
              </Typography>
              <Typography variant="body2" component="span" sx={{ color: 'rgba(255,255,255,0.85)' }}>
                {value}
              </Typography>
            </Box>
          ))}
        </Box>
      </Box>

      {/* SECTION : HOBBIES */}
      <Box>
        <Typography variant="subtitle2" sx={{ color: 'var(--primary-color)', fontWeight: 'bold', mb: 1, textTransform: 'uppercase', letterSpacing: 0.5 }}>
          {t('resume.hobby_title', 'Hobby')}
        </Typography>
        <Typography variant="body2" sx={{ color: 'rgba(255,255,255,0.85)' }}>
          {hobbies.join(' • ')}
        </Typography>
      </Box>
    </Box>
  );
};

export default ResumeSection;