import { Box, Typography, Avatar, Button, Grid, Container, Link } from "@mui/material";
import { Link as RouterLink } from "react-router-dom";
import MailOutlineIcon from '@mui/icons-material/MailOutline';
import LinkedInIcon from '@mui/icons-material/LinkedIn';

export const Work = () => {
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
            <Box component="span">Our Work</Box>
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
                Our Work
              </Typography>
              
              <Typography sx={{ 
                fontSize: { xs: "1.2rem", sm: "1.1rem", md: "2rem" }, 
                lineHeight: 1.5, 
                color: "#D9D9D9", 
                marginBottom: "2rem",
                maxWidth: { xs: "100%", md: "90%" }
              }}>
               For over 20 years, we have been<Box component="span" sx={{ color: "#F9A826", fontWeight: "bold" }}> partnering</Box>
                with our ambitious clients, turning their content into value through highly scalable content platforms.
              </Typography>
            </Box>
            
            {/* Decorative graphics for desktop */}
            <Box sx={{ 
              position: "absolute", 
              top: "-20%", 
              right: "-2%", 
              width: "50%", 
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




<Box
      sx={{
        display: "flex",
        flexDirection: "column",
        gap: 8,
        mt: 30,
        alignItems: "center",
        backgroundColor: "white",
        width: "100%",
        
      }}
    >
      {/* First Case Study */}
      <Box
        sx={{
          display: "flex",
          flexDirection: { xs: "column", md: "row" },
          gap: { xs: 3, md: 6 },
          width: "85%",
          mt: 10,
          ml: { xs: 0, md: "80px" },
          
        }}
      >
        {/* Image */}
        <Box
          sx={{
            width: { xs: "100%", md: "500px" },
            height: { xs: "300px", md: "500px" },
            overflow: "hidden",
            flexShrink: 0,
          }}
        >
          <Box
            component="img"
            src="https://cdn.sanity.io/images/sha60dij/production/733f8884caa219a5518dcc494cd0ac0c8da4887f-1200x675.webp?rect=195,0,810,675&w=1200&h=1000&fit=clip"
            alt="KBC digital platform"
            sx={{
              width: "100%",
              height: "100%",
              objectFit: "cover",
              transition: "transform 0.3s ease",
              "&:hover": {
                transform: "scale(1.03)",
              },
            }}
          />
        </Box>

        {/* Text content */}
        <Box
          sx={{
            width: { xs: "100%", md: "calc(100% - 500px - 48px)" },
            display: "flex",
            flexDirection: "column",
            gap: 3,
            position: "relative",
            minHeight: { xs: "auto", md: "500px" },
            mr: { xs: 0, md: "80px" },
          }}
        >
          {/* Client name */}
          <Typography
            variant="overline"
            sx={{
              fontSize: "1rem",
              letterSpacing: "0.1em",
              color: "text.secondary",
              fontWeight: "bold",
            }}
          >
            KBC
          </Typography>

          {/* Heading and logo row */}
          <Box
            sx={{
              display: "flex",
              justifyContent: "space-between",
              alignItems: "flex-start",
              gap: 2,
            }}
          >
            {/* Main heading */}
            <Typography
              variant="h1"
              sx={{
                fontSize: { xs: "2rem", md: "3rem" },
                fontFamily: "serif",
                fontWeight: "normal",
                lineHeight: 1.2,
                flex: 1,
              }}
            >
              Building an omnichannel digital experience platform
            </Typography>

            {/* Logo */}
            <Box
              sx={{
                width: "80px",
                height: "60px",
                mt: { xs: 0, md: 1 },
                flexShrink: 0,
              }}
            >
              <Box
                component="img"
                src="https://cdn.sanity.io/images/sha60dij/production/dcb51510e460ef62fde649a45acbfc434c84db49-800x634.png?h=120&fit=clip"
                alt="KBC logo"
                sx={{
                  width: "100%",
                  height: "100%",
                  objectFit: "contain",
                }}
              />
            </Box>
          </Box>

          {/* Description */}
          <Typography
            variant="body1"
            sx={{
              fontSize: "1.1rem",
              lineHeight: 1.6,
              color: "text.secondary",
            }}
          >
            We are supporting KBC with designing, building and optimizing their digital experience platform, setting the bar for the financial sector, providing a hybrid one-stop shop for bank-insurance customers, providing seamless high-value interaction across channels.
          </Typography>

          {/* Details */}
          <Box
            sx={{
              display: "flex",
              flexDirection: "column",
              gap: 1,
              my: 2,
            }}
          >
            <Typography variant="body2">
              <Box component="span" sx={{ fontWeight: "bold" }}>Duration:</Box> Partnership since 2008
            </Typography>
            <Typography variant="body2">
              <Box component="span" sx={{ fontWeight: "bold" }}>Collaborations:</Box> Expert Staffing
            </Typography>
            <Typography variant="body2">
              <Box component="span" sx={{ fontWeight: "bold" }}>Core technologies:</Box> Adobe Experience Cloud
            </Typography>
            <Typography variant="body2">
              <Box component="span" sx={{ fontWeight: "bold" }}>Services:</Box> CX Technology Advisory, DXP Implementation, CX Optimize
            </Typography>
          </Box>

          {/* Button */}
          <Box
            sx={{
              display: "flex",
              justifyContent: "flex-end",
              mt: "auto",
              pt: 2,
            }}
          >
            <Button
              variant="contained"
              sx={{
                backgroundColor: "#05314E",
                color: "white",
                borderRadius: "30px",
                px: 4,
                py: 1.5,
                fontSize: "0.875rem",
                textTransform: "none",
                fontWeight: "bold",
                "&:hover": {
                  backgroundColor: "#0a4b75",
                },
              }}
            >
              Read the full case
            </Button>
          </Box>
        </Box>
      </Box>

      {/* Second Case Study */}
      <Box
        sx={{
          display: "flex",
          flexDirection: { xs: "column", md: "row" },
          gap: { xs: 3, md: 6 },
          width: "85%",
          ml: { xs: 0, md: "80px" },
        }}
      >
        {/* Image */}
        <Box
          sx={{
            width: { xs: "100%", md: "500px" },
            height: { xs: "300px", md: "500px" },
            overflow: "hidden",
            flexShrink: 0,
            
          }}
        >
          <Box
            component="img"
            src="https://cdn.sanity.io/images/sha60dij/production/433e5976aa8274ae8100801374e65ddf609521fc-790x444.webp?rect=129,0,533,444&w=1200&h=1000&fit=clip"
            alt="KBC digital platform"
            sx={{
              width: "100%",
              height: "100%",
              objectFit: "cover",
              transition: "transform 0.3s ease",
              "&:hover": {
                transform: "scale(1.03)",
              },
            }}
          />
        </Box>

        {/* Text content */}
        <Box
          sx={{
            width: { xs: "100%", md: "calc(100% - 500px - 48px)" },
            display: "flex",
            flexDirection: "column",
            gap: 3,
            position: "relative",
            minHeight: { xs: "auto", md: "500px" },
            mr: { xs: 0, md: "80px" },
          }}
        >
          {/* Client name */}
          <Typography
            variant="overline"
            sx={{
              fontSize: "1rem",
              letterSpacing: "0.1em",
              color: "text.secondary",
              fontWeight: "bold",
            }}
          >
            Mediafin
          </Typography>

          {/* Heading and logo row */}
          <Box
            sx={{
              display: "flex",
              justifyContent: "space-between",
              alignItems: "flex-start",
              gap: 2,
            }}
          >
            {/* Main heading */}
            <Typography
              variant="h1"
              sx={{
                fontSize: { xs: "2rem", md: "3rem" },
                fontFamily: "serif",
                fontWeight: "normal",
                lineHeight: 1.2,
                flex: 1,
              }}
            >
              Engaging readers in a modern digital age
            </Typography>

            {/* Logo */}
            <Box
              sx={{
                width: "80px",
                height: "60px",
                mt: { xs: 0, md: 1 },
                flexShrink: 0,
              }}
            >
              <Box
                component="img"
                src="https://cdn.sanity.io/images/sha60dij/production/4075fe37343fc7e4e46fe4d9d2d2aa04b6a3010d-300x150.png?h=120&fit=clip"
                alt="Mediafin logo"
                sx={{
                  width: "100%",
                  height: "100%",
                  objectFit: "contain",
                }}
              />
            </Box>
          </Box>

          {/* Description */}
          <Typography
            variant="body1"
            sx={{
              fontSize: "1.1rem",
              lineHeight: 1.6,
              color: "text.secondary",
            }}
          >
            We helped Mediafin find innovative ways to customize online experiences for media consumers and keep readers engaged with their brand.
          </Typography>

          {/* Details */}
          <Box
            sx={{
              display: "flex",
              flexDirection: "column",
              gap: 1,
              my: 2,
            }}
          >
            <Typography variant="body2">
              <Box component="span" sx={{ fontWeight: "bold" }}>Duration:</Box> Partnership since 2019
            </Typography>
            <Typography variant="body2">
              <Box component="span" sx={{ fontWeight: "bold" }}>Collaborations:</Box> Expert Staffing
            </Typography>
            <Typography variant="body2">
              <Box component="span" sx={{ fontWeight: "bold" }}>Core technologies:</Box> Adobe Experience Manager
            </Typography>
            <Typography variant="body2">
              <Box component="span" sx={{ fontWeight: "bold" }}>Services:</Box> CX Technology Advisory, DXP Implementation
            </Typography>
          </Box>

          {/* Button */}
          <Box
            sx={{
              display: "flex",
              justifyContent: "flex-end",
              mt: "auto",
              pt: 2,
            }}
          >
            <Button
              variant="contained"
              sx={{
                backgroundColor: "#05314E",
                color: "white",
                borderRadius: "30px",
                px: 4,
                py: 1.5,
                fontSize: "0.875rem",
                textTransform: "none",
                fontWeight: "bold",
                "&:hover": {
                  backgroundColor: "#0a4b75",
                },
              }}
            >
              Read the full case
            </Button>
          </Box>
        </Box>
      </Box>


       {/* Third Case Study */}
      <Box
        sx={{
          display: "flex",
          flexDirection: { xs: "column", md: "row" },
          gap: { xs: 3, md: 6 },
          width: "85%",
          ml: { xs: 0, md: "80px" },
        }}
      >
        {/* Image */}
        <Box
          sx={{
            width: { xs: "100%", md: "500px" },
            height: { xs: "300px", md: "500px" },
            overflow: "hidden",
            flexShrink: 0,
            
          }}
        >
          <Box
            component="img"
            src="https://cdn.sanity.io/images/sha60dij/production/67e88285ec7cae37d8a58ce3d65a6126a16f0fe5-1769x1089.png?rect=232,0,1307,1089&w=1200&h=1000&fit=clip"
            alt="KBC digital platform"
            sx={{
              width: "100%",
              height: "100%",
              objectFit: "cover",
              transition: "transform 0.3s ease",
              "&:hover": {
                transform: "scale(1.03)",
              },
            }}
          />
        </Box>

        {/* Text content */}
        <Box
          sx={{
            width: { xs: "100%", md: "calc(100% - 500px - 48px)" },
            display: "flex",
            flexDirection: "column",
            gap: 3,
            position: "relative",
            minHeight: { xs: "auto", md: "500px" },
            mr: { xs: 0, md: "80px" },
          }}
        >
          {/* Client name */}
          <Typography
            variant="overline"
            sx={{
              fontSize: "1rem",
              letterSpacing: "0.1em",
              color: "text.secondary",
              fontWeight: "bold",
            }}
          >
            Mediafin
          </Typography>

          {/* Heading and logo row */}
          <Box
            sx={{
              display: "flex",
              justifyContent: "space-between",
              alignItems: "flex-start",
              gap: 2,
            }}
          >
            {/* Main heading */}
            <Typography
              variant="h1"
              sx={{
                fontSize: { xs: "2rem", md: "3rem" },
                fontFamily: "serif",
                fontWeight: "normal",
                lineHeight: 1.2,
                flex: 1,
              }}
            >
              Engaging readers in a modern digital age
            </Typography>

            {/* Logo */}
            <Box
              sx={{
                width: "80px",
                height: "60px",
                mt: { xs: 0, md: 1 },
                flexShrink: 0,
              }}
            >
              <Box
                component="img"
                src="https://cdn.sanity.io/images/sha60dij/production/81d22faaa102c92e88ff6a092d400500c7e537ee-300x150.png?h=120&fit=clip"
                alt="Mediafin logo"
                sx={{
                  width: "100%",
                  height: "100%",
                  objectFit: "contain",
                }}
              />
            </Box>
          </Box>

          {/* Description */}
          <Typography
            variant="body1"
            sx={{
              fontSize: "1.1rem",
              lineHeight: 1.6,
              color: "text.secondary",
            }}
          >
            We helped Mediafin find innovative ways to customize online experiences for media consumers and keep readers engaged with their brand.
          </Typography>

          {/* Details */}
          <Box
            sx={{
              display: "flex",
              flexDirection: "column",
              gap: 1,
              my: 2,
            }}
          >
            <Typography variant="body2">
              <Box component="span" sx={{ fontWeight: "bold" }}>Duration:</Box> Partnership since 2019
            </Typography>
            <Typography variant="body2">
              <Box component="span" sx={{ fontWeight: "bold" }}>Collaborations:</Box> Expert Staffing
            </Typography>
            <Typography variant="body2">
              <Box component="span" sx={{ fontWeight: "bold" }}>Core technologies:</Box> Adobe Experience Manager
            </Typography>
            <Typography variant="body2">
              <Box component="span" sx={{ fontWeight: "bold" }}>Services:</Box> CX Technology Advisory, DXP Implementation
            </Typography>
          </Box>

          {/* Button */}
          <Box
            sx={{
              display: "flex",
              justifyContent: "flex-end",
              mt: "auto",
              pt: 2,
            }}
          >
            <Button
              variant="contained"
              sx={{
                backgroundColor: "#05314E",
                color: "white",
                borderRadius: "30px",
                px: 4,
                py: 1.5,
                fontSize: "0.875rem",
                textTransform: "none",
                fontWeight: "bold",
                "&:hover": {
                  backgroundColor: "#0a4b75",
                },
              }}
            >
              Read the full case
            </Button>
          </Box>
        </Box>
      </Box>


      {/* Fourth Case Study */}
      
      <Box
        sx={{
          display: "flex",
          flexDirection: { xs: "column", md: "row" },
          gap: { xs: 3, md: 6 },
          width: "85%",
          ml: { xs: 0, md: "80px" },
        }}
      >
        {/* Image */}
        <Box
          sx={{
            width: { xs: "100%", md: "500px" },
            height: { xs: "300px", md: "500px" },
            overflow: "hidden",
            flexShrink: 0,
            
          }}
        >
          <Box
            component="img"
            src="https://cdn.sanity.io/images/sha60dij/production/93998e24254bb19319322247e70b2bdd87aef4ab-790x655.webp?rect=2,0,786,655&w=1200&h=1000&fit=clip"
            alt="KBC digital platform"
            sx={{
              width: "100%",
              height: "100%",
              objectFit: "cover",
              transition: "transform 0.3s ease",
              "&:hover": {
                transform: "scale(1.03)",
              },
            }}
          />
        </Box>

        {/* Text content */}
        <Box
          sx={{
            width: { xs: "100%", md: "calc(100% - 500px - 48px)" },
            display: "flex",
            flexDirection: "column",
            gap: 3,
            position: "relative",
            minHeight: { xs: "auto", md: "500px" },
            mr: { xs: 0, md: "80px" },
          }}
        >
          {/* Client name */}
          <Typography
            variant="overline"
            sx={{
              fontSize: "1rem",
              letterSpacing: "0.1em",
              color: "text.secondary",
              fontWeight: "bold",
            }}
          >
            Mediafin
          </Typography>

          {/* Heading and logo row */}
          <Box
            sx={{
              display: "flex",
              justifyContent: "space-between",
              alignItems: "flex-start",
              gap: 2,
            }}
          >
            {/* Main heading */}
            <Typography
              variant="h1"
              sx={{
                fontSize: { xs: "2rem", md: "3rem" },
                fontFamily: "serif",
                fontWeight: "normal",
                lineHeight: 1.2,
                flex: 1,
              }}
            >
              Engaging readers in a modern digital age
            </Typography>

            {/* Logo */}
            <Box
              sx={{
                width: "80px",
                height: "60px",
                mt: { xs: 0, md: 1 },
                flexShrink: 0,
              }}
            >
              <Box
                component="img"
                src="https://cdn.sanity.io/images/sha60dij/production/58cf8a84d6f4f5a3467ac69409dabcf7a26d56c3-300x150.png?h=120&fit=clip"
                alt="Mediafin logo"
                sx={{
                  width: "100%",
                  height: "100%",
                  objectFit: "contain",
                }}
              />
            </Box>
          </Box>

          {/* Description */}
          <Typography
            variant="body1"
            sx={{
              fontSize: "1.1rem",
              lineHeight: 1.6,
              color: "text.secondary",
            }}
          >
            We helped Mediafin find innovative ways to customize online experiences for media consumers and keep readers engaged with their brand.
          </Typography>

          {/* Details */}
          <Box
            sx={{
              display: "flex",
              flexDirection: "column",
              gap: 1,
              my: 2,
            }}
          >
            <Typography variant="body2">
              <Box component="span" sx={{ fontWeight: "bold" }}>Duration:</Box> Partnership since 2019
            </Typography>
            <Typography variant="body2">
              <Box component="span" sx={{ fontWeight: "bold" }}>Collaborations:</Box> Expert Staffing
            </Typography>
            <Typography variant="body2">
              <Box component="span" sx={{ fontWeight: "bold" }}>Core technologies:</Box> Adobe Experience Manager
            </Typography>
            <Typography variant="body2">
              <Box component="span" sx={{ fontWeight: "bold" }}>Services:</Box> CX Technology Advisory, DXP Implementation
            </Typography>
          </Box>

          {/* Button */}
          <Box
            sx={{
              display: "flex",
              justifyContent: "flex-end",
              mt: "auto",
              pt: 2,
            }}
          >
            <Button
              variant="contained"
              sx={{
                backgroundColor: "#05314E",
                color: "white",
                borderRadius: "30px",
                px: 4,
                py: 1.5,
                fontSize: "0.875rem",
                textTransform: "none",
                fontWeight: "bold",
                "&:hover": {
                  backgroundColor: "#0a4b75",
                },
              }}
            >
              Read the full case
            </Button>
          </Box>
        </Box>
      </Box>

      {/* Fifth Case Study */}
      <Box
        sx={{
          display: "flex",
          flexDirection: { xs: "column", md: "row" },
          gap: { xs: 3, md: 6 },
          width: "85%",
          ml: { xs: 0, md: "80px" },
        }}
      >
        {/* Image */}
        <Box
          sx={{
            width: { xs: "100%", md: "500px" },
            height: { xs: "300px", md: "500px" },
            overflow: "hidden",
            flexShrink: 0,
            
          }}
        >
          <Box
            component="img"
            src="https://cdn.sanity.io/images/sha60dij/production/e68361ce5ea7897d0eda0077090f9d2892462221-790x564.webp?rect=57,0,677,564&w=1200&h=1000&fit=clip"
            alt="KBC digital platform"
            sx={{
              width: "100%",
              height: "100%",
              objectFit: "cover",
              transition: "transform 0.3s ease",
              "&:hover": {
                transform: "scale(1.03)",
              },
            }}
          />
        </Box>

        {/* Text content */}
        <Box
          sx={{
            width: { xs: "100%", md: "calc(100% - 500px - 48px)" },
            display: "flex",
            flexDirection: "column",
            gap: 3,
            position: "relative",
            minHeight: { xs: "auto", md: "500px" },
            mr: { xs: 0, md: "80px" },
          }}
        >
          {/* Client name */}
          <Typography
            variant="overline"
            sx={{
              fontSize: "1rem",
              letterSpacing: "0.1em",
              color: "text.secondary",
              fontWeight: "bold",
            }}
          >
            Mediafin
          </Typography>

          {/* Heading and logo row */}
          <Box
            sx={{
              display: "flex",
              justifyContent: "space-between",
              alignItems: "flex-start",
              gap: 2,
            }}
          >
            {/* Main heading */}
            <Typography
              variant="h1"
              sx={{
                fontSize: { xs: "2rem", md: "3rem" },
                fontFamily: "serif",
                fontWeight: "normal",
                lineHeight: 1.2,
                flex: 1,
              }}
            >
              Engaging readers in a modern digital age
            </Typography>

            {/* Logo */}
            <Box
              sx={{
                width: "80px",
                height: "60px",
                mt: { xs: 0, md: 1 },
                flexShrink: 0,
              }}
            >
              <Box
                component="img"
                src="https://cdn.sanity.io/images/sha60dij/production/17e069cd0e23c2eb05abc30333b7c3ea6e740168-300x150.png?h=120&fit=clip"
                alt="Mediafin logo"
                sx={{
                  width: "100%",
                  height: "100%",
                  objectFit: "contain",
                }}
              />
            </Box>
          </Box>

          {/* Description */}
          <Typography
            variant="body1"
            sx={{
              fontSize: "1.1rem",
              lineHeight: 1.6,
              color: "text.secondary",
            }}
          >
            We helped Mediafin find innovative ways to customize online experiences for media consumers and keep readers engaged with their brand.
          </Typography>

          {/* Details */}
          <Box
            sx={{
              display: "flex",
              flexDirection: "column",
              gap: 1,
              my: 2,
            }}
          >
            <Typography variant="body2">
              <Box component="span" sx={{ fontWeight: "bold" }}>Duration:</Box> Partnership since 2019
            </Typography>
            <Typography variant="body2">
              <Box component="span" sx={{ fontWeight: "bold" }}>Collaborations:</Box> Expert Staffing
            </Typography>
            <Typography variant="body2">
              <Box component="span" sx={{ fontWeight: "bold" }}>Core technologies:</Box> Adobe Experience Manager
            </Typography>
            <Typography variant="body2">
              <Box component="span" sx={{ fontWeight: "bold" }}>Services:</Box> CX Technology Advisory, DXP Implementation
            </Typography>
          </Box>

          {/* Button */}
          <Box
            sx={{
              display: "flex",
              justifyContent: "flex-end",
              mt: "auto",
              pt: 2,
            }}
          >
            <Button
              variant="contained"
              sx={{
                backgroundColor: "#05314E",
                color: "white",
                borderRadius: "30px",
                px: 4,
                py: 1.5,
                fontSize: "0.875rem",
                textTransform: "none",
                fontWeight: "bold",
                "&:hover": {
                  backgroundColor: "#0a4b75",
                },
              }}
            >
              Read the full case
            </Button>
          </Box>
        </Box>
      </Box>


      {/* Sixth Case Study */}
       <Box
        sx={{
          display: "flex",
          flexDirection: { xs: "column", md: "row" },
          gap: { xs: 3, md: 6 },
          width: "85%",
          ml: { xs: 0, md: "80px" },
        }}
      >
        {/* Image */}
        <Box
          sx={{
            width: { xs: "100%", md: "500px" },
            height: { xs: "300px", md: "500px" },
            overflow: "hidden",
            flexShrink: 0,
            
          }}
        >
          <Box
            component="img"
            src="https://cdn.sanity.io/images/sha60dij/production/7024ebb96b130dd56a9daf85e0365ba4e8cc88c3-790x554.webp?rect=63,0,665,554&w=1200&h=1000&fit=clip"
            alt="KBC digital platform"
            sx={{
              width: "100%",
              height: "100%",
              objectFit: "cover",
              transition: "transform 0.3s ease",
              "&:hover": {
                transform: "scale(1.03)",
              },
            }}
          />
        </Box>

        {/* Text content */}
        <Box
          sx={{
            width: { xs: "100%", md: "calc(100% - 500px - 48px)" },
            display: "flex",
            flexDirection: "column",
            gap: 3,
            position: "relative",
            minHeight: { xs: "auto", md: "500px" },
            mr: { xs: 0, md: "80px" },
          }}
        >
          {/* Client name */}
          <Typography
            variant="overline"
            sx={{
              fontSize: "1rem",
              letterSpacing: "0.1em",
              color: "text.secondary",
              fontWeight: "bold",
            }}
          >
            Mediafin
          </Typography>

          {/* Heading and logo row */}
          <Box
            sx={{
              display: "flex",
              justifyContent: "space-between",
              alignItems: "flex-start",
              gap: 2,
            }}
          >
            {/* Main heading */}
            <Typography
              variant="h1"
              sx={{
                fontSize: { xs: "2rem", md: "3rem" },
                fontFamily: "serif",
                fontWeight: "normal",
                lineHeight: 1.2,
                flex: 1,
              }}
            >
              Engaging readers in a modern digital age
            </Typography>

            {/* Logo */}
            <Box
              sx={{
                width: "80px",
                height: "60px",
                mt: { xs: 0, md: 1 },
                flexShrink: 0,
              }}
            >
              <Box
                component="img"
                src="https://cdn.sanity.io/images/sha60dij/production/1503f17d9171cd90201a891540a317cae1afd46b-300x150.png?h=120&fit=clip"
                alt="Mediafin logo"
                sx={{
                  width: "100%",
                  height: "100%",
                  objectFit: "contain",
                }}
              />
            </Box>
          </Box>

          {/* Description */}
          <Typography
            variant="body1"
            sx={{
              fontSize: "1.1rem",
              lineHeight: 1.6,
              color: "text.secondary",
            }}
          >
            We helped Mediafin find innovative ways to customize online experiences for media consumers and keep readers engaged with their brand.
          </Typography>

          {/* Details */}
          <Box
            sx={{
              display: "flex",
              flexDirection: "column",
              gap: 1,
              my: 2,
            }}
          >
            <Typography variant="body2">
              <Box component="span" sx={{ fontWeight: "bold" }}>Duration:</Box> Partnership since 2019
            </Typography>
            <Typography variant="body2">
              <Box component="span" sx={{ fontWeight: "bold" }}>Collaborations:</Box> Expert Staffing
            </Typography>
            <Typography variant="body2">
              <Box component="span" sx={{ fontWeight: "bold" }}>Core technologies:</Box> Adobe Experience Manager
            </Typography>
            <Typography variant="body2">
              <Box component="span" sx={{ fontWeight: "bold" }}>Services:</Box> CX Technology Advisory, DXP Implementation
            </Typography>
          </Box>

          {/* Button */}
          <Box
            sx={{
              display: "flex",
              justifyContent: "flex-end",
              mt: "auto",
              pt: 2,
            }}
          >
            <Button
              variant="contained"
              sx={{
                backgroundColor: "#05314E",
                color: "white",
                borderRadius: "30px",
                px: 4,
                py: 1.5,
                fontSize: "0.875rem",
                textTransform: "none",
                fontWeight: "bold",
                "&:hover": {
                  backgroundColor: "#0a4b75",
                },
              }}
            >
              Read the full case
            </Button>
          </Box>
        </Box>
      </Box>

     
      {/* Seventh Case Study */}
       <Box
        sx={{
          display: "flex",
          flexDirection: { xs: "column", md: "row" },
          gap: { xs: 3, md: 6 },
          width: "85%",
          ml: { xs: 0, md: "80px" },
        }}
      >
        {/* Image */}
        <Box
          sx={{
            width: { xs: "100%", md: "500px" },
            height: { xs: "300px", md: "500px" },
            overflow: "hidden",
            flexShrink: 0,
            
          }}
        >
          <Box
            component="img"
            src="https://cdn.sanity.io/images/sha60dij/production/c528df30dfaf0ab115aa8240d2aba4b364e7becf-790x683.webp?rect=0,13,790,658&w=1200&h=1000&fit=clip"
            alt="KBC digital platform"
            sx={{
              width: "100%",
              height: "100%",
              objectFit: "cover",
              transition: "transform 0.3s ease",
              "&:hover": {
                transform: "scale(1.03)",
              },
            }}
          />
        </Box>

        {/* Text content */}
        <Box
          sx={{
            width: { xs: "100%", md: "calc(100% - 500px - 48px)" },
            display: "flex",
            flexDirection: "column",
            gap: 3,
            position: "relative",
            minHeight: { xs: "auto", md: "500px" },
            mr: { xs: 0, md: "80px" },
          }}
        >
          {/* Client name */}
          <Typography
            variant="overline"
            sx={{
              fontSize: "1rem",
              letterSpacing: "0.1em",
              color: "text.secondary",
              fontWeight: "bold",
            }}
          >
            Mediafin
          </Typography>

          {/* Heading and logo row */}
          <Box
            sx={{
              display: "flex",
              justifyContent: "space-between",
              alignItems: "flex-start",
              gap: 2,
            }}
          >
            {/* Main heading */}
            <Typography
              variant="h1"
              sx={{
                fontSize: { xs: "2rem", md: "3rem" },
                fontFamily: "serif",
                fontWeight: "normal",
                lineHeight: 1.2,
                flex: 1,
              }}
            >
              Engaging readers in a modern digital age
            </Typography>

            {/* Logo */}
            <Box
              sx={{
                width: "80px",
                height: "60px",
                mt: { xs: 0, md: 1 },
                flexShrink: 0,
              }}
            >
              <Box
                component="img"
                src="https://cdn.sanity.io/images/sha60dij/production/db267f0d5b353b639c4005fa469c3f69169056c8-300x150.png?h=120&fit=clip"
                alt="Mediafin logo"
                sx={{
                  width: "100%",
                  height: "100%",
                  objectFit: "contain",
                }}
              />
            </Box>
          </Box>

          {/* Description */}
          <Typography
            variant="body1"
            sx={{
              fontSize: "1.1rem",
              lineHeight: 1.6,
              color: "text.secondary",
            }}
          >
            We helped Mediafin find innovative ways to customize online experiences for media consumers and keep readers engaged with their brand.
          </Typography>

          {/* Details */}
          <Box
            sx={{
              display: "flex",
              flexDirection: "column",
              gap: 1,
              my: 2,
            }}
          >
            <Typography variant="body2">
              <Box component="span" sx={{ fontWeight: "bold" }}>Duration:</Box> Partnership since 2019
            </Typography>
            <Typography variant="body2">
              <Box component="span" sx={{ fontWeight: "bold" }}>Collaborations:</Box> Expert Staffing
            </Typography>
            <Typography variant="body2">
              <Box component="span" sx={{ fontWeight: "bold" }}>Core technologies:</Box> Adobe Experience Manager
            </Typography>
            <Typography variant="body2">
              <Box component="span" sx={{ fontWeight: "bold" }}>Services:</Box> CX Technology Advisory, DXP Implementation
            </Typography>
          </Box>

          {/* Button */}
          <Box
            sx={{
              display: "flex",
              justifyContent: "flex-end",
              mt: "auto",
              pt: 2,
              mb: 3,
            }}
          >
            <Button
              variant="contained"
              sx={{
                backgroundColor: "#05314E",
                color: "white",
                borderRadius: "30px",
                px: 4,
                py: 1.5,
                fontSize: "0.875rem",
                textTransform: "none",
                fontWeight: "bold",
                "&:hover": {
                  backgroundColor: "#0a4b75",
                },
              }}
            >
              Read the full case
            </Button>
          </Box>
        </Box>
      </Box>




    </Box>



{/* Contact Section */}
   
   <Box
      sx={{
       
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






      
    </>
  );
};
