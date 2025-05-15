// src/components/common/ServiceItem.jsx
import React from 'react';
import { Box, Typography } from '@mui/material';

const ServiceItem = ({ icon, title, description }) => {
  return (
    <Box sx={{ display: 'flex', flexDirection: 'column', alignItems: 'center', textAlign: 'center' }}>
      <Box sx={{ color: '#F9A826', mb: 0.5 }}>
        {icon}
      </Box>
      <Typography 
        sx={{ 
          color: '#F9A826',
          fontSize: { xs: '0.6rem', sm: '0.7rem' },
          fontWeight: 600
        }}
      >
        {title}
      </Typography>
      <Typography 
        sx={{ 
          mt: 0.5,
          color: '#1A1A1A',
          fontSize: { xs: '0.5rem', sm: '0.6rem' },
          maxWidth: { xs: 60, sm: 70 }
        }}
      >
        {description}
      </Typography>
    </Box>
  );
};

export default ServiceItem;