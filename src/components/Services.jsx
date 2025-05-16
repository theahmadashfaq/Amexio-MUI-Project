import React, { useState } from 'react';
import { Box, Typography, Divider, Tabs, Tab, Button, Container, Link, Grid } from '@mui/material';
import MailOutlineIcon from '@mui/icons-material/MailOutline';
import LinkedInIcon from '@mui/icons-material/LinkedIn';


export const Services = () => {
     const [activeTab, setActiveTab] = useState('consultancy');

  const handleTabChange = (event, newValue) => {
    setActiveTab(newValue);
  };
  return (
    <>
    <Box sx={{ backgroundColor: "#04273F" }}>

    
    <Box sx={{ backgroundColor: "#04273F", width: "100%", minHeight: "100vh", position: "relative", overflow: "hidden" }}>
      {/* Navigation breadcrumb */}
      <Box sx={{ padding: "1.5rem 2rem" }}>
        <Typography sx={{ color: "white", fontSize: "1rem", ml:15 }}>
          <Box component="span" sx={{ cursor: "pointer" }}>Home</Box>
          <Box component="span" sx={{ margin: "0 0.5rem" }}> &gt; </Box>
          <Box component="span">Services</Box>
        </Typography>
      </Box>
      
      {/* Main content */}
      <Box sx={{ display: "flex", flexDirection: "column", position: "relative", padding: "0 2rem" }}>
        {/* Text content */}
        <Box sx={{ 
            width: { xs: "100%", md: "60%", }, 
            zIndex: 2, 
            position: "relative",
            marginLeft: { xs: 0, md: "7rem" }
        }}>
          <Typography sx={{ 
              fontSize: { xs: "3rem", md: "4.5rem" }, 
              fontWeight: "500", 
              color: "white", 
              marginBottom: "1.5rem",
              fontFamily: "'Serif', serif"
          }}>
            Services
          </Typography>
          
          <Typography sx={{ 
            fontSize: { xs: "1.1rem", md: "2rem" }, 
            lineHeight: 1.5, 
            color: "#D9D9D9", 
            marginBottom: "2rem",
            maxWidth: "90%"
          }}>
            Optimizing your Customer Experience Management (CXM) operations is key to provide great customer experiences. We offer a range of services to help you go beyond just implementing a Content Management System (CMS) and achieve real <Box component="span" sx={{ color: "#F9A826", fontWeight: "bold" }}>business results.</Box>
          </Typography>
        </Box>
        
        {/* Decorative graphics */}
        <Box sx={{ 
          position: "absolute", 
          top: "-5%", 
          right: "-2%", 
          width: "60%", 
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


    <Box sx={{ maxWidth: "100%", overflow: "hidden", backgroundColor:"white" }}>
    <Box
        sx={{
            display: "flex",
            flexDirection: { xs: "column", md: "row" }, // Stack on small, row on medium+
            
            borderTopRightRadius: 10,
            mr: { md: 2 }, // Only add margin on medium+ screens
            padding: 5,
        }}
    >
        {/* Left side with "Recent work" and button */}
        <Box
            sx={{
                p: 3,
                display: "flex",
                flexDirection: "column",
                justifyContent: "flex-start",
                minWidth: { xs: "100%", md: "200px" },
                marginLeft: { md: "20px" }, // Only add margin on medium+ screens
                alignItems: { xs: "center", md: "flex-start" }, // Center on small, left on medium+
                mb: { xs: 2, md: 0 }, // Add bottom margin on small screens
            }}
        >
            <Typography
                variant="h3"
                sx={{
                    fontWeight: "400",
                    color: "#1A1A1A",
                    mb: 2,
                    fontFamily:"serif",
                    ml: { xs: 0, md: 3 }, // Add left margin on medium+ screens
                    textAlign: { xs: "left", md: "left" }, // Center on small, left on medium+
                }}
            >
                We can help 
                <br />
                you to
            </Typography>

            
        </Box>

        {/* Right side with project cards */}
        <Box
            sx={{
                flex: 1,
                display: "flex",
                flexDirection: { xs: "column", md: "column" }, // Stack cards on all screen sizes
                gap: 4,
                ml: { xs: 0, md: 15 }, // Add left margin on medium+ screens
                
                width: "100%",
            }}
        >
             <Box>
                  <Typography sx={{ ml:3,fontSize: { xs: "1.5rem", md: "2rem", fontFamily:"serif" },}}>
                    Strategize
                  </Typography>
                </Box>
            {/* Project 1 */}
            <Box
                sx={{
                    height: { xs: "auto", md: "400px" }, // Auto height on small
                    overflow: "hidden",
                    width: "100%",
                    position: "relative",
                    display: "flex",
                    flexDirection: { xs: "column", md: "row" }, // Stack text and image on small
                    bgcolor: "#D9E8F5",
                    borderRadius: 5,
                    "&:hover .project-image": {
                        transform: "scale(1.1)",
                    },
                    
                }}
            >
                <Box
                    sx={{
                        width: { xs: "100%", md: "50%" }, // Full width on small
                        height: "100%",
                        p: 4,
                        zIndex: 1,
                        position: "relative",
                    }}
                >
                    <Typography
                        className="project-title"
                        variant="h3"
                        sx={{
                            fontSize: { xs: "1.5rem", md: "1.7rem" }, // Adjusted font size for small
                           
                            mb: 2,
                            color: "#252729",
                            transition: "color 0.3s ease",
                            cursor: "pointer",
                        }}
                    >
                        Assess your current CXM ecosystem
                    </Typography>

                    <Typography
                        variant="body2"
                        sx={{
                            fontSize: { xs: "0.9rem", md: "1.5rem" }, // Adjusted font size for small
                            lineHeight: 1.6,
                            color: "#333",
                            paddingRight: { xs: 10, md: 0 }, 
                        }}
                    >
                        We help you evaluate your existing content processes and tooling, providing you with an improvement roadmap to drive your digital success.
                    </Typography>

                    <Box
                        sx={{
                            display: "flex",
                            alignItems: "center",
                            mt: 12,
                            fontSize: "0.9rem",
                            color: "#333",
                            fontWeight: "500",
                        }}
                    >
                       <Button variant="contained" sx={{ backgroundColor:"#063251", borderRadius:6}} >
                        Discover CX Assessment
                        </Button>
                        </Box>
                </Box>

                {/* Image with zoom effect */}
                <Box
                    sx={{
                        position: { xs: "relative", md: "absolute" }, // Relative on small
                        width: { xs: "100%", md: "60%" }, // Full width on small
                        height: { xs: "300px", md: "100%" }, // Fixed height on small
                       clipPath: {
  xs: "polygon(0% 0%, 100% 0%, 100% 100%, 0% 100%)",
  md: "polygon(54.806% .062%, 53.272% .408%, 51.853% 1.125%, 50.559% 2.116%, 49.402% 3.286%, 48.392% 4.539%, 47.541% 5.779%, 46.86% 6.911%, 46.36% 7.837%, 46.052% 8.464%, 45.947% 8.694%, -.036% 100%, 99.927% 99.938%, 100% 99.938%, 100% .041%, 54.806% .041%)"
},
                        right: 0,
                        zIndex: 0,
                        display: "flex",
                        justifyContent: "flex-end",
                        alignItems: "center",
                        overflow: "hidden",
                    }}
                >
                    <Box
                        className="project-image"
                        component="img"
                        src="https://cdn.sanity.io/images/sha60dij/production/12aa8822b846a2dd51c58ce78247494fd0e4d262-790x527.webp?rect=0,29,790,470&w=1580&h=940&fit=clip"
                        alt="OECD website displayed on devices"
                        sx={{
                            width: "100%",
                            height: "100%",
                            objectFit: "cover",
                            transition: "transform 0.5s ease",
                        }}
                    />
                </Box>
            </Box>

            {/* Project 2 */}
            <Box
                sx={{
                    height: { xs: "auto", md: "400px" }, // Auto height on small
                    overflow: "hidden",
                    position: "relative",
                    display: "flex",
                    flexDirection: { xs: "column", md: "row" }, // Stack text and image on small
                    bgcolor: "#D9E8F5",
                    borderRadius: 5,
                    "&:hover .project-image": {
                        transform: "scale(1.1)",
                    },
                   
                }}
            >
                <Box
                    sx={{
                        width: { xs: "100%", md: "50%" }, // Full width on small
                        height: "100%",
                        p: 4,
                        zIndex: 1,
                        position: "relative",
                    }}
                >
                    <Typography
                        className="project-title"
                        variant="h3"
                        sx={{
                            fontSize: { xs: "1.5rem", md: "1.5rem" }, // Adjusted font size for small
                            
                            mb: 2,
                            color: "#252729",
                            transition: "color 0.3s ease",
                            cursor: "pointer",
                             paddingRight: { xs: 10, md: 0 }, 
                        }}
                    >
                        Select the right CXM tools and architecture
                    </Typography>

                    <Typography
                        variant="body2"
                        sx={{
                            fontSize: { xs: "0.9rem", md: "1.4rem" }, // Adjusted font size for small
                            lineHeight: 1.6,
                            color: "#333",
                              paddingRight: { xs: 10, md: 0 }, 
                        }}
                    >
                        In today’s fast-paced technology landscape, choosing the right tools can be challenging. We help you build a CXM ecosystem that fits your needs and strategy, without vendor bias.
                    </Typography>

                    <Box
                        sx={{
                            display: "flex",
                            alignItems: "center",
                            mt: 12,
                            fontSize: "0.9rem",
                            color: "#333",
                            fontWeight: "500",
                        }}
                    >
                       <Button variant="contained" sx={{ backgroundColor:"#063251", borderRadius:6}} >
                        Discover CX Technology Advisory
                        </Button>
                        </Box>
                </Box>

                {/* Image with zoom effect */}
                <Box
                    sx={{
                        position: { xs: "relative", md: "absolute" }, // Relative on small
                        width: { xs: "100%", md: "60%" }, // Full width on small
                        height: { xs: "300px", md: "100%" }, // Fixed height on small
                        clipPath: {
  xs: "polygon(0% 0%, 100% 0%, 100% 100%, 0% 100%)",
  md: "polygon(54.806% .062%, 53.272% .408%, 51.853% 1.125%, 50.559% 2.116%, 49.402% 3.286%, 48.392% 4.539%, 47.541% 5.779%, 46.86% 6.911%, 46.36% 7.837%, 46.052% 8.464%, 45.947% 8.694%, -.036% 100%, 99.927% 99.938%, 100% 99.938%, 100% .041%, 54.806% .041%)"
},
                        right: 0,
                        zIndex: 0,
                        display: "flex",
                        justifyContent: "flex-end",
                        alignItems: "center",
                        overflow: "hidden",
                    }}
                >
                    <Box
                        className="project-image"
                        component="img"
                        src="https://cdn.sanity.io/images/sha60dij/production/a7f5a89f053eb861605c6d5dc3c9b4b0873053a9-1500x1125.jpg?rect=0,277,1011,601&w=1580&h=940&fit=clip"
                        alt="KBC Bank digital platform"
                        sx={{
                            width: "100%",
                            height: "100%",
                            objectFit: "cover",
                            transition: "transform 0.5s ease",
                        }}
                    />
                </Box>
            </Box>
<Box>
                  <Typography sx={{ ml:3,fontSize: { xs: "1.5rem", md: "2rem", fontFamily:"serif" },}}>
                   Design & Realize
                  </Typography>
                </Box>
            {/* Project 3 */}
            <Box
                sx={{
                    height: { xs: "auto", md: "400px" }, // Auto height on small
                    overflow: "hidden",
                    position: "relative",
                    display: "flex",
                    flexDirection: { xs: "column", md: "row" }, // Stack text and image on small
                    bgcolor: "#D9E8F5",
                    borderRadius: 5,
                    "&:hover .project-image": {
                        transform: "scale(1.1)",
                    },
                    
                }}
            >
                <Box
                    sx={{
                        width: { xs: "100%", md: "50%" }, // Full width on small
                        height: "100%",
                        p: 4,
                        zIndex: 1,
                        position: "relative",
                    }}
                >
                    <Typography
                        className="project-title"
                        variant="h3"
                        sx={{
                            fontSize: { xs: "1.5rem", md: "1.6rem" }, // Adjusted font size for small
                           
                            mb: 2,
                            color: "#252729",
                            transition: "color 0.3s ease",
                            cursor: "pointer",
                             paddingRight: { xs: 10, md: 0 }, 
                        }}
                    >
                        Implement your Digital Experience Platform
                    </Typography>

                    <Typography
                        variant="body2"
                        sx={{
                            fontSize: { xs: "0.9rem", md: "1.05rem" }, // Adjusted font size for small
                            lineHeight: 1.6,
                            color: "#333",
                             paddingRight: { xs: 10, md: 0 }, 
                        }}
                    >
                        We help you to architect and build your Digital Experience Platform (DXP), allowing your organization to manage engaging customer experiences at scale. We make sure your DXP aligns with your Content Supply Chain and seamlessly integrates with your customer touchpoints and enterprise services.
                    </Typography>

                     <Box
                        sx={{
                            display: "flex",
                            alignItems: "center",
                            mt: 5,
                            fontSize: "0.9rem",
                            color: "#333",
                            fontWeight: "500",
                        }}
                    >
                       <Button variant="contained" sx={{ backgroundColor:"#063251", borderRadius:6}} >
                        Discover DXP Implementation
                        </Button>
                        </Box>
                </Box>

                {/* Image with zoom effect */}
                <Box
                    sx={{
                        position: { xs: "relative", md: "absolute" }, // Relative on small
                        width: { xs: "100%", md: "60%" }, // Full width on small
                        height: { xs: "300px", md: "100%" }, // Fixed height on small
                         clipPath: {
  xs: "polygon(0% 0%, 100% 0%, 100% 100%, 0% 100%)",
  md: "polygon(54.806% .062%, 53.272% .408%, 51.853% 1.125%, 50.559% 2.116%, 49.402% 3.286%, 48.392% 4.539%, 47.541% 5.779%, 46.86% 6.911%, 46.36% 7.837%, 46.052% 8.464%, 45.947% 8.694%, -.036% 100%, 99.927% 99.938%, 100% 99.938%, 100% .041%, 54.806% .041%)"
},
                        right: 0,
                        zIndex: 0,
                        display: "flex",
                        justifyContent: "flex-end",
                        alignItems: "center",
                        overflow: "hidden",
                    }}
                >
                    <Box
                        className="project-image"
                        component="img"
                        src="https://cdn.sanity.io/images/sha60dij/production/6d51937f284329495fbe424b14a567bc7298c0f5-1200x800.webp?rect=0,2,1200,714&w=1580&h=940&fit=clip"
                        alt="Media company digital platform"
                        sx={{
                            width: "100%",
                            height: "100%",
                            objectFit: "cover",
                            transition: "transform 0.5s ease",
                        }}
                    />
                </Box>
            </Box>



             <Box
                sx={{
                    height: { xs: "auto", md: "400px" }, // Auto height on small
                    overflow: "hidden",
                    position: "relative",
                    display: "flex",
                    flexDirection: { xs: "column", md: "row" }, // Stack text and image on small
                    bgcolor: "#D9E8F5",
                    borderRadius: 5,
                    "&:hover .project-image": {
                        transform: "scale(1.1)",
                    },
                    
                }}
            >
                <Box
                    sx={{
                        width: { xs: "100%", md: "50%" }, // Full width on small
                        height: "100%",
                        p: 4,
                        zIndex: 1,
                        position: "relative",
                    }}
                >
                    <Typography
                        className="project-title"
                        variant="h3"
                        sx={{
                            fontSize: { xs: "1.5rem", md: "1.5rem" }, // Adjusted font size for small
                            
                            mb: 2,
                            color: "#252729",
                            transition: "color 0.3s ease",
                            cursor: "pointer",
                             paddingRight: { xs: 10, md: 0 }, 
                        }}
                    >
                        Keep your CXM ecosystem running smoothly
                    </Typography>

                    <Typography
                        variant="body2"
                        sx={{
                            fontSize: { xs: "0.9rem", md: "1.3rem" }, // Adjusted font size for small
                            lineHeight: 1.6,
                            color: "#333",
                             paddingRight: { xs: 10, md: 0 }, 
                        }}
                    >
                       We provide full support and maintenance for your CXM platform, ensuring it operates smoothly and efficiently.
                    </Typography>

                    <Box
                        sx={{
                            display: "flex",
                            alignItems: "center",
                            mt: 15,
                            fontSize: "0.9rem",
                            color: "#333",
                            fontWeight: "500",
                        }}
                    >
                       <Button variant="contained" sx={{ backgroundColor:"#063251", borderRadius:6}} >
                        Discover Amexio Service Center
                        </Button>
                        </Box>
                </Box>

                {/* Image with zoom effect */}
                <Box
                    sx={{
                        position: { xs: "relative", md: "absolute" }, // Relative on small
                        width: { xs: "100%", md: "60%" }, // Full width on small
                        height: { xs: "300px", md: "100%" }, // Fixed height on small
                         clipPath: {
  xs: "polygon(0% 0%, 100% 0%, 100% 100%, 0% 100%)",
  md: "polygon(54.806% .062%, 53.272% .408%, 51.853% 1.125%, 50.559% 2.116%, 49.402% 3.286%, 48.392% 4.539%, 47.541% 5.779%, 46.86% 6.911%, 46.36% 7.837%, 46.052% 8.464%, 45.947% 8.694%, -.036% 100%, 99.927% 99.938%, 100% 99.938%, 100% .041%, 54.806% .041%)"
},
                        right: 0,
                        zIndex: 0,
                        display: "flex",
                        justifyContent: "flex-end",
                        alignItems: "center",
                        overflow: "hidden",
                    }}
                >
                    <Box
                        className="project-image"
                        component="img"
                        src="https://cdn.sanity.io/images/sha60dij/production/19af2aac15ad831986765b80ba5eb03fd72c5b4b-800x613.webp?rect=0,69,800,476&w=1580&h=940&fit=clip"
                        alt="Media company digital platform"
                        sx={{
                            width: "100%",
                            height: "100%",
                            objectFit: "cover",
                            transition: "transform 0.5s ease",
                        }}
                    />
                </Box>
            </Box>
             <Box
                sx={{
                    height: { xs: "auto", md: "400px" }, // Auto height on small
                    overflow: "hidden",
                    position: "relative",
                    display: "flex",
                    flexDirection: { xs: "column", md: "row" }, // Stack text and image on small
                    bgcolor: "#D9E8F5",
                    borderRadius: 5,
                    "&:hover .project-image": {
                        transform: "scale(1.1)",
                    },
                   
                }}
            >
                <Box
                    sx={{
                        width: { xs: "100%", md: "50%" }, // Full width on small
                        height: "100%",
                        p: 4,
                        zIndex: 1,
                        position: "relative",
                    }}
                >
                    <Typography
                        className="project-title"
                        variant="h3"
                        sx={{
                            fontSize: { xs: "1.5rem", md: "1.5rem" }, // Adjusted font size for small
                           
                            mb: 2,
                            color: "#252729",
                            transition: "color 0.3s ease",
                            cursor: "pointer",
                             paddingRight: { xs: 10, md: 0 }, 
                        }}
                    >
                        Stabilize and optimize your AEM-based ecosystem
                    </Typography>

                    <Typography
                        variant="body2"
                        sx={{
                            fontSize: { xs: "0.9rem", md: "1.4rem" }, // Adjusted font size for small
                            lineHeight: 1.6,
                            color: "#333",
                             paddingRight: { xs: 10, md: 0 }, 
                        }}
                    >
                        A 3-stage approach to enhance the performance of your AEM-based DXP, improve its reliability, and prepare for future growth.
                    </Typography>

                    <Box
                        sx={{
                            display: "flex",
                            alignItems: "center",
                            mt: 15,
                            fontSize: "0.9rem",
                            color: "#333",
                            fontWeight: "500",
                        }}
                    >
                       <Button variant="contained" sx={{ backgroundColor:"#063251", borderRadius:6}} >
                        Discover AEM Stablize and Optimize
                        </Button>
                    </Box>
                </Box>

                {/* Image with zoom effect */}
                <Box
                    sx={{
                        position: { xs: "relative", md: "absolute" }, // Relative on small
                        width: { xs: "100%", md: "60%" }, // Full width on small
                        height: { xs: "300px", md: "100%" }, // Fixed height on small
                         clipPath: {
  xs: "polygon(0% 0%, 100% 0%, 100% 100%, 0% 100%)",
  md: "polygon(54.806% .062%, 53.272% .408%, 51.853% 1.125%, 50.559% 2.116%, 49.402% 3.286%, 48.392% 4.539%, 47.541% 5.779%, 46.86% 6.911%, 46.36% 7.837%, 46.052% 8.464%, 45.947% 8.694%, -.036% 100%, 99.927% 99.938%, 100% 99.938%, 100% .041%, 54.806% .041%)"
},
                        right: 0,
                        zIndex: 0,
                        display: "flex",
                        justifyContent: "flex-end",
                        alignItems: "center",
                        overflow: "hidden",
                    }}
                >
                    <Box
                        className="project-image"
                        component="img"
                        src="https://cdn.sanity.io/images/sha60dij/production/168db231c0cee6c11d78c97e111cd2116d5fb9d8-2190x1117.png?rect=156,0,1878,1117&w=1580&h=940&fit=clip"
                        alt="Media company digital platform"
                        sx={{
                            width: "100%",
                            height: "100%",
                            objectFit: "cover",
                            transition: "transform 0.5s ease",
                        }}
                    />
                </Box>
            </Box>

            <Box>
                  <Typography sx={{ ml:3,fontSize: { xs: "1.5rem", md: "2rem", fontFamily:"serif" },}}>
                    Optimize
                  </Typography>
                </Box>
             <Box
                sx={{
                    height: { xs: "auto", md: "400px" }, // Auto height on small
                    overflow: "hidden",
                    position: "relative",
                    display: "flex",
                    flexDirection: { xs: "column", md: "row" }, // Stack text and image on small
                    bgcolor: "#D9E8F5",
                    borderRadius: 5,
                    "&:hover .project-image": {
                        transform: "scale(1.1)",
                    },
                   
                }}
            >
                


                <Box
                    sx={{
                        width: { xs: "100%", md: "50%" }, // Full width on small
                        height: "100%",
                        p: 4,
                        zIndex: 1,
                        position: "relative",
                    }}
                >
                    <Typography
                        className="project-title"
                        variant="h3"
                        sx={{
                            fontSize: { xs: "1.5rem", md: "1.7rem" }, // Adjusted font size for small
                            
                            mb: 2,
                            color: "#252729",
                            transition: "color 0.3s ease",
                            cursor: "pointer",
                             paddingRight: { xs: 10, md: 0 }, 
                        }}
                    >
                        Increase your content value using AI
                    </Typography>

                    <Typography
                        variant="body2"
                        sx={{
                            fontSize: { xs: "0.9rem", md: "1.3rem" }, // Adjusted font size for small
                            lineHeight: 1.6,
                            color: "#333",
                             paddingRight: { xs: 10, md: 0 }, 
                        }}
                    >
                        Struggling with managing ever-growing volumes of content? AI advancements like Large Language Models (LLM's) as implemented by ChatGPT offer new ways to extract value from large amounts of content, but how can your organization prepare itself for these kind of use cases?
                    </Typography>

                     <Box
                        sx={{
                            display: "flex",
                            alignItems: "center",
                            mt: 7,
                            fontSize: "0.9rem",
                            color: "#333",
                            fontWeight: "500",
                        }}
                    >
                       <Button variant="contained" sx={{ backgroundColor:"#063251", borderRadius:6}} >Discover AI Content Readiness</Button>
                    </Box>
                </Box>

                {/* Image with zoom effect */}
                <Box
                    sx={{
                        position: { xs: "relative", md: "absolute" }, // Relative on small
                        width: { xs: "100%", md: "60%" }, // Full width on small
                        height: { xs: "300px", md: "100%" }, // Fixed height on small
                         clipPath: {
  xs: "polygon(0% 0%, 100% 0%, 100% 100%, 0% 100%)",
  md: "polygon(54.806% .062%, 53.272% .408%, 51.853% 1.125%, 50.559% 2.116%, 49.402% 3.286%, 48.392% 4.539%, 47.541% 5.779%, 46.86% 6.911%, 46.36% 7.837%, 46.052% 8.464%, 45.947% 8.694%, -.036% 100%, 99.927% 99.938%, 100% 99.938%, 100% .041%, 54.806% .041%)"
},
                        right: 0,
                        zIndex: 0,
                        display: "flex",
                        justifyContent: "flex-end",
                        alignItems: "center",
                        overflow: "hidden",
                    }}
                >
                    <Box
                        className="project-image"
                        component="img"
                        src="https://cdn.sanity.io/images/sha60dij/production/d320b1f74904c381df7bd30ca7f12be867515100-1500x1125.jpg?rect=0,117,1500,892&w=1580&h=940&fit=clip"
                        alt="Media company digital platform"
                        sx={{
                            width: "100%",
                            height: "100%",
                            objectFit: "cover",
                            transition: "transform 0.5s ease",
                        }}
                    />
                </Box>
            </Box>
             <Box
                sx={{
                    height: { xs: "auto", md: "400px" }, // Auto height on small
                    overflow: "hidden",
                    position: "relative",
                    display: "flex",
                    flexDirection: { xs: "column", md: "row" }, // Stack text and image on small
                    bgcolor: "#D9E8F5",
                    borderRadius: 5,
                    "&:hover .project-image": {
                        transform: "scale(1.1)",
                    },
                    
                }}
            >
                <Box
                    sx={{
                        width: { xs: "100%", md: "50%" }, // Full width on small
                        height: "100%",
                        p: 4,
                        zIndex: 1,
                        position: "relative",
                    }}
                >
                    <Typography
                        className="project-title"
                        variant="h3"
                        sx={{
                            fontSize: { xs: "1.5rem", md: "1.8rem" }, // Adjusted font size for small
                            
                            mb: 2,
                            color: "#252729",
                            transition: "color 0.3s ease",
                            cursor: "pointer",
                             paddingRight: { xs: 10, md: 0 }, 
                        }}
                    >
                        Optimize your content operations
                    </Typography>

                    <Typography
                        variant="body2"
                        sx={{
                            fontSize: { xs: "0.9rem", md: "1.5rem" }, // Adjusted font size for small
                            lineHeight: 1.6,
                            color: "#333",
                             paddingRight: { xs: 10, md: 0 }, 
                        }}
                    >
                       Don’t let change hold your organization back. We help your teams to adopt new workflows and technologies by applying tailored change management strategies, training, and support.
                    </Typography>

                    <Box
                        sx={{
                            display: "flex",
                            alignItems: "center",
                            mt: 7,
                            fontSize: "0.9rem",
                            color: "#333",
                            fontWeight: "500",
                        }}
                    >
                       <Button variant="contained" sx={{ backgroundColor:"#063251", borderRadius:6}} >Discover CX Change Mangement</Button>
                    </Box>
                </Box>

                {/* Image with zoom effect */}
                <Box
                    sx={{
                        position: { xs: "relative", md: "absolute" }, // Relative on small
                        width: { xs: "100%", md: "60%" }, // Full width on small
                        height: { xs: "300px", md: "100%" }, // Fixed height on small
                         clipPath: {
  xs: "polygon(0% 0%, 100% 0%, 100% 100%, 0% 100%)",
  md: "polygon(54.806% .062%, 53.272% .408%, 51.853% 1.125%, 50.559% 2.116%, 49.402% 3.286%, 48.392% 4.539%, 47.541% 5.779%, 46.86% 6.911%, 46.36% 7.837%, 46.052% 8.464%, 45.947% 8.694%, -.036% 100%, 99.927% 99.938%, 100% 99.938%, 100% .041%, 54.806% .041%)"
},
                        right: 0,
                        zIndex: 0,
                        display: "flex",
                        justifyContent: "flex-end",
                        alignItems: "center",
                        overflow: "hidden",
                    }}
                >
                    <Box
                        className="project-image"
                        component="img"
                        src="https://cdn.sanity.io/images/sha60dij/production/0b48ff543fa859ed6d596f9001e93a8e089db0a8-1500x1125.jpg?rect=0,117,1500,892&w=1580&h=940&fit=clip"
                        alt="Media company digital platform"
                        sx={{
                            width: "100%",
                            height: "100%",
                            objectFit: "cover",
                            transition: "transform 0.5s ease",
                        }}
                    />
                </Box>
            </Box>
             <Box
                sx={{
                    height: { xs: "auto", md: "400px" }, // Auto height on small
                    overflow: "hidden",
                    position: "relative",
                    display: "flex",
                    flexDirection: { xs: "column", md: "row" }, // Stack text and image on small
                    bgcolor: "#D9E8F5",
                    borderRadius: 5,
                    "&:hover .project-image": {
                        transform: "scale(1.1)",
                    },
                   
                }}
            >
                <Box
                    sx={{
                        width: { xs: "100%", md: "50%" }, // Full width on small
                        height: "100%",
                        p: 4,
                        zIndex: 1,
                        position: "relative",
                    }}
                >
                    <Typography
                        className="project-title"
                        variant="h3"
                        sx={{
                            fontSize: { xs: "1.5rem", md: "1.8rem" }, // Adjusted font size for small
                            
                            mb: 2,
                            color: "#252729",
                            transition: "color 0.3s ease",
                            cursor: "pointer",
                             paddingRight: { xs: 10, md: 0 }, 
                        }}
                    >
                        Boost your conversion rates
                    </Typography>

                    <Typography
                        variant="body2"
                        sx={{
                            fontSize: { xs: "0.9rem", md: "1.5rem" }, // Adjusted font size for small
                            lineHeight: 1.6,
                            color: "#333",
                             paddingRight: { xs: 10, md: 0 }, 
                        }}
                    >
                      We help you find and apply strategies to turn visitors into loyal customers, boosting your sales and conversions.
                    </Typography>

                    <Box
                        sx={{
                            display: "flex",
                            alignItems: "center",
                            mt: 17,
                            fontSize: "0.9rem",
                            color: "#333",
                            fontWeight: "500",
                           
                        
                        }}
                    >
                       <Button variant="contained" sx={{ backgroundColor:"#063251", borderRadius:6}} >Discover CX Optimize</Button>
                    </Box>
                </Box>

                {/* Image with zoom effect */}
                <Box
                    sx={{
                        position: { xs: "relative", md: "absolute" }, // Relative on small
                        width: { xs: "100%", md: "60%" }, // Full width on small
                        height: { xs: "300px", md: "100%" }, // Fixed height on small
                         clipPath: {
  xs: "polygon(0% 0%, 100% 0%, 100% 100%, 0% 100%)",
  md: "polygon(54.806% .062%, 53.272% .408%, 51.853% 1.125%, 50.559% 2.116%, 49.402% 3.286%, 48.392% 4.539%, 47.541% 5.779%, 46.86% 6.911%, 46.36% 7.837%, 46.052% 8.464%, 45.947% 8.694%, -.036% 100%, 99.927% 99.938%, 100% 99.938%, 100% .041%, 54.806% .041%)"
},
                        right: 0,
                        zIndex: 0,
                        display: "flex",
                        justifyContent: "flex-end",
                        alignItems: "center",
                        overflow: "hidden",
                    }}
                >
                    <Box
                        className="project-image"
                        component="img"
                        src="https://cdn.sanity.io/images/sha60dij/production/553e6443b4a4c2165b5137c280613c29cd1b5460-1500x929.jpg?rect=0,19,1500,892&w=1580&h=940&fit=clip"
                        alt="Media company digital platform"
                        sx={{
                            width: "100%",
                            height: "100%",
                            objectFit: "cover",
                            transition: "transform 0.5s ease",
                        }}
                    />
                </Box>
            </Box>

           
        </Box>


        
    </Box>

</Box>



 <Box sx={{ 
      backgroundColor: '#04273F',
      padding: { xs: 3, md: 6 },
    
     
     
       position: 'relative', 
  marginBottom: '1px' 
    }}>
      {/* Main Heading */}
      <Typography variant="h1" sx={{
        fontSize: '2rem',
        fontWeight: 700,
        color: 'white',
        marginBottom: 4,
        marginLeft: "100px"
      }}>
        How do we usually collaborate?
      </Typography>

      {/* Tabs Section */}
      <Box sx={{ marginLeft: "100px", borderBottom: 1, borderColor: 'divider', }}>
        <Tabs 
          value={activeTab} 
          onChange={handleTabChange}
           sx={{
    '& .MuiTabs-indicator': {
      backgroundColor: '#E06826',
      height: '1px',
        bottom: '1px'
    },
    '& .MuiTab-root': {
      color: 'white',
      '&.Mui-selected': {
        color: '#E06826',
      },
      '&:hover': {
        color: '#E06826',
      }
    }
  }}

        >
          <Tab 
            label="Consultancy & Advisory" 
            value="consultancy"
            sx={{
              color: activeTab === 'consultancy' ? '#E06826' : 'white',
                

              fontWeight: 600,
              fontSize: '1.25rem',
              textTransform: 'none',
              '&:hover': {
                color: '#E06826',
              },
            }}
          />
          <Tab 
            label="Project-Based" 
            value="project"
            sx={{
              color: activeTab === 'project' ? '#E06826' : 'white',
              fontWeight: 600,
              fontSize: '1.25rem',
              textTransform: 'none',
              '&:hover': {
                color: '#E06826',
              },
            }}
          />
          <Tab 
            label="Managed Service" 
            value="managed"
            
            sx={{
              color: activeTab === 'managed' ? '#E06826' : 'white',
              fontWeight: 600,
              fontSize: '1.25rem',
              textTransform: 'none',
              '&:hover': {
                color: '#E06826',
              },
            }}
          />
          <Tab 
            label="Expert Staffing" 
            value="staffing"
            sx={{
              color: activeTab === 'staffing' ? '#E06826' : 'white',
              fontWeight: 600,
              fontSize: '1.25rem',
              textTransform: 'none',
              '&:hover': {
                color: '#E06826',
              },
            }}
          />
        </Tabs>
      </Box>
      
      <Divider  sx={{ 
  borderColor: 'white', 
  marginTop: '-2px',
  marginBottom: 4 ,
   width: '77%',  
    maxWidth: '1500px',
    marginLeft: '100px',
}} />

      {/* Content Container with Image */}
      <Box sx={{ display: 'flex', gap: 1 }}>
        {/* Text Content */}
        <Box sx={{ width: '60%', marginLeft: "100px" }}>
          {activeTab === 'consultancy' && (
            <>
              <Typography variant="body1" sx={{
                fontSize: '1.2rem',
                lineHeight: 1.6,
                color: 'white',
                marginBottom: 4,
                '& strong': {
                  fontWeight: 600,
                  color: 'white',
                }
              }}>
                We can bring industry expertise and technical know-how to the table to provide you with actionable insights and strategic recommendations. Whether you're looking to optimize your current systems, implement new technologies, or develop a comprehensive CX strategy, we are able to provide technology-agnostic advice.
              </Typography>

              <Typography variant="h3" sx={{
                fontSize: '1.25rem',
                fontWeight: 600,
                color: 'white',
                marginBottom: 2,
              }}>
                Our expertise includes:
              </Typography>

              <Box component="ul" sx={{
                paddingLeft: 3,
                marginBottom: 4,
                '& li': {
                  marginBottom: 1,
                  fontSize: '1.2rem',
                  color: 'white',
                }
              }}>
                <Box component="li">Strategy consulting</Box>
                <Box component="li">Business analysis</Box>
                <Box component="li">Information architecture</Box>
                <Box component="li">Web Accessibility (L&AD certified)</Box>
                <Box component="li">Search Engine Optimization (SEO)</Box>
                <Box component="li">Change Management & User Adoption</Box>
                <Box component="li">Enterprise architecture (composability, headless, ...)</Box>
                <Box component="li">Cloud architecture</Box>
              </Box>
            </>
          )}

          {activeTab === 'project' && (
            <>
              <Typography variant="body1" sx={{
                fontSize: '1.2rem',
                lineHeight: 1.6,
                color: 'white',
                marginBottom: 4,
                '& strong': {
                  fontWeight: 600,
                  color: 'white',
                }
              }}>
                When you have a specific digital initiative defined, we work closely with you to understand your project requirements, timelines, and desired outcomes. From initial concept to final delivery, our team ensures that your project is delivered to the highest standards. Leveraging our FusionCX approach, we make sure to drive real business value.
              </Typography>

              <Typography variant="h3" sx={{
                fontSize: '1.25rem',
                fontWeight: 600,
                color: 'white',
                marginBottom: 2,
              }}>
                Our project teams integrate the following expertise:
              </Typography>

              <Box component="ul" sx={{
                paddingLeft: 3,
                marginBottom: 4,
                '& li': {
                  marginBottom: 1,
                  fontSize: '1.2rem',
                  color: 'white',
                }
              }}>
                <Box component="li">Project & Program Management</Box>
                <Box component="li">UX/UI design & design systems</Box>
                <Box component="li">Front-end development (incl. frameworks like React or Astro)</Box>
                <Box component="li">CMS development and integrations (both full-stack and headless)</Box>
                <Box component="li">Web Performance</Box>
                <Box component="li">Web Accessibility (IAAP certified)</Box>
                <Box component="li">DevOps</Box>
                <Box component="li">Change Management & User Adoption</Box>
              </Box>
            </>
          )}

          {activeTab === 'managed' && (
            <>
              <Typography variant="body1" sx={{
                fontSize: '1.2rem',
                lineHeight: 1.6,
                color: 'white',
                marginBottom: 4,
                '& strong': {
                  fontWeight: 600,
                  color: 'white',
                }
              }}>
                With the AmeXio Service Center, we provide a Managed Service designed to take the burden off your shoulders, allowing you to focus on your core business activities. We provide comprehensive governance and support for your systems, ensuring they run smoothly and efficiently at all times. Services include regular maintenance, updates, security monitoring, troubleshooting and proactive data-driven advisory. Of course, these services can be covered by a mutually agreed Service Level Agreement (SLA).
              </Typography>

              <Typography variant="h3" sx={{
                fontSize: '1.25rem',
                fontWeight: 600,
                color: 'white',
                marginBottom: 2,
              }}>
                Our services include:
              </Typography>

              <Box component="ul" sx={{
                paddingLeft: 3,
                marginBottom: 4,
                '& li': {
                  marginBottom: 1,
                  fontSize: '1.2rem',
                  color: 'white',
                }
              }}>
                <Box component="li">Service Delivery Management</Box>
                <Box component="li">Support Engineering (with expertise in specific technologies)</Box>
                <Box component="li">Incident Management</Box>
                <Box component="li">Patch Management</Box>
                <Box component="li">Uptime Management (monitoring)</Box>
                <Box component="li">Performance Management</Box>
                <Box component="li">Release Management</Box>
              </Box>
            </>
          )}

          {activeTab === 'staffing' && (
            <>
              <Typography variant="body1" sx={{
                fontSize: '1.2rem',
                lineHeight: 1.6,
                color: 'white',
                marginBottom: 4,
                '& strong': {
                  fontWeight: 600,
                  color: 'white',
                }
              }}>
                If you already have a solution in place and you need to upscale your expertise, we can provide you with access to a pool of highly skilled professionals who can seamlessly integrate into your team. We can provide short-term support for a specific project but also long-term expertise to drive your digital initiatives.
              </Typography>

              <Typography variant="h3" sx={{
                fontSize: '1.25rem',
                fontWeight: 600,
                color: 'white',
                marginBottom: 2,
              }}>
                Some of the specialists we can provide:
              </Typography>

              <Box component="ul" sx={{
                paddingLeft: 3,
                marginBottom: 4,
                '& li': {
                  marginBottom: 1,
                  fontSize: '1.2rem',
                  color: 'white',
                }
              }}>
                <Box component="li">Accessibility experts (IAAP certified)</Box>
                <Box component="li">Scrum Masters & Product Owners</Box>
                <Box component="li">Conversion Rate Optimization (CRO) experts</Box>
                <Box component="li">Design System engineers</Box>
                <Box component="li">Functional analysts</Box>
                <Box component="li">Technical architects & experts (both front & back-end expertise)</Box>
                <Box component="li">DevOps experts</Box>
              </Box>
            </>
          )}
        </Box>

        {/* Image */}
        <Box sx={{ 
          width: '40%', 
          display: 'flex', 
          alignItems: 'center',
          justifyContent: 'center',
          paddingRight: '200px'
        }}>
          <Box
            component="img"
            src="https://cdn.sanity.io/images/sha60dij/production/d174dfcee98869c93c1170dc886224f21b9b28b2-1500x1125.jpg?rect=188,0,1125,1125&w=604&h=604"
            alt="Collaboration"
            sx={{
              width: '100%',
              maxWidth: '400px',
              height: 'auto',
              borderRadius: '8px',
              objectFit: 'cover'
            }}
          />
        </Box>
      </Box>
    </Box>



<Box sx={{ marginTop: 4 }}>
  <Box
    sx={{
      borderTopLeftRadius: 10,
      marginLeft: { xs: 0, md: "200px" },
      padding: 3,
      backgroundColor: "white",
      boxShadow: "0px 4px 12px rgba(0, 0, 0, 0.1)",
      display: 'flex',
      flexDirection: { xs: 'column', md: 'row' },
      gap: 4,
      overflow: 'hidden' // Ensures zoomed image doesn't overflow
    }}
  >
    {/* Content Section */}
    <Box sx={{ 
      flex: 1,
      display: 'flex',
      flexDirection: 'column',
      justifyContent: 'center'
    }}>
      {/* Header with title */}
      <Typography
        variant="h2"
        sx={{
          fontSize: { xs: "1.8rem", md: "2.5rem" },
          fontWeight: "600",
          lineHeight: 1.3,
          color: "#05283B",
          textAlign: "left",
          marginBottom: 3
        }}
      >
        Integrating people, processes and tools
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
        }}
      >
        At AmeXio, we take a <strong>holistic</strong> approach to integrating people, processes, and tools. We go beyond just implementation, focusing on three key areas to ensure your CXM program succeeds and delivers real <strong>return on investment (ROI)</strong>. We help your team adapt to new systems, streamline processes for smooth integration, and use the latest technologies to meet your needs.
      </Typography>

      <Typography
        variant="body1"
        sx={{
          color: "#05283B",
          lineHeight: 1.6,
          marginTop: "1rem",
          textAlign: "left",
        }}
      >
        By creating a <strong>long-term vision</strong> with you, we make sure every part of your CXM program works together seamlessly for lasting success.
      </Typography>

      
    </Box>

    {/* Image Section with hover effect */}
    <Box sx={{ 
      flex: 1,
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'center',
      overflow: 'hidden',
      borderRadius: '8px',
      maxWidth: { xs: '100%', md: '50%' },
      height: 'auto',
      transition: 'transform 0.5s ease',
      '&:hover img': {
        transform: 'scale(1.05)'
      }
    }}>
      <Box
        component="img"
        src="https://cdn.sanity.io/images/sha60dij/production/681ca85834147e73a242f0702dcddcf0b73703de-512x512.webp?w=790"
        alt="Integration"
        sx={{
          width: '100%',
          height: 'auto',
          objectFit: 'cover',
          transition: 'transform 0.5s ease',
          borderRadius: '8px'
        }}
      />
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