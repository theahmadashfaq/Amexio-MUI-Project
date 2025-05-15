// src/components/common/InsightCard.jsx
import React from 'react';
import { Box, Typography, Avatar, CardMedia } from '@mui/material';

const InsightCard = ({ image, title, description, author }) => {
  return (
    <Box sx={{ display: 'flex', flexDirection: 'column', height: '100%' }}>
      <CardMedia
        component="img"
        image={image}
        alt={title}
        sx={{ borderRadius: 1, height: 60 }}
      />
      <Typography 
        sx={{ 
          my: 0.5,
          color: '#1A1A1A',
          fontSize: { xs: '0.7rem', sm: '0.8rem' },
          fontWeight: 600
        }}
      >
        {title}
      </Typography>
      <Typography 
        sx={{ 
          mb: 0.5, 
          flexGrow: 1,
          color: '#1A1A1A',
          fontSize: { xs: '0.5rem', sm: '0.6rem' },
          lineHeight: 1.2
        }}
      >
        {description}
      </Typography>
      <Box sx={{ display: 'flex', alignItems: 'center', gap: 1 }}>
        <Avatar src={author.avatar} sx={{ width: 16, height: 16 }} />
        <Typography 
          sx={{ 
            color: '#1A1A1A',
            fontSize: { xs: '0.5rem', sm: '0.6rem' },
            fontWeight: 600
          }}
        >
          {author.name}
        </Typography>
      </Box>
    </Box>
  );
};

export default InsightCard;