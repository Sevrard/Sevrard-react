import { Typography, Box, Grid as Grid, LinearProgress, Chip } from '@mui/material';
import { List, ListItem, ListItemText, ListItemIcon } from '@mui/material';
import { useTranslation } from 'react-i18next';

const KNOWLEDGES = [
    "API Rest", "Salesforce", "JIRA", "Flyway/Prisma",
    "Datadog", "VScode/InteliJ", "Cursor", "Figma"
];

const BULLET = (
    <Box component="span" sx={{ display: 'inline-flex', width: 6, height: 6, borderRadius: '50%', bgcolor: 'var(--primary-color)', alignSelf: 'center' }} />
);

const SkillBar = ({ label, value }: { label: string; value: number }) => (
    <Box sx={{ mb: 2 }}>
        <Box sx={{ display: 'flex', justifyContent: 'space-between', mb: 0.5 }}>
            <Typography variant="body2" sx={{ fontWeight: 'bold', color: 'white' }}>{label}</Typography>
            <Typography variant="body2" sx={{ color: 'rgba(255,255,255,0.7)' }}>{value}%</Typography>
        </Box>
        <LinearProgress
            variant="determinate"
            value={value}
            sx={{
                height: 4,
                borderRadius: 2,
                backgroundColor: 'rgba(255,255,255,0.1)',
                '& .MuiLinearProgress-bar': { backgroundColor: 'var(--primary-color)' }
            }}
        />
    </Box>
);

const ExpSection = () => {
    const { t } = useTranslation();

    return (
        <Box sx={{
            color: 'white',
            maxHeight: "60vh",
            overflowY: "auto",
            mt: 0,
            p: { xs: 2, md: 4 },
            '&::-webkit-scrollbar': { width: '6px' },
            '&::-webkit-scrollbar-thumb': {
                backgroundColor: 'rgba(255,255,255,0.1)',
                borderRadius: '10px',
            },
        }}
        >
            <Grid container spacing={5}>

                <Grid size={{ xs: 12, md: 9 }}>

                    <Typography variant="h5" className="section-title-dots" sx={{ mb: 4, fontWeight: 'bold' }}>
                        {t('resume.education_title', 'Education')}
                    </Typography>

                    <Box className="timeline">
                        <div className="timeline-item">
                            <div className="timeline-info">
                                <span className="date">2011 - 2014</span>
                                <span className="place">{t('resume.university')}</span>
                            </div>
                            <div className="timeline-marker"></div>
                            <div className="timeline-content">
                                <Typography variant="subtitle1" fontWeight="bold">{t('resume.bac')}</Typography>
                                <Typography variant="body2" sx={{ color: 'rgba(255,255,255,0.5)' }}>
                                    {t('resume.edu_ulco')}
                                </Typography>
                            </div>
                        </div>
                    </Box>

                    <Typography variant="h5" className="section-title-dots" sx={{ mt: 2, mb: 4, fontWeight: 'bold' }}>
                        {t('resume.experience_title', 'Experience')}
                    </Typography>

                    <Box className="timeline">

        {/* KILIBA */}  

                        <div className="timeline-item">
                            <div className="timeline-info">
                                <span className="date">2022 – 2024</span>
                                <span className="place">Kiliba (Paris)</span>
                            </div>
                            <div className="timeline-marker"></div>
                            <div className="timeline-content">
                                <Typography variant="subtitle1" fontWeight="bold">{t('resume.fullstack')}</Typography>
                            <Typography variant="body2" sx={{ fontSize: '0.9rem', color: 'rgba(255,255,255,0.5)', mb: 1 }}>
                                    {t('resume.exp_kiliba_desc')}
                                </Typography>

                                <List dense disablePadding sx={{ py: 0, display: 'block', mb: 2 }}>
                                    {[1, 2, 3, 4, 5, 6 ].map((index) => (
                                        <ListItem key={index} sx={{ alignItems: 'flex-start', py: 0, display: 'flex', mb: 0.5 }}>
                                            <ListItemIcon sx={{ minWidth: 24, mt: 1.4 }}>{BULLET}</ListItemIcon>
                                            <ListItemText
                                                primary={t('resume.exp_kiliba_skill_' + index)}
                                                primaryTypographyProps={{ variant: 'body2', sx: { color: 'rgba(255,255,255,0.5)' } }}
                                            />
                                        </ListItem>
                                    ))}
                                </List>

                                <Typography variant="caption" sx={{ fontWeight: 'bold', color: 'var(--mat-accent)' }}>
                                    Stack : React.js(v18) - Node.js - AWS(Sqs,S3,Lambda) - PostgreSQL/mongoDb
                                </Typography>
                            </div>
                        </div>

        {/* FREELANCE */}

                        <div className="timeline-item">
                            <div className="timeline-info">
                                <span className="date">2021 – 2022</span>
                                <span className="place">Freelance</span>
                            </div>
                            <div className="timeline-marker"></div>
                            <div className="timeline-content">
                                <Typography variant="subtitle1" fontWeight="bold">Developpeur Full-Stack freelance</Typography>
                                <Typography variant="body2" sx={{ color: 'rgba(255,255,255,0.5)', mb: 1 }}>
                                    {t('resume.exp_freelance_desc')}
                                </Typography>
                                <List dense disablePadding sx={{ py: 0, display: 'block', mb: 2 }}>
                                    {[1, 2, 3, 4 ].map((index) => (
                                        <ListItem key={index} sx={{ alignItems: 'flex-start', py: 0, display: 'flex', mb: 0.5 }}>
                                            <ListItemIcon sx={{ minWidth: 24, mt: 1.4 }}>{BULLET}</ListItemIcon>
                                            <ListItemText
                                                primary={t('resume.exp_freelance_skill_' + index)}
                                                primaryTypographyProps={{ variant: 'body2', sx: { color: 'rgba(255,255,255,0.5)' } }}
                                            />
                                        </ListItem>
                                    ))}
                                </List>
                                <Typography variant="caption" sx={{ fontWeight: 'bold', color: 'var(--mat-accent)' }}>
                                    Stack : Angular(v8) - Node.js - Shopify/Prestashop/Magento API
                                </Typography>
                            </div>
                        </div>

        {/* RDV TRANSPORT */}

                        <div className="timeline-item">
                            <div className="timeline-info">
                                <span className="date">2019 – 2021</span>
                                <span className="place">RDV Transport</span>
                            </div>
                            <div className="timeline-marker"></div>
                            <div className="timeline-content">
                                <Typography variant="subtitle1" fontWeight="bold">{t('resume.companyDev')}</Typography>
                                <Typography variant="body2" sx={{ color: 'rgba(255,255,255,0.5)', mb: 1 }}>
                                    {t('resume.exp_rdv_desc')}
                                </Typography>
                                <List dense disablePadding sx={{ py: 0, display: 'block', mb: 2 }}>
                                    {[1, 2, 3, 4, 5].map((index) => (
                                        <ListItem key={index} sx={{ alignItems: 'flex-start', py: 0, display: 'flex', mb: 0.5 }}>
                                            <ListItemIcon sx={{ minWidth: 24, mt: 1.4 }}>{BULLET}</ListItemIcon>
                                            <ListItemText
                                                primary={t('resume.exp_rdv_skill_' + index)}
                                                primaryTypographyProps={{ variant: 'body2', sx: { color: 'rgba(255,255,255,0.5)' } }}
                                            />
                                        </ListItem>
                                    ))}
                                </List>
                                <Typography variant="caption" sx={{ fontWeight: 'bold', color: 'var(--mat-accent)' }}>
                                    Stack : Angular(v7) - Node.js - MongoDb/Strapi
                                </Typography>
                            </div>
                        </div>

        {/* NEOGRAPHIC DIGITAL */}

                        <div className="timeline-item">
                            <div className="timeline-info">
                                <span className="date">2018 (CDD 7 mois)</span>
                                <span className="place">Neographic Digital</span>
                            </div>
                            <div className="timeline-marker"></div>
                            <div className="timeline-content">
                                <Typography variant="subtitle1" fontWeight="bold">{t('resume.fullstack')}</Typography>
                                <Typography variant="body2" sx={{ color: 'rgba(255,255,255,0.5)', mb: 1 }}>
                                    {t('resume.exp_neo_desc')}
                                </Typography>
                                <List dense disablePadding sx={{ py: 0, display: 'block', mb: 2 }}>
                                    {[1, 2, 3, 4, 5].map((index) => (
                                        <ListItem key={index} sx={{ alignItems: 'flex-start', py: 0, display: 'flex', mb: 0.5 }}>
                                            <ListItemIcon sx={{ minWidth: 24, mt: 1.4 }}>{BULLET}</ListItemIcon>
                                            <ListItemText
                                                primary={t('resume.exp_neo_skill_' + index)}
                                                primaryTypographyProps={{ variant: 'body2', sx: { color: 'rgba(255,255,255,0.5)' } }}
                                            />
                                        </ListItem>
                                    ))}
                                </List>
                                <Typography variant="caption" sx={{ fontWeight: 'bold', color: 'var(--mat-accent)' }}>
                                    Stack : React.js(v16) - Electron - Chromium
                                </Typography>
                            </div>
                        </div>

                        <div className="timeline-item">
                            <div className="timeline-info">
                                <span className="date">2016 - 2018</span>
                                <span className="place">Innova-web / Esport-France</span>
                            </div>
                            <div className="timeline-marker"></div>
                            <div className="timeline-content">
                                <Typography variant="subtitle1" fontWeight="bold">{t('resume.assoDev')}</Typography>
                                <Typography variant="body2" sx={{ color: 'rgba(255,255,255,0.5)', mb: 1 }}>
                                    {t('resume.exp_innova_desc')}
                                </Typography>
                                <List dense disablePadding sx={{ py: 0, display: 'block', mb: 2 }}>
                                    {[1, 2, 3, 4, 5 ].map((index) => (
                                        <ListItem key={index} sx={{ alignItems: 'flex-start', py: 0, display: 'flex', mb: 0.5 }}>
                                            <ListItemIcon sx={{ minWidth: 24, mt: 1.4 }}>{BULLET}</ListItemIcon>
                                            <ListItemText
                                                primary={t('resume.exp_innova_skill_' + index)}
                                                primaryTypographyProps={{ variant: 'body2', sx: { color: 'rgba(255,255,255,0.5)' } }}
                                            />
                                        </ListItem>
                                    ))}
                                </List>
                                <Typography variant="caption" sx={{ fontWeight: 'bold', color: 'var(--mat-accent)' }}>
                                    Stack : Zend(php) - PhpMyAdmin
                                </Typography>
                            </div>
                        </div>

                        <div className="timeline-item">
                            <div className="timeline-info">
                                <span className="date">2014 - 2016</span>
                                <span className="place">Maporientation (Maptoomi)</span>
                            </div>
                            <div className="timeline-marker"></div>
                            <div className="timeline-content">
                                <Typography variant="subtitle1" fontWeight="bold">{t('resume.webDev')}</Typography>
                                <Typography variant="body2" sx={{ color: 'rgba(255,255,255,0.5)', mb: 1 }}>
                                    {t('resume.exp_mapo_desc')}
                                </Typography>
                                <Typography variant="caption" sx={{ fontWeight: 'bold', color: 'var(--mat-accent)' }}>
                                    Stack : Zend(php) - MySql
                                </Typography>
                            </div>
                        </div>
                    </Box>
                </Grid>

                <Grid size={{ xs: 12, md: 3 }}>
                    <Typography variant="h5" sx={{ mb: 3, fontWeight: 'bold' }}>
                        Front-end <span style={{ color: 'var(--primary-color)' }}>Skills</span>
                    </Typography>
                    <SkillBar label="Angular (v21)" value={80} />
                    <SkillBar label="React.js (v19)" value={70} />

                    <Typography variant="h5" sx={{ mt: 5, mb: 3, fontWeight: 'bold' }}>
                        Back-end <span style={{ color: 'var(--primary-color)' }}>Skills</span>
                    </Typography>
                    <SkillBar label="Node.js" value={70} />
                    <SkillBar label="Springboot(Java)" value={80} />
                    <SkillBar label="Python" value={50} />

                    <Typography variant="h5" sx={{ mt: 5, mb: 3, fontWeight: 'bold' }}>
                        Dev <span style={{ color: 'var(--primary-color)' }}>Skills</span>
                    </Typography>
                    <SkillBar label="Docker/Github" value={80} />
                    <SkillBar label="Postgre/mongoDb" value={90} />
                    <SkillBar label="AWS (Sqs,S3,Lambda..)" value={60} />
                    <SkillBar label="Llm (cursor+gemini)" value={80} />

                    {/* --- KNOWLEDGES --- */}
                    <Typography variant="h5" sx={{ mt: 5, mb: 3, fontWeight: 'bold' }}>
                        Knowledges <span style={{ color: 'var(--primary-color)' }}>::</span>
                    </Typography>

                    <Box sx={{ display: 'flex', flexWrap: 'wrap', gap: 1 }}>
                        {KNOWLEDGES.map((item) => (
                            <Chip
                                key={item}
                                label={item}
                                sx={{
                                    backgroundColor: 'var(--primary-color)',
                                    color: 'white',
                                    fontWeight: 'bold',
                                    borderRadius: '6px',
                                    '&:hover': { opacity: 0.9 }
                                }}
                            />
                        ))}
                    </Box>
                </Grid>
            </Grid>
        </Box>
    );
};

export default ExpSection;
