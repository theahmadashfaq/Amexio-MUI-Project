// src/components/ChallengesSection.jsx
import React from 'react';
import { Box, Typography, Grid } from '@mui/material';
import ChallengeCard from './common/ChallengeCard';
import WarningIcon from '@mui/icons-material/Warning';
import SettingsIcon from '@mui/icons-material/Settings';
import PowerIcon from '@mui/icons-material/Power';
import SecurityIcon from '@mui/icons-material/Security';

const CHALLENGES_DATA = [
  { 
    icon: <WarningIcon />, 
    title: "Lack of content governance", 
    desc: "No clear ownership and governance leads to inconsistent content and messaging." 
  },
  { 
    icon: <SettingsIcon />, 
    title: "Inconsistencies across channels", 
    desc: "A growing number of channels and touchpoints make it difficult to maintain consistency." 
  },
  { 
    icon: <PowerIcon />, 
    title: "Disconnect between business and IT", 
    desc: "Lack of integration between systems and teams slows down content delivery and innovation." 
  },
  { 
    icon: <SecurityIcon />, 
    title: "Security and compliance risks", 
    desc: "Managing content at scale increases risks related to security, privacy, and compliance." 
  }
];

const ChallengesSection = () => {
  return (
    <Box sx={{ position: 'relative', mb: 4 }}>
      <Typography 
        variant="h3" 
        sx={{ 
          mb: 1,
          fontSize: { xs: '0.8rem', sm: '0.9rem' },
          fontWeight: 600
        }}
      >
        Managing content at scale can be challenging
      </Typography>
      
      <Typography 
        sx={{ 
          mb: 2, 
          display: 'block',
          color: '#D9D9D9',
          fontSize: { xs: '0.5rem', sm: '0.6rem' },
          maxWidth: { xs: 280, sm: 320, md: 350, lg: 400 }
        }}
      >
        Many global brands struggle to control, curate, and deliver
        content at scale. This results in inconsistent experiences,
        inefficiencies, and lost revenue. Amexio Fine helps you overcome
        these challenges by connecting content, technology, and people.
      </Typography>
      
      <Box 
        component="img" 
        src="https://storage.googleapis.com/a1aa/image/e64badf6-16a9-4aef-01cb-54f466d19f26.jpg" 
        alt="Decorative shapes" 
        sx={{ 
          position: 'absolute', 
          top: 0, 
          right: 0, 
          width: 80, 
          height: 80, 
          opacity: 0.3, 
          pointerEvents: 'none' 
        }}
      />
      
      <Grid container spacing={1.5} sx={{ mt: 1 }}>
        {CHALLENGES_DATA.map((challenge, index) => (
          <Grid item xs={12} sm={3} key={index}>
            <ChallengeCard 
              icon={challenge.icon}
              title={challenge.title}
              description={challenge.desc}
            />
          </Grid>
        ))}
      </Grid>
    </Box>
  );
};

export default ChallengesSection;