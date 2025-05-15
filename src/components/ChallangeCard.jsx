// src/components/common/ChallengeCard.jsx
import React from 'react';
import { Box, Paper, Typography } from '@mui/material';

const ChallengeCard = ({ icon, title, description }) => {
  return (
    <Paper 
      sx={{ 
        bgcolor: '#0B2B44', 
        p: 1.5, 
        display: 'flex', 
        flexDirection: 'column', 
        alignItems: 'center', 
        textAlign: 'center',
        height: '100%',
        borderRadius: 1
      }}
    >
      <Box 
        sx={{ 
          color: '#F9A826', 
          fontSize: 24, 
          mb: 1,
          display: 'flex',
          justifyContent: 'center'
        }}
      >
        {icon}
      </Box>
      <Typography 
        sx={{
          color: '#D9D9D9',
          fontSize: { xs: '0.7rem', sm: '0.8rem' },
          fontWeight: 600,
          mb: 0.5
        }}
      >
        {title}
      </Typography>
      <Typography 
        sx={{
          color: '#D9D9D9',
          fontSize: { xs: '0.5rem', sm: '0.6rem' },
          lineHeight: 1.2
        }}
      >
        {description}
      </Typography>
    </Paper>
  );
};

export default ChallengeCard;