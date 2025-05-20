
import { 
  Box, 
  TextField, 
  Button, 
  Typography, 
  Checkbox, 
  FormControlLabel,
  Link,
Container,
Grid

} from '@mui/material';
import { Link as RouterLink } from "react-router-dom";
import React, { useState } from 'react';
import MailOutlineIcon from '@mui/icons-material/MailOutline';
import LinkedInIcon from '@mui/icons-material/LinkedIn';

export const Contact = () => {

     const [formData, setFormData] = useState({
    firstName: '',
    lastName: '',
    email: '',
    phone: '',
    message: '',
    consent: false
  });

  const handleChange = (e) => {
    const { name, value, checked, type } = e.target;
    setFormData({
      ...formData,
      [name]: type === 'checkbox' ? checked : value
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log('Form submitted:', formData);
  };
  return (
    <>
      <Box sx={{ backgroundColor: "#04273F", height: "auto" }}>
        <Box sx={{ 
                         padding: "1.5rem 2rem", 
                         backgroundColor: "#04273F",
                         position: "relative",
                         overflow: "hidden"
                       }}>
                         {/* Breadcrumb navigation */}
                         <Typography sx={{ 
                           color: "white", 
                           fontSize: "1rem",
                           ml: { xs: 0, md: 15 }
                         }}>
                           <Box 
                             component={RouterLink} 
                             to="/"
                             sx={{ 
                               cursor: "pointer", 
                               color: "white", 
                               textDecoration: "none",
                               "&:hover": {
                                 textDecoration: "underline"
                               }
                             }}
                           >
                             Home
                           </Box>
                           <Box component="span" sx={{ margin: "0 0.5rem" }}> &gt; </Box>
                           <Box component="span">Contact Us</Box>
                         </Typography>
                         
                         {/* Main content */}
                         <Box sx={{ 
                           display: "flex", 
                           flexDirection: "column", 
                           position: "relative", 
                           padding: "0 2rem",
                           minHeight: { xs: "500px", md: "auto" },
                           
                         }}>
                           {/* Background image for mobile */}
                           <Box sx={{ 
                             position: "absolute",
                             top: 0,
                             right: -600,
                             bottom: 0,
                             left: 0,
                             zIndex: 1,
                            
                             opacity:{ xs: 0.2, md: "0" },
                             backgroundImage: "url(image.png)",
                            
                             backgroundPosition: "right center",
                             backgroundRepeat: "no-repeat",
                             display: { xs: "block", md: "none" }
                           }} />
                           
                           {/* Text content */}
                           <Box sx={{ 
                             width: { xs: "100%", md: "60%" }, 
                             zIndex: 2, 
                             position: "relative",
                             marginLeft: { xs: 0, md: "7rem" },
                            
                             mt: { xs: "1rem", md: 0 }
                           }}>
                             <Typography sx={{ 
                               fontSize: { xs: "3rem", sm: "3rem", md: "4.5rem" }, 
                               fontWeight: "500", 
                               color: "white", 
                               marginBottom: "1.5rem",
                               fontFamily: "'Serif', serif"
                             }}>
                              <Box component="span" sx={{ color: "#F9A826", fontWeight: "bold" }}>Contact</Box> Us
                             </Typography>
                             
                             <Typography sx={{ 
                               fontSize: { xs: "1.2rem", sm: "1.1rem", md: "1.5rem" }, 
                               lineHeight: 1.5, 
                               color: "#D9D9D9", 
                               marginBottom: "2rem",
                               maxWidth: { xs: "100%", md: "90%" }
                             }}>
                              We’d love to talk about your content challenges! Let’s explore how we can remove obstacles from your content lifecycle and help your team manage and scale operations more effectively.
                             </Typography>
                             <Typography  sx={{ 
                               fontSize: { xs: "1.2rem", sm: "1.1rem", md: "1.5rem" }, 
                               lineHeight: 1.5, 
                               color: "#D9D9D9", 
                               marginBottom: "2rem",
                               maxWidth: { xs: "100%", md: "90%" }
                             }}>
                              Are you ready to unlock more <Box component="span" sx={{ color: "#F9A826", fontWeight: "bold" }}>value</Box> from your content?
                             </Typography>
                           </Box>
                           
                           {/* Decorative graphics for desktop */}
                           <Box sx={{ 
                             position: "absolute", 
                             top: "-18%", 
                             right: "-2%", 
                             width: "55%", 
                             height: "120%", 
                             zIndex: 1,
                             display: { xs: "none", md: "block" }
                           }}>
                             <Box 
                               component="img" 
                               src="image.png" 
                               alt="Decorative graphic elements"
                               sx={{ 
                                 width: "100%", 
                                 height: "auto",
                                 objectFit: "contain",
                               }} 
                             />
                           </Box>
                         </Box>
                       </Box>

     
   <Box sx={{ maxWidth: '100%', mx: 'auto', p: { xs: 2, sm: 3 }, backgroundColor: "#F3F7FB", mt:{ xs: 0, md: 10 } }}>
      <Box component="form" onSubmit={handleSubmit} sx={{ display: 'flex', flexDirection: 'column', gap: 3 }}>
        <Box sx={{ display: 'flex', flexDirection: { xs: 'column', sm: 'row' }, gap: 2 }}>
          <TextField
            required
            fullWidth
            id="firstName"
            name="firstName"
            label="First name"
            value={formData.firstName}
            onChange={handleChange}
            sx={{ 
              '& .MuiOutlinedInput-root': {
                borderRadius: 1
              },
              ml: { xs: 0, sm: "100px" },
              mt: { xs: 0, sm: 10 }
            }}
          />
          
          <TextField
            required
            fullWidth
            id="lastName"
            name="lastName"
            label="Last name"
            value={formData.lastName}
            onChange={handleChange}
            sx={{ 
              '& .MuiOutlinedInput-root': {
                borderRadius: 1
              },
              mr: { xs: 0, sm: "100px" },
              mt: { xs: 0, sm: 10 }
            }}
          />
        </Box>

        <Box sx={{ display: 'flex', flexDirection: { xs: 'column', sm: 'row' }, gap: 2 }}>
          <TextField
            required
            fullWidth
            id="email"
            name="email"
            label="Email"
            type="email"
            value={formData.email}
            onChange={handleChange}
            sx={{ 
              '& .MuiOutlinedInput-root': {
                borderRadius: 1
              },
              ml: { xs: 0, sm: "100px" },
            }}
          />
          
          <TextField
            fullWidth
            id="phone"
            name="phone"
            label="Phone Number"
            value={formData.phone}
            onChange={handleChange}
            sx={{ 
              '& .MuiOutlinedInput-root': {
                borderRadius: 1
              },
              mr: { xs: 0, sm: "100px" },
            }}
          />
        </Box>

        <TextField
          id="message"
          name="message"
          label="Message"
          multiline
          rows={6}
          value={formData.message}
          onChange={handleChange}
          sx={{ 
            '& .MuiOutlinedInput-root': {
              borderRadius: 1
            },
            ml: { xs: 0, sm: "100px" },
            width: { xs: "100%", sm: "87%" },
            mb: 5
          }}
        />

        <FormControlLabel
          control={
            <Checkbox 
              name="consent" 
              checked={formData.consent} 
              onChange={handleChange} 
              sx={{ 
                color: '#0d4a75',
                '&.Mui-checked': {
                  color: '#0d4a75',
                },
                ml: { xs: 0, sm: "100px" },
              }}
            />
          }
          label="I agree to receive other communications from the AmeXio Group."
        />

        <Typography variant="body2" sx={{ mt: -2, ml: { xs: 0, sm: "100px" } }}>
          By clicking submit below, you consent to allow the AmeXio Group to store and process the personal information submitted above to provide you the content requested.
        </Typography>

        <Box sx={{ 
          display: 'flex', 
          flexDirection: { xs: 'column', sm: 'row' }, 
          justifyContent: { xs: 'center', sm: 'space-between' }, 
          alignItems: { xs: 'center', sm: 'center' }, 
          mt: 1, 
          ml: { xs: 0, sm: "100px" },
          gap: { xs: 2, sm: 0 }
        }}>
          <Button 
            type="submit" 
            variant="contained" 
            sx={{ 
              bgcolor: '#0d4a75', 
              borderRadius: '30px', 
              px: 4, 
              py: 1,
              textTransform: 'none',
              '&:hover': {
                bgcolor: '#0a3a5d'
              }
            }}
          >
            Submit
          </Button>
          
          <Box
            sx={{
              display: 'flex',
              width: { xs: '100%', sm: '300px' },
              maxWidth: { xs: '300px', sm: '300px' },
              height: '74px',
              border: '1px solid #d3d3d3',
              borderRadius: '3px',
              overflow: 'hidden',
              mr: { xs: 0, sm: "100px" },
              boxShadow: '0 0 4px 1px rgba(0, 0, 0, 0.05)',
            }}
          >
            <Box
              sx={{
                display: 'flex',
                flexDirection: 'column',
                justifyContent: 'center',
                width: { xs: '70%', sm: '200px' },
                bgcolor: '#4a90e2',
                p: 2,
                color: 'white',
              }}
            >
              <Typography variant="caption" sx={{ fontWeight: 'medium', fontSize: '13px' }}>
                protected by reCAPTCHA
              </Typography>
              <Box sx={{ mt: 0.5 }}>
                <Typography component="span" variant="caption" sx={{ fontSize: '10px' }}>
                  <Link href="#" color="inherit" underline="hover">
                    Privacy
                  </Link>
                  {' - '}
                  <Link href="#" color="inherit" underline="hover">
                    Terms
                  </Link>
                </Typography>
              </Box>
            </Box>
            
            <Box
              sx={{
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                width: { xs: '30%', sm: '100px' },
                bgcolor: '#f9f9f9',
              }}
            >
              <Box
                component="img"
                src="data:image/jpeg;base64,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" 
                alt="reCAPTCHA logo"
                sx={{ width: '100%', height: '100%' }}
              />
            </Box>
          </Box>
        </Box>
      </Box>
    </Box>




    <Container sx={{ mt: 10 }}>
      <Box 
        sx={{
          position: 'relative',
          width: '100%',
          height: { xs: '300px', md: '420px' },
          borderRadius: 5,
         
          bgcolor: '#0B2E4F', 
        }}
      >
        {/* Background panoramic image */}
        <Box
          component="img"
          src="https://cdn.sanity.io/images/sha60dij/production/4a362095483bcdbd8a67623ecdd8c9539e69167c-6144x2136.webp?rect=21,0,6103,2136&w=1200&h=420&fit=clip"
          alt="Panoramic city view"
          sx={{
            width: '100%',
            height: '100%',
            objectFit: 'cover',
          }}
        />
        
        {/* Info box overlay */}
        <Box
          sx={{
            position: 'absolute',
            right: { xs: '5%', md: '2%' },
            top: '70%',

           ml:{ xs: '5%', md: '0' },
            backgroundColor: '#D9E8F5',
            borderRadius: 5,
            p: { xs: 3, sm: 4, md: 5 },
            maxWidth: { xs: '85%', sm: '450px', md: '700px' },
          }}
        >
          <Typography 
            variant="h5" 
            component="h2" 
            sx={{ 
              color: '#063251',
              fontWeight: 600,
              mb: 1,
            }}
          >
            Visit us on-site
          </Typography>
          
          <Typography 
            variant="body1" 
            sx={{ 
              color: '#063251',
              mb: 3,
            }}
          >
            Drop by one of our offices and meet with our teams in person!
          </Typography>
          
          <Button 
            variant="contained" 
            sx={{
              backgroundColor: '#063251',
              borderRadius: 5,
              px: 3,
              py: 1,
              textTransform: 'none',
              '&:hover': {
                backgroundColor: '#0A4A7A',
              },
            }}
          >
            Discover our office locations
          </Button>
        </Box>
      </Box>
    </Container>

   
   {/* Contact Section */}
   
  <Box
      sx={{
       
        
        p: { xs: 3, md: 5 },
        position: 'relative',
        mb: 3,
        mt:2,
       
        minHeight: 'auto', // Adjust height for small screens
      }}
    >
      <Grid
        container
        spacing={2}
        alignItems="center"
        justifyContent="space-between"
        sx={{
          marginLeft: { xs: 0, md: '100px' }, // Remove left margin on small
          marginTop: { xs: 3, md: '100px' }, // Adjust top margin on small
        }}
      >
       
        <Grid
          item
          xs={12}
          md={3}
          sx={{
            display: { xs: 'none', md: 'flex' }, // Hide image on small
            justifyContent: { xs: 'center', md: 'flex-end' },
          }}
        >
          <Box
            component="svg"
            viewBox="0 90 5 450"
            sx={{
              position: 'absolute',
              bottom: 0,
              right: 300,
              top: 150,
              width: '40rem',
              height: '20rem',
            }}
          >
            <defs>
              <linearGradient id="lineGradient" x1="0%" y1="0%" x2="0%" y2="100%">
               
                <stop offset="55%" stopColor="#FF6B35" />
              </linearGradient>
            </defs>
            <path
              d="M 100 700 L 500 100 L 600 100 L 200 700 Z"
              stroke="url(#lineGradient)"
              strokeWidth="4"
              fill="none"
            />
          </Box>
          
        </Grid>
      </Grid>
    </Box>






      {/* Footer */}
      <Box
        sx={{
          bgcolor: '#05283B',
          color: 'white',
          borderRadius: '8px 8px 0 0',
          pt: 5,
          pb: 2,
          mt:15
        }}
      >
        <Container maxWidth="lg">
          {/* Navigation Links */}
          <Box 
            sx={{ 
              display: 'flex', 
              justifyContent: 'space-between', 
              flexWrap: { xs: 'wrap', md: 'nowrap' },
              mb: 4
            }}
          >
            <Box 
              sx={{ 
                display: 'flex', 
                gap: { xs: 2, md: 4 },
               
                mb: { xs: 2, md: 0 },
               
              }}
            >
             <Box sx={{ 
  display: 'flex',
  flexDirection: 'column',
  gap: { xs: 2, md: 4 },
  mb: { xs: 2, md: 0 }
}}>
  {/* First line */}
  <Box sx={{ display: 'flex', gap: { xs: 2, md: 4 } }}>
    <Link href="#" color="inherit" underline="none" sx={{ fontSize: { xs: '2rem', md: '1.1rem' } }}>
      Services
    </Link>
    <Link href="#" color="inherit" underline="none" sx={{ fontSize: { xs: '2rem', md: '1.1rem' } }}>
      Insights
    </Link>
    <Link href="#" color="inherit" underline="none" sx={{ fontSize: { xs: '2rem', md: '1.1rem' } }}>
      Work
    </Link>
  </Box>
  
  {/* Second line */}
  <Box sx={{ display: 'flex', gap: { xs: 2, md: 4 } }}>
    <Link href="#" color="inherit" underline="none" sx={{ fontSize: { xs: '2rem', md: '1.1rem' } }}>
      About
    </Link>
    <Link href="#" color="inherit" underline="none" sx={{ fontSize: { xs: '2rem', md: '1.1rem' } }}>
      Contact
    </Link>
     <Box 
                sx={{
                  bgcolor: 'white',
                  borderRadius: '50%',
                  width: 35,
                  height: 35,
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center'
                }}
              >
                <LinkedInIcon sx={{ color: '#05283B' }} />
              </Box>
  </Box>
</Box>
              

              
              
            </Box>

            <Box 
              sx={{ 
                display: 'flex', 
                alignItems: 'center', 
                justifyContent: { xs: 'flex-start', md: 'flex-end' },
                width: { xs: '100%', md: 'auto' }
              }}
            >
             
            </Box>
          </Box>

          

          
        </Container>
       
      </Box>

      
       {/* Copyright Section */}
         <Box
      sx={{
        display: 'flex',
        justifyContent: 'space-between',
        alignItems: 'center', // Vertically align items
        bgcolor: '#031E30',
        color: 'white',
        borderRadius: '8px 8px 0 0',
        p: 2,
        borderTop: '1px solid rgba(255, 255, 255, 0.1)',
        flexDirection: { xs: 'column', md: 'row' }, // Stack on small
        gap: { xs: 1, md: 0 }, // Add some gap when stacked
      }}
    >
      <Box
        sx={{
          display: 'flex',
          alignItems: 'center',
          mb: { xs: 1, md: 0 }, // Add margin bottom when stacked
          justifyContent: { xs: 'center', md: 'flex-start' }, // Center on small
          ml: { xs: 0, md: '100px' }, // Add left margin on larger
        }}
      >
        {/* <Box
          sx={{
            bgcolor: 'white',
            color: '#05283B',
            borderRadius: '50%',
            width: 30,
            height: 30,
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
            fontWeight: 'bold',
            mr: 1,
            fontSize: '0.75rem',
          }}
        >
          CO
        </Box> */}
        <Typography variant="body2"  sx={{ fontSize: '0.8rem' }}>
          Copyright © 2024 - AmeXio Fuse is part of{' '}
          <Link href="#"  color="inherit" textAlign={"center"}>
            AmeXio Group
          </Link>
        </Typography>
      </Box>

      <Link
        href="#"
        color="inherit"
        sx={{
          fontSize: '0.8rem',
          mr: { xs: 0, md: '100px' }, // Add right margin on larger
          textAlign: { xs: 'center', md: 'left' }, // Center on small
        }}
      >
        Legal notices
      </Link>
    </Box>





      </Box>
    </>
  );
};
