// src/components/HeroSection.jsx
import React from 'react';
import { Box, Typography, Button } from '@mui/material';

const HeroSection = () => {
  return (
    <Box sx={{ position: 'relative', mb: 4 }}>
      <Typography 
        variant="h1" 
        sx={{ 
          lineHeight: 1.3, 
          mb: 1, 
          maxWidth: { xs: 280, sm: 320, md: 350, lg: 400 },
          fontSize: { xs: '1.2rem', sm: '1.5rem' },
          fontWeight: 600
        }}
      >
        Connecting the dots,<br />
        from <Box component="span" sx={{ color: '#F9A826' }}>content</Box> to<br />
        experience.
      </Typography>
      
      <Typography 
        variant="body2" 
        sx={{ 
          maxWidth: { xs: 280, sm: 320, md: 350, lg: 400 }, 
          mb: 1.5,
          color: '#D9D9D9',
          fontSize: { xs: '0.7rem', sm: '0.8rem' }
        }}
      >
        Amexio Fine helps you to optimize your content experiences,
        making your customer experiences smarter, faster, and more
        profitable.
      </Typography>
      
      <Button 
        variant="contained" 
        size="small" 
        sx={{ 
          bgcolor: '#F9A826', 
          color: '#05283B', 
          fontWeight: 600,
          borderRadius: 50,
          fontSize: { xs: '0.6rem', sm: '0.7rem' },
          '&:hover': {
            bgcolor: '#e89716'
          }
        }}
      >
        Get in touch
      </Button>
      
      <Box 
        component="img" 
        src="https://storage.googleapis.com/a1aa/image/5cc18b56-4df5-4852-2194-18a25d542672.jpg" 
        alt="Decorative shapes" 
        sx={{ 
          position: 'absolute', 
          top: 0, 
          right: 0, 
          width: { xs: 80, sm: 100 }, 
          height: { xs: 80, sm: 100 }, 
          opacity: 0.3, 
          pointerEvents: 'none' 
        }}
      />
    </Box>
  );
};

export default HeroSection;