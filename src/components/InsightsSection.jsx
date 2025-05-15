// src/components/InsightsSection.jsx
import React from 'react';
import { Box, Paper, Typography, Grid } from '@mui/material';
import InsightCard from './common/InsightCard';

const INSIGHTS_DATA = [
  { 
    img: "https://storage.googleapis.com/a1aa/image/f98f2eb0-54ee-4f20-7507-223154623123.jpg", 
    title: "Governments close eight sources of waste with Source dump", 
    desc: "In 2023, our new waste program helped governments reduce waste by 15% in key regions.", 
    author: { name: "John Doe", avatar: "https://storage.googleapis.com/a1aa/image/98097780-18eb-48a8-5843-d82fe22b517e.jpg" }
  },
  { 
    img: "https://storage.googleapis.com/a1aa/image/7b0804ee-4da9-402a-031c-ad6ced84591d.jpg", 
    title: "How to build a sustainable content platform for an ambitious brand", 
    desc: "Learn how to create a content platform that supports sustainability goals and brand growth.", 
    author: { name: "Alice Smith", avatar: "https://storage.googleapis.com/a1aa/image/21322c74-1623-40b9-d597-a9c23a3bd14b.jpg" }
  },
  { 
    img: "https://storage.googleapis.com/a1aa/image/3293d7d6-3889-4a83-8d84-d708134cf30b.jpg", 
    title: "Edge Delivery Systems: the future of digital experience management", 
    desc: "Explore how edge delivery systems can improve performance and personalization.", 
    author: { name: "Michael Brown", avatar: "https://storage.googleapis.com/a1aa/image/3d825c50-3481-4fff-8d45-c13d9b6d0454.jpg" }
  }
];

const InsightsSection = () => {
  return (
    <Paper 
      sx={{ 
        bgcolor: '#F0F7FF', 
        p: 2, 
        mb: 4,
        borderRadius: 2
      }}
    >
      <Typography 
        variant="h3" 
        sx={{ 
          mb: 1.5,
          color: '#1A1A1A',
          fontSize: { xs: '0.8rem', sm: '0.9rem' },
          fontWeight: 600
        }}
      >
        Latest insights
      </Typography>
      
      <Grid container spacing={1.5}>
        {INSIGHTS_DATA.map((insight, index) => (
          <Grid item xs={12} sm={4} key={index}>
            <InsightCard 
              image={insight.img}
              title={insight.title}
              description={insight.desc}
              author={insight.author}
            />
          </Grid>
        ))}
      </Grid>
    </Paper>
  );
};

export default InsightsSection;