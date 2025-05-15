// src/components/common/WorkCard.jsx
import React from 'react';
import { Card, CardContent, CardMedia, Typography } from '@mui/material';

const WorkCard = ({ title, description, image }) => {
  return (
    <Card 
      sx={{ 
        display: 'flex', 
        bgcolor: '#D7E5F9',
        borderRadius: 1
      }}
    >
      <CardContent sx={{ flex: 1, p: 1 }}>
        <Typography 
          variant="h4" 
          gutterBottom
          sx={{
            color: '#1A1A1A',
            fontSize: { xs: '0.7rem', sm: '0.8rem' },
            fontWeight: 600,
            mb: 0.5
          }}
        >
          {title}
        </Typography>
        <Typography 
          sx={{
            color: '#1A1A1A',
            fontSize: { xs: '0.5rem', sm: '0.6rem' },
            lineHeight: 1.2
          }}
        >
          {description}
        </Typography>
      </CardContent>
      <CardMedia
        component="img"
        sx={{ width: 100, height: 80 }}
        image={image}
        alt={title}
      />
    </Card>
  );
};

export default WorkCard;