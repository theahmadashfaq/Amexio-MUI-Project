import React from "react";
import { Box, Button, Typography, Container, Card, CardMedia, CardContent, Grid, Link,
  SvgIcon, 
  IconButton} from "@mui/material";
import {
  Warning as WarningIcon,
  Settings as SettingsIcon,
  Power as PowerIcon,
  Security as SecurityIcon,
  Lightbulb as LightbulbIcon,
  Edit as EditIcon,
  SettingsApplications as WorkflowIcon,
  Code as CodeIcon,
} from "@mui/icons-material";
import { LuBadgeInfo } from "react-icons/lu";

import DesignServicesIcon from "@mui/icons-material/DesignServices";
import DevicesIcon from '@mui/icons-material/Devices';
import TrendingUpIcon from "@mui/icons-material/TrendingUp";
import MailOutlineIcon from '@mui/icons-material/MailOutline';
import LinkedInIcon from '@mui/icons-material/LinkedIn';

export const Main = () => {
  return (
    <>
      <Box sx={{ backgroundColor: "#04273F" }}>
        <Box maxWidth="100%">
          {/* Hero Section */}
          <Box
      sx={{
        backgroundColor: "#04273F",
        padding: { xs: 2, md: 3 },
        height: { xs: "auto", md: "100vh" },
        minHeight: { xs: "100vh", md: "auto" },
        position: "relative",
        display: "flex",
        flexDirection: { xs: "column", md: "row" },
        width: "85%",
        overflow: "hidden",
        '&::before': {
          content: '""',
          position: { xs: "absolute", md: "none" },
          top: 0,
          left: 0,
          right: 0,
          bottom: 0,
          backgroundImage: { xs: "url('image.png')", md: "none" },
          backgroundSize: "cover",
          backgroundPosition: "center",
          backgroundRepeat: "no-repeat",
          opacity: 0.2,
          zIndex: 1,
         
        }
      }}
    >
      {/* Text Content Container */}
      <Box
        sx={{
          width: { xs: "100%", md: "50%" },
          padding: { xs: 2, md: 4 },
          zIndex: 10,
          marginLeft: { xs: 0, md: "80px" },
          position: "relative",
         
        }}
      >
        <Typography
          variant="h1"
          sx={{
            fontSize: { xs: "2.5rem", sm: "3rem", md: "4rem" },
            fontWeight: "500",
            lineHeight: 1.1,
            marginBottom: { xs: "1rem", md: "1.5rem" },
            color: "white",
            textAlign: { xs: "left", md: "left" },
          }}
        >
          Connecting the dots,
          <br />
          from <span style={{ color: "#F9A826" }}>content</span> to
          <br />
          experience.
        </Typography>

        <Typography
          variant="body1"
          sx={{
            fontSize: { xs: "1rem", md: "1.25rem" },
            lineHeight: 1.5,
            color: "#D9D9D9",
            fontWeight: "400",
            marginBottom: { xs: "1.5rem", md: "2rem" },
            textAlign: { xs: "left", md: "left" },
          }}
        >
          AmeXio Fuse helps you to optimize your content operations,
          making your{" "}
          <strong style={{ color: "#F9A826" }}>
            customer experiences
          </strong>{" "}
          smarter, faster, and more affordable.
        </Typography>

        <Box sx={{ textAlign: { xs: "center", md: "left" } }}>
          <Button
            variant="contained"
            sx={{
              backgroundColor: "#F9A826",
              color: "#05283B",
              fontSize: { xs: "0.875rem", md: "1rem" },
              fontWeight: "600",
              borderRadius: "2rem",
              padding: { xs: "0.5rem 1.5rem", md: "0.75rem 2rem" },
              letterSpacing: "0.05em",
              "&:hover": {
                backgroundColor: "#F7901E",
              },
              textTransform: "none",
              boxShadow: "0 4px 6px rgba(0, 0, 0, 0.1)",
              zIndex: 10,
              position: "relative",
            }}
            aria-label="Talk to us about your content challenge"
          >
            Talk to us about your content challenge
          </Button>
        </Box>
      </Box>

      {/* Image Container - Visible only on medium+ screens */}
      <Box 
        sx={{ 
        
          width: "40%",
         position:"relative",
        
        
        }}
      >
        <Box
          component="img"
          src="image.png"
          sx={{
            width: "200%",
            height: "90%",
           ml: "100px",
            position: "absolute",
            top: -100,
            left: -200,
            transform: "rotate(3deg)",
            objectFit: "contain",
            
          }}
        
        />
      </Box>
    </Box>

          {/* Recent Work Section */}
         <Box sx={{ maxWidth: "100%", overflow: "hidden" }}>
    <Box
        sx={{
            display: "flex",
            flexDirection: { xs: "column", md: "row" }, // Stack on small, row on medium+
            backgroundColor: "#F3F7FB",
            borderTopRightRadius: 10,
            mr: { md: 20 }, // Only add margin on medium+ screens
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
                    textAlign: { xs: "left", md: "left" }, // Center on small, left on medium+
                }}
            >
                Recent
                <br />
                work
            </Typography>

            <Button
                
                sx={{
                    fontSize: { xs: "0.7rem", md: "0.75rem" },
                    fontWeight: "600",
                    color: "#1A1A1A",
                    border: "2px solid #1A1A1A",
                    borderRadius: "2rem",
                    paddingX: "1rem",
                    paddingY: "1rem",
                    textTransform: "none",
                    marginRight:"100px",
                    "&:hover": {
                        backgroundColor: "#DBE5ED",
                        color: "#1A1A1A",
                    },
                }}
            >
                Discover all our work
            </Button>
        </Box>

        {/* Right side with project cards */}
        <Box
            sx={{
                flex: 1,
                display: "flex",
                flexDirection: { xs: "column", md: "column" }, // Stack cards on all screen sizes
                gap: 3,
                
                width: "100%",
            }}
        >
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
                    "&:hover .project-title": {
                        color: "#EC6E28",
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
                            fontWeight: "600",
                            mb: 2,
                            color: "#252729",
                            transition: "color 0.3s ease",
                            cursor: "pointer",
                        }}
                    >
                        Transforming OECD's Web Presence
                    </Typography>

                    <Typography
                        variant="body2"
                        sx={{
                            fontSize: { xs: "0.9rem", md: "1rem" }, // Adjusted font size for small
                            lineHeight: 1.6,
                            color: "#333",
                            paddingRight: { xs: 10, md: 0 }, 
                        }}
                    >
                        A significant upgrade to OECD's digital presence,
                        providing a seamless user experience and robust content
                        management workflows. The new platform is dynamic,
                        responsive, and accessible to a global audience.
                    </Typography>

                    <Box
                        sx={{
                            display: "flex",
                            alignItems: "center",
                            mt: 3,
                            fontSize: "0.9rem",
                            color: "#333",
                            fontWeight: "500",
                        }}
                    >
                        Read the full case →
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
                        src="https://cdn.sanity.io/images/sha60dij/production/67e88285ec7cae37d8a58ce3d65a6126a16f0fe5-1769x1089.png?rect=0,19,1769,1052&w=1185&h=705&fit=clip"
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
                    "&:hover .project-title": {
                        color: "#EC6E28",
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
                            fontWeight: "600",
                            mb: 2,
                            color: "#252729",
                            transition: "color 0.3s ease",
                            cursor: "pointer",
                             paddingRight: { xs: 10, md: 0 }, 
                        }}
                    >
                        Building an omnichannel digital experience platform
                    </Typography>

                    <Typography
                        variant="body2"
                        sx={{
                            fontSize: { xs: "0.9rem", md: "1rem" }, // Adjusted font size for small
                            lineHeight: 1.6,
                            color: "#333",
                              paddingRight: { xs: 10, md: 0 }, 
                        }}
                    >
                        We partnered with KBC Bank to design and develop their
                        digital experience platform, setting the bar for the
                        financial sector, providing personalized journeys and
                        seamless high-value banking mobile moments.
                    </Typography>

                    <Box
                        sx={{
                            display: "flex",
                            alignItems: "center",
                            mt: 3,
                            fontSize: "0.9rem",
                            color: "#333",
                            fontWeight: "500",
                        }}
                    >
                        Read the full case →
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
                        src="https://cdn.sanity.io/images/sha60dij/production/733f8884caa219a5518dcc494cd0ac0c8da4887f-1200x675.webp?rect=33,0,1135,675&w=1185&h=705&fit=clip"
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
                    "&:hover .project-title": {
                        color: "#EC6E28",
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
                            fontWeight: "600",
                            mb: 2,
                            color: "#252729",
                            transition: "color 0.3s ease",
                            cursor: "pointer",
                             paddingRight: { xs: 10, md: 0 }, 
                        }}
                    >
                        Engaging readers in a modern digital age
                    </Typography>

                    <Typography
                        variant="body2"
                        sx={{
                            fontSize: { xs: "0.9rem", md: "1rem" }, // Adjusted font size for small
                            lineHeight: 1.6,
                            color: "#333",
                             paddingRight: { xs: 10, md: 0 }, 
                        }}
                    >
                        We helped a leading media company create an innovative
                        single web platform that connects with millions of
                        consumers and keeps readers engaged with their brand.
                    </Typography>

                    <Box
                        sx={{
                            display: "flex",
                            alignItems: "center",
                            mt: 3,
                            fontSize: "0.9rem",
                            color: "#333",
                            fontWeight: "500",
                        }}
                    >
                        Read the full case →
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
                        src="https://cdn.sanity.io/images/sha60dij/production/433e5976aa8274ae8100801374e65ddf609521fc-790x444.webp?rect=22,0,746,444&w=1185&h=705&fit=clip"
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



          {/* Challenges Section */}
          <Box
  sx={{
    backgroundColor: "#042b44",
    padding: { xs: "2rem 1rem", md: "4rem 2rem" }, // Adjusted padding for mobile
    position: "relative",
    color: "white",
    overflow: "hidden", // Prevent unintended scrolling
  }}
>
  {/* Background Image (Visible on all screens) */}
  <img
    src="pp.png"
    style={{
      position: "absolute",
      top: 10,
      right: -100,
      
      width: { xs: "100%", md: "50%" }, // Full-width on mobile, half on desktop
      height:{ xs: "40%", md: "100%" },
      objectFit: "cover",
      opacity: { xs: 1, md: 1 }, // Optional: Reduce opacity on mobile for readability
      zIndex: 0,
    }}
  />

  {/* Heading (Left-aligned on mobile) */}
  <Box
    sx={{
      maxWidth: "800px",
      marginLeft: { xs: "0", md: "200px" }, // No left margin on mobile
      position: "relative",
      zIndex: 1,
      padding: { xs: "1rem", md: "0" }, // Add padding on mobile
    }}
  >
    <Typography variant="h3" sx={{ fontWeight: "600", mb: 2, fontSize: { xs: "1.8rem", md: "2.4rem" } }}>
      Managing content at scale can be challenging
    </Typography>
     <Typography
                variant="body1"
                sx={{ fontSize: "1rem", lineHeight: 1.6, color: "#D9D9D9" }}
              >
                As your digital channels expand, content volumes increase, and
                more teams get involved in your content workflows, content
                operations become more complex. Governance gets more
                challenging, and finding and discovering content gets more
                time-consuming.
                <br /> <br /> Eventually, these factors lead to inconsistent,
                out-of-date, hard-to-access, and slow experiences for your
                customers.
              </Typography>
  </Box>

  {/* Grid Section (Single column on mobile) */}
  <Box
    sx={{
      marginTop: "3rem",
      display: "grid",
      gridTemplateColumns: {
        xs: "1fr",        // 1 column on mobile
        sm: "1fr 1fr",    // 2 columns on tablet
        md: "repeat(4, 1fr)", // 4 columns on desktop
      },
      gap: "2rem",
      position: "relative",
      zIndex: 1,
      width: { xs: "100%", md: "calc(100% - 200px)" }, // Responsive width
      marginLeft: { xs: "0", md: "200px" }, // Align with heading
    
      padding: { xs: "0px", md: "0" }, // Padding on mobile
    }}
  >
    {/* Cards (No changes needed, they'll adapt to grid) */}
    <Box
                sx={{
                  backgroundColor: "#0B2B44",
                  borderRadius: "0.75rem",
                  border: "2px solid rgba(205, 209, 238, 0.19)",
                  boxShadow: "0px 4px 12px rgba(212, 217, 227, 0.1)",
                  padding: 4,
                  textAlign: "center",
                  display: "flex",
                  flexDirection: "column",
                  alignItems: "center",
                  height: "100%",
                }}
              >
                 <LuBadgeInfo size={80}  />


              
                

                
                <Typography variant="h6" sx={{ fontWeight: 600, mt: 1, mb: 1 }}>
                  Lack of content governance
                </Typography>
                <Typography variant="body1" sx={{ color: "#D9D9D9" }}>
                 As content volume increases, efficiency for editorial teams is heavily reduced, content lifecycle complexity increases, resulting in slower time to market.
                </Typography>
              </Box>

    <Box
                sx={{
                  backgroundColor: "#0B2B44",
                  borderRadius: "0.75rem",
                   border: "2px solid rgba(205, 209, 238, 0.19)",
                  boxShadow: "0px 4px 12px rgba(212, 217, 227, 0.1)",
                  padding: 4,
                  textAlign: "center",
                  display: "flex",
                  flexDirection: "column",
                  alignItems: "center",
                  height: "100%",
                }}
              >
                <LuBadgeInfo size={80} />
                <Typography variant="h6" sx={{ fontWeight: 600, mt: 1, mb: 1 }}>
                  Inconsistencies across channels
                </Typography>
                <Typography variant="body1" sx={{ color: "#D9D9D9" }}>
                 A growing number of channels and underlying technologies can cause disjointed customer journeys. After a while customer engagement decreases, impacting conversion rates.
                </Typography>
              </Box>
     <Box
                sx={{
                  backgroundColor: "#0B2B44",
                  borderRadius: "0.75rem",
                  padding: 4,
                   border: "2px solid rgba(205, 209, 238, 0.19)",
                  boxShadow: "0px 4px 12px rgba(212, 217, 227, 0.1)",
                  textAlign: "center",
                  display: "flex",
                  flexDirection: "column",
                  alignItems: "center",
                  height: "100%",
                }}
              >
                <LuBadgeInfo size={80} />
                <Typography variant="h6" sx={{ fontWeight: 600, mt: 1, mb: 1 }}>
                  Disconnect between business and IT
                </Typography>
                <Typography variant="body1" sx={{ color: "#D9D9D9", display: "flex", alignItems: "center", justifyContent: "center" }}>
                 Too often, digital projects are often output-driven. There is not enough focus on delivering actual business outcomes, aligning with the overall business objectives and striving to meet KPIs.
                </Typography>
              </Box>
  </Box>
</Box>



          {/* How We Can Help Section */}
        <Box sx={{ marginTop: 4 }}>
      <Box
        sx={{
          borderTopLeftRadius: 10,
          marginLeft: { xs: 0, md: "200px" },
          padding: 3,
          backgroundColor: "white",
          boxShadow: "0px 4px 12px rgba(0, 0, 0, 0.1)",
        }}
      >
        {/* Header with title and button */}
        <Box
          sx={{
            display: "flex",
            justifyContent: "space-between",
            alignItems: { xs: "flex-start", md: "flex-start" },
            flexDirection: { xs: "column", md: "row" },
            gap: 2,
            width: "100%",
            marginBottom: { xs: 2, md: 0 },
          }}
        >
          <Typography
            variant="h2"
            sx={{
              fontSize: { xs: "1.8rem", md: "2.5rem" },
              fontWeight: "600",
              maxWidth: { xs: "100%", md: "70%" },
              lineHeight: 1.3,
              color: "#05283B",
              textAlign: { xs: "left", md: "left" },
            }}
          >
            How we can help
          </Typography>
          <Button
            variant="contained"
            sx={{
              backgroundColor: "#0c5d96",
              color: "white",
              fontWeight: "600",
              borderRadius: "2rem",
              paddingX: "1rem",
              paddingY: "0.75rem",
              letterSpacing: "0.1em",
              textTransform: "uppercase",
              fontSize: "0.65rem",
              marginRight: { xs: 0, md: "200px" },
              width: { xs: "100%", md: "auto" },
              "&:hover": {
                backgroundColor: "#063251",
              },
            }}
            aria-label="View all services"
          >
            Discover all our services
          </Button>
        </Box>

        {/* Description paragraph */}
        <Typography
          variant="body1"
          sx={{
            color: "#4A4A4A",
            lineHeight: 1.6,
            fontWeight: "400",
            maxWidth: { xs: "100%", md: "100%" },
            marginTop: "1.5rem",
            fontSize: "1.1rem",
            marginRight: { xs: 0, md: "500px" },
            textAlign: { xs: "left", md: "left" },
          }}
        >
          Amekio Fuse brings into place a future-friendly{" "}
          <strong>Content Supply Chain</strong> at your organization, empowering
          your teams to manage and deliver content-driven customer experiences
          at massive scales. To maximize success, we strive for a strong
          partnership in which we <strong>fuse</strong> strategic advice, with
          design and implementation services. The outcome is a robust{" "}
          <strong>Digital Experience Platform</strong> you can rely on to
          curate, manage, and optimize your digital experiences in an{" "}
          <strong>efficient</strong> and <strong>cost-effective</strong> way.
        </Typography>

        <Typography
          variant="h6"
          sx={{
            color: "#05283B",
            fontWeight: "600",
            marginTop: "1rem",
            fontStyle: "italic",
            textAlign: { xs: "left", md: "left" },
          }}
        >
          Turning your content into value.
        </Typography>

        {/* Services grid */}
        <Box
          sx={{
            marginTop: "2rem",
            display: "grid",
            gridTemplateColumns: {
              xs: "repeat(1, 1fr)",
              sm: "repeat(2, 1fr)",
              md: "repeat(4, 1fr)",
            },
            gap: "2rem",
            marginRight: { xs: 0, md: "200px" },
          }}
        >
          {/* Strategic Service */}
          <Box>
            <Box
              sx={{
                alignItems: "center",
                gap: 1,
                marginBottom: "0.5rem",
                display: "flex",
                flexDirection: "column",
              }}
            >
              <LightbulbIcon sx={{ color: "#F9A826", fontSize: "1.8rem" }} />

              <Typography
                variant="h6"
                sx={{
                  color: "#05283B",
                  fontWeight: "600",
                  textTransform: "uppercase",
                  letterSpacing: "0.05em",
                  textAlign: "center",
                }}
              >
                Strategize
              </Typography>
            </Box>

            <Typography
              variant="body2"
              sx={{
                color: "#4A4A4A",
                fontWeight: "400",
                lineHeight: 1.6,
                textAlign: "center",
              }}
            >
              Craft a tailored CX roadmap by identifying key challenges and
              prioritizing high-impact projects.
            </Typography>
          </Box>

          {/* Design Service */}
          <Box>
            <Box
              sx={{
                display: "flex",
                alignItems: "center",
                gap: 1,
                marginBottom: "0.5rem",
                flexDirection: "column",
                width: "100%",
              }}
            >
              <DesignServicesIcon
                sx={{ color: "#F9A826", fontSize: "1.8rem" }}
              />
              <Typography
                variant="h6"
                sx={{
                  color: "#05283B",
                  fontWeight: "600",
                  textTransform: "uppercase",
                  letterSpacing: "0.05em",
                  textAlign: "center",
                }}
              >
                Design
              </Typography>
            </Box>
            <Typography
              variant="body2"
              sx={{
                color: "#4A4A4A",
                fontWeight: "400",
                lineHeight: 1.6,
                textAlign: "center",
              }}
            >
              Develop and validate customer journeys with high-quality design,
              prototyping, and testing.
            </Typography>
            <Box
              component="ul"
              sx={{
                paddingLeft: "1.2rem",
                marginTop: "0.5rem",
                "& li": {
                  fontSize: "0.9rem",
                  color: "#4A4A4A",
                  marginBottom: "0.3rem",
                  lineHeight: 1.4,
                },
              }}
            ></Box>
          </Box>

          {/* Implementation Service */}
          <Box>
            <Box
              sx={{
                display: "flex",
                alignItems: "center",
                gap: 1,
                marginBottom: "0.5rem",
                flexDirection: "column",
              }}
            >
              <DevicesIcon sx={{ color: "#F9A826", fontSize: "1.8rem" }} />
              <Typography
                variant="h6"
                sx={{
                  color: "#05283B",
                  fontWeight: "600",
                  textTransform: "uppercase",
                  letterSpacing: "0.05em",
                  textAlign: "center",
                }}
              >
                Realize
              </Typography>
            </Box>
            <Typography
              variant="body2"
              sx={{
                color: "#4A4A4A",
                fontWeight: "400",
                lineHeight: 1.6,
                textAlign: "center",
              }}
            >
              Seamlessly implement and integrate key technologies, processes and
              expertise to bring your vision to life.
            </Typography>
            <Box
              component="ul"
              sx={{
                paddingLeft: "1.2rem",
                marginTop: "0.5rem",
                "& li": {
                  fontSize: "0.9rem",
                  color: "#4A4A4A",
                  marginBottom: "0.3rem",
                  lineHeight: 1.4,
                },
              }}
            ></Box>
          </Box>

          {/* Optimization Service */}
          <Box>
            <Box
              sx={{
                display: "flex",
                alignItems: "center",
                gap: 1,
                marginBottom: "0.5rem",
                flexDirection: "column",
              }}
            >
              <TrendingUpIcon
                sx={{ color: "#F9A826", fontSize: "1.8rem" }}
              />
              <Typography
                variant="h6"
                sx={{
                  color: "#05283B",
                  fontWeight: "600",
                  textTransform: "uppercase",
                  letterSpacing: "0.05em",
                  textAlign: "center",
                }}
              >
                Optimization
              </Typography>
            </Box>
            <Typography
              variant="body2"
              sx={{
                color: "#4A4A4A",
                fontWeight: "400",
                lineHeight: 1.6,
                textAlign: "center",
              }}
            >
              Drive continuous improvement & maximize customer value through
              experimentation, personalization, and reducing frictions.
            </Typography>
            <Box
              component="ul"
              sx={{
                paddingLeft: "1.2rem",
                marginTop: "0.5rem",
                "& li": {
                  fontSize: "0.9rem",
                  color: "#4A4A4A",
                  marginBottom: "0.3rem",
                  lineHeight: 1.4,
                },
              }}
            ></Box>
          </Box>
        </Box>
      </Box>
    </Box>


          {/* Latest Insights Section */}
       
    <Box sx={{ marginTop: 10, marginRight: { xs: 0, md: "200px" } }}>
      <Box
        sx={{
          borderTopRightRadius: 10,
          padding: { xs: 3, md: 10 }, // Adjust padding for small screens
          backgroundColor: "#F0F7FF",
        }}
      >
        <Typography
          variant="h3"
          sx={{
            color: "#1A1A1A",
            marginBottom: "0.75rem",
            marginLeft: { xs: 0, md: "100px" }, // Remove left margin on small
            textAlign: { xs: "left", md: "left" }, // Ensure left alignment on small
          }}
        >
          Latest insights
        </Typography>
        <Box
          sx={{
            display: "grid",
            gridTemplateColumns: { xs: "1fr", md: "repeat(4, 1fr)" },
            gap: "0.75rem",
            color: "#1A1A1A",
            fontWeight: "400",
            marginLeft: { xs: 0, md: "100px" }, // Remove left margin on small
          }}
        >
          {/* Insight 1 */}
          <Box
            sx={{
              display: "flex",
              flexDirection: "column",
              gap: "0.25rem",
              width: { xs: "100%", md: "350px" }, // Full width on small
            }}
          >
            <Card sx={{ maxWidth: 345, height: "100%" }}>
              <CardMedia
                sx={{ height: 140 }}
                image="https://storage.googleapis.com/a1aa/image/f98f2eb0-54ee-4f20-7507-223154623123.jpg"
                title="green iguana"
              />
              <CardContent>
                <Typography>15 Nov 2025</Typography>
                <Typography
                  variant="h6"
                  sx={{
                    fontWeight: "600",
                    "&:hover": {
                      color: "#EC6E28",
                      cursor: "pointer",
                    },
                  }}
                >
                  Customer portals done right: start with strategy, not with
                  feature dumps
                </Typography>
                <Typography variant="body2" sx={{ lineHeight: 1.3 }}>
                  How to set your portal initiative up for success by focusing
                  on vision and strategy before anything gets designed or built.
                </Typography>
              </CardContent>
              <Box
                sx={{
                  display: "flex",
                  alignItems: "center",
                  gap: "0.5rem",
                  marginTop: "auto", // Push author info to the bottom
                  marginLeft: "10px",
                  marginBottom: "20px",
                }}
              >
                <Box
                  component="img"
                  src="https://storage.googleapis.com/a1aa/image/98097780-18eb-48a8-5843-d82fe22b517e.jpg"
                  alt="Profile picture of John Doe"
                  sx={{
                    width: "2.5rem",
                    height: "2.5rem",
                    borderRadius: "50%",
                  }}
                />
                <span
                  style={{
                    fontSize: { xs: "0.7rem", md: "0.8rem" }, // Slightly larger font on small
                    fontWeight: "600",
                  }}
                >
                  John Doe
                </span>
              </Box>
            </Card>
          </Box>

          {/* Insight 2 */}
          <Box
            sx={{
              display: "flex",
              flexDirection: "column",
              gap: "0.25rem",
              width: { xs: "100%", md: "350px" }, // Full width on small
            }}
          >
            <Card sx={{ maxWidth: 345, height: "100%" }}>
              <CardMedia
                sx={{ height: 140 }}
                image="https://storage.googleapis.com/a1aa/image/7b0804ee-4da9-402a-031c-ad6ced84591d.jpg"
                title="green iguana"
              />
              <CardContent>
                <Typography>15 Nov 2025</Typography>
                <Typography
                  variant="h6"
                  sx={{
                    "&:hover": {
                      color: "#EC6E28",
                      cursor: "pointer",
                    },
                    fontWeight: "600",
                  }}
                >
                  Foundations for a robust and scalable customer portal
                </Typography>
                <Typography variant="body2" sx={{ lineHeight: 1.3 }}>
                  In the wake of global disruptions and rising customer
                  expectations, companies are increasingly digitizing their
                  customer service/communications to improve user satisfaction
                  and operational efficiency. Let's discover the best practices
                  for building a future-proof customer portal
                </Typography>
              </CardContent>
              <Box
                sx={{
                  display: "flex",
                  alignItems: "center",
                  gap: "0.5rem",
                  marginTop: "auto", // Push author info to the bottom
                  marginLeft: "10px",
                  marginBottom: "20px",
                }}
              >
                <Box
                  component="img"
                  src="https://storage.googleapis.com/a1aa/image/21322c74-1623-40b9-d597-a9c23a3bd14b.jpg"
                  alt="Profile picture of Alice Smith"
                  sx={{
                    width: "2.5rem",
                    height: "2.5rem",
                    borderRadius: "50%",
                  }}
                />
                <span
                  style={{
                    fontSize: { xs: "0.7rem", md: "0.8rem" }, // Slightly larger font on small
                    fontWeight: "600",
                  }}
                >
                  Alice Smith
                </span>
              </Box>
            </Card>
          </Box>

          {/* Insight 3 */}
          <Box
            sx={{
              display: "flex",
              flexDirection: "column",
              gap: "0.25rem",
              width: { xs: "100%", md: "350px" }, // Full width on small
            }}
          >
            <Card sx={{ maxWidth: 345, height: "100%" }}>
              <CardMedia
                sx={{ height: 140 }}
                image="https://storage.googleapis.com/a1aa/image/3293d7d6-3889-4a83-8d84-d708134cf30b.jpg"
                title="green iguana"
              />
              <CardContent>
                <Typography>15 Nov 2025</Typography>
                <Typography
                  variant="h6"
                  sx={{
                    fontWeight: "600",
                    "&:hover": {
                      color: "#EC6E28",
                      cursor: "pointer",
                    },
                  }}
                >
                  Edge Delivery Services: the future of Adobe Experience Manager
                </Typography>
                <Typography variant="body2" sx={{ lineHeight: 1.3 }}>
                  Adobe Edge Delivery Services (EDS) is not only a new suite of
                  powerful tools for publishing and delivering content in a more
                  fast and performant way, but also enables businesses to
                  drastically increase their content velocity.
                </Typography>
              </CardContent>
              <Box
                sx={{
                  display: "flex",
                  alignItems: "center",
                  gap: "0.5rem",
                  marginTop: "auto", // Push author info to the bottom
                  marginLeft: "10px",
                  marginBottom: "20px",
                }}
              >
                <Box
                  component="img"
                  src="https://storage.googleapis.com/a1aa/image/3d825c50-3481-4fff-8d45-c13d9b6d0454.jpg"
                  alt="Profile picture of Michael Brown"
                  sx={{
                    width: "2.5rem",
                    height: "2.5rem",
                    borderRadius: "50%",
                  }}
                />
                <span
                  style={{
                    fontSize: { xs: "0.7rem", md: "0.8rem" }, // Slightly larger font on small
                    fontWeight: "600",
                  }}
                >
                  Michael Brown
                </span>
              </Box>
            </Card>
          </Box>
        </Box>
      </Box>
    </Box>
  





 {/* Technologies Section */}
      <Box sx={{  textAlign: "center", marginBottom: "100px", padding: { xs: 4, md: "0" }, }}>
      <Typography
        variant="h3"
        sx={{
          fontWeight: "400",
          maxWidth: "100%",
          margin: "0 auto",
          lineHeight: 1.3,
          color: "white",
          marginTop: "100px",
          fontSize: { xs: "2rem", md: "2.5rem" }, // Adjust font size for small
        }}
      >
        Core{" "}
        <span style={{ color: "#F9A826", fontWeight: "400" }}>
          technologies
        </span>{" "}
        we trust upon
      </Typography>
      <Typography
        variant="h6"
        sx={{
          color: "#D9D9D9",
          maxWidth: "100%",
          margin: "1rem auto",
          lineHeight: 1.3,
          
          fontSize: { xs: "1.5rem", md: "1.2rem" }, // Adjust font size for small
        }}
      >
        We focus on gaining <strong>deep expertize </strong>in a select number
        of core products, each applicable to 
        <br /> different use cases we see in the market today.
      </Typography>
      <Box
        sx={{
          marginTop: "3rem", // Increased margin for better spacing on small
          display: "flex",
          flexDirection: { xs: "column", md: "row" }, // Stack on small
          justifyContent: "center",
          alignItems: "center",
          gap: { xs: "2rem", md: "5rem" }, // Adjust gap for small
        }}
      >
        <Box sx={{ textAlign: "center" }}>
          <Box
            component="img"
            src="https://cdn.sanity.io/images/sha60dij/production/86359960f563f3503d20e5cbc47dee1905efdf83-300x300.svg?h=160&fm=webp&fit=clip"
            alt="Adobe Experience Manager logo in black on white background"
            sx={{ height: "100px", width: "100px", margin: "0 auto" }} // Center image
          />
          <Box>
            <Typography sx={{ color: "white", textAlign: "center" }}>
              Adoba Experience <br />
              Cloud
            </Typography>
          </Box>
        </Box>

        <Box sx={{ textAlign: "center" }}>
          <Box
            component="img"
            src="https://cdn.sanity.io/images/sha60dij/production/1012d97b2fbdc09471ff84c7d5098a1e302f8a28-300x300.svg?h=160&fm=webp&fit=clip"
            alt="Sitecore logo in black on white background"
            sx={{ height: "100px", width: "100px", margin: "0 auto" }} // Center image
          />
          <Box>
            <Typography sx={{ color: "white", textAlign: "center" }}>
              Drupal <br />
            </Typography>
          </Box>
        </Box>

        <Box sx={{ textAlign: "center" }}>
          <Box
            component="img"
            src="https://cdn.sanity.io/images/sha60dij/production/91ea8b809590a2bd1a6aa09cccffe898b1a437f3-300x300.svg?h=160&fm=webp&fit=clip"
            alt="Acquia logo in black on white background"
            sx={{ height: "100px", width: "100px", margin: "0 auto" }} // Center image
          />
          <Box>
            <Typography sx={{ color: "white", textAlign: "center" }}>
              Sanity
            </Typography>
          </Box>
        </Box>

        <Box sx={{ textAlign: "center" }}>
          <Box
            component="img"
            src="https://cdn.sanity.io/images/sha60dij/production/5c4e33d991060fc1668e565adc4c95b23a1d7dc8-300x300.svg?h=160&fm=webp&fit=clip"
            alt="Contentful logo in black on white background"
            sx={{ height: "100px", width: "100px", margin: "0 auto" }} // Center image
          />
          <Box>
            <Typography sx={{ color: "white", textAlign: "center" }}>
              Content Square
            </Typography>
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
              mt: { xs: -3, md: '0' },
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
      </Box>

    </>
  );
};
