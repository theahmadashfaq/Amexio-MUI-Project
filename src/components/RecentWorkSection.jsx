// src/components/RecentWorkSection.jsx
import React from 'react';
import { Box, Paper, Typography, Button, Grid, Card, CardContent, CardMedia } from '@mui/material';
import WorkCard from './common/WorkCard';

const RECENT_WORK_DATA = [
  {
    title: "Transforming OECD's Web Presence",
    desc: "OECD's website is the primary channel for communicating its work and impact. We helped them transform their web presence to be more engaging and user-friendly.",
    img: "https://storage.googleapis.com/a1aa/image/c53f936d-74f5-4739-4662-30a20d5024d4.jpg"
  },
  {
    title: "Building a customer-led digital experience platform",
    desc: "We helped KBC Bank build a digital experience platform that delivers personalized customer journeys and seamless banking experiences.",
    img: "https://storage.googleapis.com/a1aa/image/6f9c2f1d-d543-4dae-b695-4d3754abda9e.jpg"
  },
  {
    title: "Engaging customers in a seamless digital way",
    desc: "We helped a leading insurance company create a seamless digital experience that engages customers across all channels.",
    img: "https://storage.googleapis.com/a1aa/image/0b38f4ac-d141-4c68-4c99-fdbef6b05e9c.jpg"
  }
];

const RecentWorkSection = () => {
  return (
    <Paper 
      sx={{ 
        bgcolor: '#F0F7FF', 
        p: 1.5, 
        mb: 4,
        borderRadius: 2
      }}
    >
      <Box sx={{ display: 'flex', alignItems: 'center', mb: 1.5 }}>
        <Typography 
          variant="h3" 
          sx={{ 
            lineHeight: 1.2, 
            mr: 2,
            color: '#1A1A1A',
            fontSize: { xs: '0.8rem', sm: '0.9rem' },
            fontWeight: 600
          }}
        >
          Recent<br />work
        </Typography>
        <Button 
          variant="outlined" 
          size="small" 
          sx={{ 
            borderColor: '#1A1A1A', 
            color: '#1A1A1A', 
            fontSize: { xs: '0.5rem', sm: '0.6rem' },
            borderRadius: 50,
            '&:hover': { 
              bgcolor: '#1A1A1A', 
              color: 'white' 
            }
          }}
        >
          View all work
        </Button>
      </Box>
      
      <Grid container direction="column" spacing={1.5}>
        {RECENT_WORK_DATA.map((work, index) => (
          <Grid item key={index}>
            <WorkCard 
              title={work.title}
              description={work.desc}
              image={work.img}
            />
          </Grid>
        ))}
      </Grid>
    </Paper>
  );
};

export default RecentWorkSection;