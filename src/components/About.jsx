import React from "react";
import { Box, Typography, Button, Container, Grid, Link, } from "@mui/material";
import { Link as RouterLink } from "react-router-dom";
import MailOutlineIcon from '@mui/icons-material/MailOutline';
import LinkedInIcon from '@mui/icons-material/LinkedIn';

export const About = () => {
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
                    <Box component="span">About Us</Box>
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
                        About Us
                      </Typography>
                      
                      <Typography sx={{ 
                        fontSize: { xs: "1rem", sm: "1.1rem", md: "1.5rem" }, 
                        lineHeight: 1.5, 
                        color: "#D9D9D9", 
                        marginBottom: "2rem",
                        maxWidth: { xs: "100%", md: "90%" }
                      }}>
                      AmeXio Fuse is the <Box component="span" sx={{ color: "#F9A826", fontWeight: "bold" }}>Customer Experience (CX)</Box>
                        division of AmeXio Group, helping organizations streamline their <Box component="span" sx={{ color: "#F9A826", fontWeight: "bold" }}> content operations</Box> and optimize their digital experiences. We strongly believe in cross-discipline collaboration as a key ingredient for successful digital projects. We essentially <Box component="span" sx={{ color: "#F9A826", fontWeight: "bold" }}>fuse</Box>  our teams with your organization, providing you with highly valuable advice for developing and refining your experience management operations.
                      </Typography>
                    </Box>
                    
                    {/* Decorative graphics for desktop */}
                    <Box sx={{ 
                      position: "absolute", 
                      top: "-10%", 
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





        <Box sx={{ marginTop: 4 }}>
          <Box
            sx={{
              borderTopLeftRadius: 10,
              marginLeft: { xs: 0, md: "100px" },
              padding: 3,
              backgroundColor: "#F3F7FB",
              boxShadow: "0px 4px 12px rgba(0, 0, 0, 0.1)",
              display: "flex",
              flexDirection: { xs: "column", md: "row" },
              gap: 4,
              overflow: "hidden",
            }}
          >
            {/* Content Section */}
            <Box
              sx={{
                flex: 1,
                display: "flex",
                flexDirection: "column",
              }}
            >
              {/* Header with title */}
              <Typography
                variant="body1"
                sx={{
                  fontSize: { xs: "1.8rem", md: "2.5rem" },
                  fontWeight: "600",
                  lineHeight: 1.3,
                  color: "#05283B",
                  textAlign: "left",
                  marginBottom: 10,
                  mt: 10,
                  fontFamily: "serif",
                }}
              >
                Why work with us?
              </Typography>

              {/* Description paragraphs */}
              <Typography
                variant="body1"
                sx={{
                  color: "#4A4A4A",
                  lineHeight: 1.6,
                  fontWeight: "400",
                  fontSize: "1.1rem",
                  textAlign: "left",
                  fontfamily: "serif",
                }}
              >
                At AmeXio, we take a well-rounded approach to{" "}
                <Box
                  component="span"
                  sx={{ color: "#F9A826", fontWeight: "bold" }}
                >
                  fusing
                </Box>{" "}
                people, processes, and tools. Implementation is just one part of
                the puzzle — we go much broader. Our expertise covers three key
                areas to make sure your CXM program is successful and delivers a
                strong ROI.
              </Typography>

              <Typography
                variant="body1"
                sx={{
                  color: "#05283B",
                  lineHeight: 1.6,
                  marginTop: "1rem",
                  textAlign: "left",
                  fontfamily: "serif",
                }}
              >
                We help your teams to adopt new systems, streamline your
                processes for smooth integration, and use the latest
                technologies tailored to your business domain. By developing a{" "}
                <Box
                  component="span"
                  sx={{ color: "#F9A826", fontWeight: "bold" }}
                >
                  strong partnership
                </Box>{" "}
                with your organization, we help you to build a long-term CXM
                vision, ensuring all parts of your CXM ecosystem work together
                seamlessly. Only this way, long-term success can be achieved.
              </Typography>
            </Box>

            {/* Image Section with hover effect */}
            <Box
              sx={{
                flex: 1,
                display: "flex",
                alignItems: "center",
                justifyContent: "center",
                overflow: "hidden",
                borderRadius: "8px",
                maxWidth: { xs: "100%", md: "50%" },
                height: "auto",
                transition: "transform 0.5s ease",
                "&:hover img": {
                  transform: "scale(1.05)",
                },
              }}
            >
              <Box
                component="img"
                src="https://cdn.sanity.io/images/sha60dij/production/681ca85834147e73a242f0702dcddcf0b73703de-512x512.webp?w=790"
                alt="Integration"
                sx={{
                  width: "100%",
                  height: "auto",
                  objectFit: "cover",
                  transition: "transform 0.5s ease",
                  borderRadius: "8px",
                }}
              />
            </Box>
          </Box>
        </Box>


 <Box
      sx={{
        display: "flex",
        justifyContent: "center",
        marginTop: 4,
        padding: 3,
        ml:{ xs: '0', md: '100px' },
         mr:{ xs: '0', md: '100px' },
        position: 'relative',
        bgcolor: '#002340',
        
        py: { xs: 3, md: 4 },
        backgroundImage: 'url("https://cdn.sanity.io/images/sha60dij/production/da559f7f5d6e7048e9e6e1b238bc586e997aa5c3-3840x2160.webp?rect=0,408,3840,1344&w=1200&h=420&fit=clip")',
        backgroundSize: 'cover',
        backgroundPosition: 'center',
        backgroundRepeat: 'no-repeat',
        minHeight: { xs: '300px', md: '420px' },
      }}
    >
      <Box
        sx={{
          position: 'relative',
          width: '100%',
          maxWidth: '1200px',
          display: 'flex',
          alignItems: 'center',
          justifyContent: { xs: 'center', md: 'flex-start' },
        }}
      >
        <Box
          sx={{
            bgcolor: '#FFC256',
            p: { xs: 2, md: 4 },
            width: { xs: '90%', md: '60%' },
            maxWidth: { xs: '100%', md: 'unset' },
            marginLeft: { xs: '-10%', md: '-20%' },
            marginRight: { xs: 'auto', md: 0 },
            zIndex: 2,
             
            display: 'flex',
            flexDirection: 'column',
            justifyContent: 'center',
            textAlign: { xs: 'left', md: 'left' },
          }}
        >
          <Typography
            variant="h4"
            sx={{
              fontWeight: 'bold',
              mb: 2,
              color: '#000',
              fontSize: { xs: '1.5rem', md: '2rem' },
              ml: { xs: 0, md: 23 },
              fontFamily: 'serif',
            }}
          >
            Trusted by leading brands and government agencies
          </Typography>

          <Typography
            sx={{
              mb: 3,
              color: '#000',
              fontSize: { xs: '0.9rem', md: '1rem' },
              lineHeight: 1.6,
              ml: { xs: 0, md: 23 },
            }}
          >
            We partner with top global brands and key government departments. Explore our portfolio to learn more about our successful collaborations.
          </Typography>

          <Box sx={{ display: 'flex', justifyContent: { xs: 'center', md: 'flex-start' }, ml: { xs: 0, md: 23 } }}>
            <Button
              variant="contained"
              sx={{
                bgcolor: '#063251',
                color: 'white',
                borderRadius: 28,
                px: 3,
                py: 1,
                textTransform: 'none',
                fontSize: '0.9rem',
                '&:hover': {
                  bgcolor: '#001830',
                },
                minWidth: '120px',
              }}
            >
              Our work
            </Button>
          </Box>
        </Box>
      </Box>
    </Box>
 




 {/* Contact Section */}
   
   <Box
      sx={{
        borderRadius: 2,
        bgcolor: '#e6f2ff',
        p: { xs: 3, md: 5 },
        position: 'relative',
        mb: 3,
        mt: 6,
       
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
        <Grid item xs={12} md={8}>
          <Typography
            variant="h3"
            component="h1"
            sx={{
              fontWeight: 400,
              mt: { xs: -3, md: 0 },
              fontSize: { xs: '2rem', md: '2.5rem' },
              textAlign: 'left', 
               padding: { xs: 2, md: '0' }
            }}
          >
            Let's talk
          </Typography>
          <Typography
            variant="h6"
            sx={{
              fontWeight: 400,
                mt: { xs: -3, md: '0' },
              fontSize: { xs: '1.3rem', md: '1.25rem' },
              textAlign: 'left', 
              padding: { xs: 2, md: '0' }
            }}
          >
            Do you have a specific content challenge you want to discuss?
          </Typography>
          <Button
            variant="outlined"
            startIcon={<MailOutlineIcon />}
            sx={{
              borderRadius: 50,
              border: '2px solid #1A1A1A',
              color: '#1A1A1A',
              px: 3,
              py: 3,
              textTransform: 'none',
              fontWeight: 600,
              '&:hover': {
                bgcolor: '#DBE5ED',
                borderColor: '#1A1A1A',
              },
            }}
          >
            Get in touch
          </Button>
        </Grid>

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
            viewBox="0 90 700 600"
            sx={{
              position: 'absolute',
              bottom: 0,
              right: 50,
              top: 100,
              width: '40rem',
              height: '27rem',
            }}
          >
            <defs>
              <linearGradient id="lineGradient" x1="0%" y1="0%" x2="0%" y2="100%">
                <stop offset="0%" stopColor="#003B5C" />
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
          <Box
            component="img"
            src="l.png"
            alt="AmeXio office"
            sx={{
              position: 'absolute',
              bottom: 0,
              right: 170,
              borderRadius: '50%',
              top: 130,
              width: '25rem',
              height: '25rem',
            }}
          />
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
          pb: 2
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
