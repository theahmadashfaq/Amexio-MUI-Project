// src/components/HelpSection.jsx
import React from 'react';
import { Box, Paper, Typography, Button, Grid } from '@mui/material';
import ServiceItem from './common/ServiceItem';
import LightbulbIcon from '@mui/icons-material/Lightbulb';
import EditIcon from '@mui/icons-material/Edit';
import BuildIcon from '@mui/icons-material/Build';
import CodeIcon from '@mui/icons-material/Code';

const SERVICES_DATA = [
  { 
    icon: <LightbulbIcon />, 
    title: "Strategy", 
    desc: "Understand & document key business drivers and goals to create a clear content strategy." 
  },
  { 
    icon: <EditIcon />, 
    title: "Design", 
    desc: "Develop content models, templates, and workflows to support the strategy." 
  },
  { 
    icon: <BuildIcon />, 
    title: "Workflow", 
    desc: "Set up content governance and workflow processes to ensure quality and consistency." 
  },
  { 
    icon: <CodeIcon />, 
    title: "Optimize", 
    desc: "Data-driven measurement and continuous improvement to maximize ROI." 
  }
];

const HelpSection = () => {
  return (
    <Paper 
      sx={{ 
        bgcolor: 'white', 
        p: 2, 
        mb: 4,
        borderRadius: 2
      }}
    >
      <Box sx={{ display: 'flex', justifyContent: 'space-between', alignItems: 'flex-start', mb: 1 }}>
        <Typography 
          variant="h3" 
          sx={{ 
            color: '#1A1A1A',
            fontSize: { xs: '0.8rem', sm: '0.9rem' },
            fontWeight: 600
          }}
        >
          How we can help
        </Typography>
        <Button 
          variant="contained" 
          size="small"
          sx={{
            bgcolor: '#05283B',
            fontSize: { xs: '0.5rem', sm: '0.6rem' },
            borderRadius: 50,
            '&:hover': {
              bgcolor: '#073d5a'
            }
          }}
        >
          View all services
        </Button>
      </Box>
      
      <Typography 
        sx={{ 
          mb: 2, 
          display: 'block',
          color: '#1A1A1A',
          fontSize: { xs: '0.5rem', sm: '0.6rem' },
          maxWidth: { xs: 260, sm: 280, md: 320, lg: 360 }
        }}
      >
        Amexio Fine works with you to solve the entire{" "}
        <Box component="strong">Content Supply Chain</Box> of your organization, from
        strategy to execution, to technology and operations. We help you
        create a content experience platform that delivers personalized,
        consistent, and engaging content across all channels. Our
        services include strategy, design, workflow, and technology
        implementation.
      </Typography>
      
      <Grid container spacing={1.5}>
        {SERVICES_DATA.map((service, index) => (
          <Grid item xs={6} sm={3} key={index}>
            <ServiceItem 
              icon={service.icon}
              title={service.title}
              description={service.desc}
            />
          </Grid>
        ))}
      </Grid>
    </Paper>
  );
};

export default HelpSection;