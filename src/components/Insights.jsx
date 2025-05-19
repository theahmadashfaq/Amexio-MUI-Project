import { Box, Typography, Avatar, Card, CardMedia, Container, Link, CardContent, Divider, Grid, Button } from '@mui/material'
import React from 'react'
import MailOutlineIcon from '@mui/icons-material/MailOutline';
import LinkedInIcon from '@mui/icons-material/LinkedIn';
import { Link as RouterLink } from 'react-router-dom';

export const Insights = () => {
  return (
   <>
   <Box sx={{ backgroundColor: "#04273F", height: "auto" }}>
     <Box sx={{ backgroundColor: "#04273F", width: "100%", minHeight: "100vh", position: "relative", overflow: "hidden" }}>
        
{/* Navigation breadcrumb */}
<Box sx={{ padding: "1.5rem 2rem" }}>
  <Typography sx={{ color: "white", fontSize: "1rem", ml: { xs: 0, md: 15 } }}>
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
    <Box component="span" sx={{ margin: "0 0.5rem" }}>  </Box>
    <Box component="span">Services</Box>
  </Typography>
</Box>

{/* Main content */}
<Box sx={{ 
  display: "flex", 
  flexDirection: "column", 
  position: "relative", 
  padding: { xs: "0 1rem", md: "0 2rem" },
  backgroundImage: { xs: "url('image.png')", md: "none" }, // Background image on xs
  backgroundSize: { xs: "cover", md: "auto" }, // Cover screen on xs
  backgroundPosition: { xs: "center", md: "auto" }, // Center image on xs
  backgroundRepeat: { xs: "no-repeat", md: "no-repeat" }, // Prevent tiling
  minHeight: { xs: "100vh", md: "auto" }, // Ensure background covers height on xs
}}>
  {/* Text content */}
  <Box sx={{ 
    width: { xs: "100%", md: "60%" }, 
    zIndex: 2, 
    position: "relative",
    marginLeft: { xs: 0, md: "7rem" },
    padding: { xs: "1rem", md: 0 }, // Add padding for text on xs
    background: { xs: "rgba(4, 39, 63, 0.7)", md: "none" }, // Semi-transparent overlay on xs
    textAlign: { xs: "left", md: "left" }, // Explicitly left-align text on xs
  }}>
    <Typography sx={{ 
      fontSize: { xs: "3rem", md: "4.5rem" }, 
      fontWeight: "500", 
      color: "white", 
      marginBottom: "1.5rem",
      fontFamily: "'Serif', serif"
    }}>
      Insights
    </Typography>
    
    <Typography sx={{ 
      fontSize: { xs: "1.1rem", md: "2rem" }, 
      lineHeight: 1.5, 
      color: "#D9D9D9", 
      marginBottom: "2rem",
      maxWidth: { xs: "100%", md: "90%" }, // Full width on xs
    }}>
      Our teams are  <Box component="span" sx={{ color: "#F9A826", fontWeight: "bold" }}>passionate</Box> about solving challenges for our clients. Check out our posts to see how we approach problems, share our solutions, and offer practical insights from our work.
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
    display: { xs: "none", md: "block" } // Only visible on md and up
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
    SX={{
        flex: 1,
        display: "flex",
        flexDirection: { xs: "column", md: "column" },
        gap: 3,
        mt: 10,
        width: { xs: "100%", md: "80%" }, // Full width on xs
        height: { xs: "auto", md: "100vh" }, // Auto height on xs
        ml: { xs: 0, md: 20 }, // Remove margin on xs
        px: { xs: 2, md: 0 }, // Add padding on xs
        
    }}
>
    {/* Project 1 */}
    <Box
        sx={{
            height: { xs: "auto", md: "400px" },
            overflow: "hidden",
            width: "90%",
            position: "relative",
            display: "flex",
            flexDirection: { xs: "column", md: "row" }, // Column on xs, row on md
            backgroundColor: "#05314E",
            borderRadius: 3,
            ml:{ xs: "14px", md: "100px" },
            mb: 10,
            border: "1px solid rgba(21, 99, 122, 0.62)",
            boxShadow: "0 4px 8px rgba(81, 136, 213, 0.2)",
            "&:hover .project-image": {
                transform: "scale(1.1)",
            },
            "&:hover .project-title": {
                color: "#EC6E28",
            },
        }}
    >
        {/* Image with zoom effect */}
        <Box
            sx={{
                position: "relative",
                width: { xs: "100%", md: "60%" },
                height: { xs: "250px", md: "100%" }, // Smaller height on xs
                zIndex: 0,
                display: "flex",
                justifyContent: "flex-start",
                alignItems: "center",
                overflow: "hidden",
            }}
        >
            <Box
                className="project-image"
                component="img"
                src="https://cdn.sanity.io/images/sha60dij/production/9b7864ee3df6fa25229a2682ee7e11db418115de-800x534.webp?w=1000"
                alt="OECD website displayed on devices"
                sx={{
                    width: "100%",
                    height: "100%",
                    objectFit: "cover",
                    transition: "transform 0.5s ease",
                }}
            />
        </Box>
        
        {/* Text content */}
        <Box
            sx={{
              
                height: "auto", // Auto height on all screens
                p: { xs: 3, md: 4 }, // Slightly less padding on xs
                zIndex: 1,
                position: "relative",
                display: "flex",
                flexDirection: "column",
            }}
        >
            <Typography
                className="project-title"
                variant="h3"
                sx={{
                    fontSize: { xs: "1.5rem", md: "1.8rem" },
                    fontWeight: "600",
                    fontFamily: "serif",
                    mb: 3,
                    color: "white",
                    transition: "color 0.3s ease",
                    cursor: "pointer",
                      width: { xs: "100%", md: "50%" },
                    ml: { xs: 0, md: 4 }, // Remove margin on xs
                }}
            >
                Making sense of Composability
            </Typography>

            <Typography
                variant="body2"
                sx={{
                    fontSize: { xs: "0.9rem", md: "1.1rem" },
                    lineHeight: 1.6,
                    color: "white",
                    mb: 4, // Reduced margin for better spacing on xs
                    ml: { xs: 0, md: 4 }, // Remove margin on xs
                    fontFamily: "serif",
                }}
            >
                Enterprises are increasingly embracing composable CXM. Discover how our unique CXM Reference Framework supports the assessment and decomposition of CXM ecosystems, helping businesses scale their operations with confidence.
            </Typography>
            
            <Typography
                variant="caption"
                sx={{
                    fontSize: "1rem",
                    color: "white",
                    mb: 2,
                    ml: { xs: 0, md: 4 }, // Remove margin on xs
                }}
            >
                16 October 2024 <Box component={"span"} sx={{ color: "orange" }}>/</Box> Composability
            </Typography>
            
            <Box sx={{ 
                display: "flex", 
                alignItems: "center", 
                ml: { xs: 0, md: 4 }, // Remove margin on xs
            }}>
                <Avatar 
                    src="https://cdn.sanity.io/images/sha60dij/production/55b14150611394b8addc41476ce6047eafdf002b-200x200.jpg?w=120&h=120&fit=clip"
                    sx={{ 
                        width: 40, 
                        height: 40, 
                        mr: 2
                    }}
                />
                <Box>
                    <Typography
                        variant="subtitle2"
                        sx={{
                            fontSize: "0.9rem",
                            fontWeight: "600",
                            color: "white",
                        }}
                    >
                        Jan Lemmens
                    </Typography>
                    <Typography
                        variant="caption"
                        sx={{
                            fontSize: "0.8rem",
                            color: "rgba(255,255,255,0.7)",
                        }}
                    >
                        Solution Manager CXM
                    </Typography>
                </Box>
            </Box>
        </Box>
    </Box>
</Box>





<Box sx={{  marginRight: { xs: 0, md: "0" } }}>
  <Box
    sx={{
      borderTopRightRadius: 10,
      padding: { xs: 3, md: 10 },
      backgroundColor: "#F0F7FF",
    }}
  >
    <Box
      sx={{
        display: "grid",
        gridTemplateColumns: { xs: "1fr", md: "repeat(3, 1fr)" },
        gap: "0.75rem",
        color: "#1A1A1A",
        fontWeight: "400",
        marginLeft: { xs: 0, md: "100px" },
       
      }}
    >
      {/* Insight 1 */}
      <Box
        sx={{
          display: "flex",
          flexDirection: "column",
          gap: "0.25rem",
          width: { xs: "100%", md: "350px" },
          
        }}
      >
        <Card sx={{ maxWidth: 345, height: "100%", backgroundColor:"#F0F7FF", boxShadow:"none"  }}>
          <Box sx={{ 
            height: 140, 
            overflow: "hidden",
            "&:hover .card-image": {
              transform: "scale(1.1)",
              transition: "transform 0.5s ease"
            }
          }}>
            <CardMedia
              className="card-image"
              component="img"
              image="https://storage.googleapis.com/a1aa/image/f98f2eb0-54ee-4f20-7507-223154623123.jpg"
              title="Customer portal strategy"
              sx={{
                height: "100%",
                width: "100%",
                objectFit: "cover",
                transition: "transform 0.5s ease"
              }}
            />
          </Box>
          <CardContent>
            <Typography>15 Nov 2025</Typography>
            <Typography
              variant="h6"
              className="card-heading"
              sx={{
                fontWeight: "600",
                "&:hover": {
                  color: "#EC6E28",
                  cursor: "pointer",
                },
              }}
            >
              Customer portals done right: start with strategy, not with feature dumps
            </Typography>
            <Typography variant="body2" sx={{ lineHeight: 1.3 }}>
              How to set your portal initiative up for success by focusing on vision and strategy before anything gets designed or built.
            </Typography>
          </CardContent>
          <Box
            sx={{
              display: "flex",
              alignItems: "center",
              gap: "0.5rem",
              marginTop: "15px",
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
            <span style={{ fontSize: "0.8rem", fontWeight: "600" }}>John Doe</span>
          </Box>
        </Card>
      </Box>

      {/* Insight 2 */}
      <Box
        sx={{
          display: "flex",
          flexDirection: "column",
          gap: "0.25rem",
          width: { xs: "100%", md: "350px" },
        }}
      >
        <Card sx={{ maxWidth: 345, height: "100%", backgroundColor:"#F0F7FF", boxShadow:"none"  }}>
          <Box sx={{ 
            height: 140, 
            overflow: "hidden",
            "&:hover .card-image": {
              transform: "scale(1.1)",
              transition: "transform 0.5s ease"
            }
          }}>
            <CardMedia
              className="card-image"
              component="img"
              image="https://storage.googleapis.com/a1aa/image/7b0804ee-4da9-402a-031c-ad6ced84591d.jpg"
              title="Customer portal foundations"
              sx={{
                height: "100%",
                width: "100%",
                objectFit: "cover",
                transition: "transform 0.5s ease"
              }}
            />
          </Box>
          <CardContent>
            <Typography>15 Nov 2025</Typography>
            <Typography
              variant="h6"
              className="card-heading"
              sx={{
                fontWeight: "600",
                "&:hover": {
                  color: "#EC6E28",
                  cursor: "pointer",
                },
              }}
            >
              Foundations for a robust and scalable customer portal
            </Typography>
            <Typography variant="body2" sx={{ lineHeight: 1.3 }}>
              In the wake of global disruptions and rising customer expectations, companies are increasingly digitizing their customer service/communications.
            </Typography>
          </CardContent>
          <Box
            sx={{
              display: "flex",
              alignItems: "center",
              gap: "0.5rem",
              marginTop: "25px",
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
            <span style={{ fontSize: "0.8rem", fontWeight: "600" }}>Alice Smith</span>
          </Box>
        </Card>
      </Box>

      {/* Insight 3 */}
      <Box
        sx={{
          display: "flex",
          flexDirection: "column",
          gap: "0.25rem",
          width: { xs: "100%", md: "350px" },
        }}
      >
        <Card sx={{ maxWidth: 345, height: "100%", backgroundColor:"#F0F7FF", boxShadow:"none"  }}>
          <Box sx={{ 
            height: 140, 
            overflow: "hidden",
            "&:hover .card-image": {
              transform: "scale(1.1)",
              transition: "transform 0.5s ease"
            }
          }}>
            <CardMedia
              className="card-image"
              component="img"
              image="https://storage.googleapis.com/a1aa/image/3293d7d6-3889-4a83-8d84-d708134cf30b.jpg"
              title="Adobe Experience Manager"
              sx={{
                height: "100%",
                width: "100%",
                objectFit: "cover",
                transition: "transform 0.5s ease"
              }}
            />
          </Box>
          <CardContent>
            <Typography>15 Nov 2025</Typography>
            <Typography
              variant="h6"
              className="card-heading"
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
              Adobe Edge Delivery Services (EDS) is not only a new suite of powerful tools for publishing and delivering content in a more fast and performant way.
            </Typography>
          </CardContent>
          <Box
            sx={{
              display: "flex",
              alignItems: "center",
              gap: "0.5rem",
              marginTop: "auto",
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
            <span style={{ fontSize: "0.8rem", fontWeight: "600" }}>Michael Brown</span>
          </Box>
        </Card>
      </Box>

 <Box
        sx={{
          display: "flex",
          flexDirection: "column",
          gap: "0.25rem",
          width: { xs: "100%", md: "350px" },
        }}
      >
        <Card sx={{ maxWidth: 345, height: "100%", backgroundColor:"#F0F7FF", boxShadow:"none"  }}>
          <Box sx={{ 
            height: 140, 
            overflow: "hidden",
            "&:hover .card-image": {
              transform: "scale(1.1)",
              transition: "transform 0.5s ease"
            }
          }}>
            <CardMedia
              className="card-image"
              component="img"
              image="https://cdn.sanity.io/images/sha60dij/production/76617acb45197d3097d6d904bd576cdd577cefa5-6016x4016.jpg?rect=0,3,6016,4011&w=750&h=500&fit=clip"
              title="Adobe Experience Manager"
              sx={{
                height: "100%",
                width: "100%",
                objectFit: "cover",
                transition: "transform 0.5s ease"
              }}
            />
          </Box>
          <CardContent>
            <Typography>15 Nov 2025</Typography>
            <Typography
              variant="h6"
              className="card-heading"
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
              Adobe Edge Delivery Services (EDS) is not only a new suite of powerful tools for publishing and delivering content in a more fast and performant way.
            </Typography>
          </CardContent>
          <Box
            sx={{
              display: "flex",
              alignItems: "center",
              gap: "0.5rem",
              marginTop: "auto",
              marginLeft: "10px",
              marginBottom: "20px",
            }}
          >
            <Box
              component="img"
              src="https://cdn.sanity.io/images/sha60dij/production/da247b52b294501b8a8323314d92a0ee64142033-5710x3727.jpg?rect=60,0,5591,3727&w=750&h=500&fit=clip"
              alt="Profile picture of Michael Brown"
              sx={{
                width: "2.5rem",
                height: "2.5rem",
                borderRadius: "50%",
              }}
            />
            <span style={{ fontSize: "0.8rem", fontWeight: "600" }}>Michael Brown</span>
          </Box>
        </Card>
      </Box>


       <Box
        sx={{
          display: "flex",
          flexDirection: "column",
          gap: "0.25rem",
          width: { xs: "100%", md: "350px" },
        }}
      >
        <Card sx={{ maxWidth: 345, height: "100%", backgroundColor:"#F0F7FF", boxShadow:"none"  }}>
          <Box sx={{ 
            height: 140, 
            overflow: "hidden",
            "&:hover .card-image": {
              transform: "scale(1.1)",
              transition: "transform 0.5s ease"
            }
          }}>
            <CardMedia
              className="card-image"
              component="img"
              image="https://cdn.sanity.io/images/sha60dij/production/da247b52b294501b8a8323314d92a0ee64142033-5710x3727.jpg?rect=60,0,5591,3727&w=750&h=500&fit=clip"
              title="Adobe Experience Manager"
              sx={{
                height: "100%",
                width: "100%",
                objectFit: "cover",
                transition: "transform 0.5s ease"
              }}
            />
          </Box>
          <CardContent>
            <Typography>15 Nov 2025</Typography>
            <Typography
              variant="h6"
              className="card-heading"
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
              Adobe Edge Delivery Services (EDS) is not only a new suite of powerful tools for publishing and delivering content in a more fast and performant way.
            </Typography>
          </CardContent>
          <Box
            sx={{
              display: "flex",
              alignItems: "center",
              gap: "0.5rem",
              marginTop: "auto",
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
            <span style={{ fontSize: "0.8rem", fontWeight: "600" }}>Michael Brown</span>
          </Box>
        </Card>
      </Box>


       <Box
        sx={{
          display: "flex",
          flexDirection: "column",
          gap: "0.25rem",
          width: { xs: "100%", md: "350px" },
        }}
      >
        <Card sx={{ maxWidth: 345, height: "100%", backgroundColor:"#F0F7FF", boxShadow:"none"  }}>
          <Box sx={{ 
            height: 140, 
            overflow: "hidden",
            "&:hover .card-image": {
              transform: "scale(1.1)",
              transition: "transform 0.5s ease"
            }
          }}>
            <CardMedia
              className="card-image"
              component="img"
              image="https://cdn.sanity.io/images/sha60dij/production/12aa8822b846a2dd51c58ce78247494fd0e4d262-790x527.webp?w=750&h=500&fit=clip"
              title="Adobe Experience Manager"
              sx={{
                height: "100%",
                width: "100%",
                objectFit: "cover",
                transition: "transform 0.5s ease"
              }}
            />
          </Box>
          <CardContent>
            <Typography>15 Nov 2025</Typography>
            <Typography
              variant="h6"
              className="card-heading"
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
              Adobe Edge Delivery Services (EDS) is not only a new suite of powerful tools for publishing and delivering content in a more fast and performant way.
            </Typography>
          </CardContent>
          <Box
            sx={{
              display: "flex",
              alignItems: "center",
              gap: "0.5rem",
              marginTop: "auto",
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
            <span style={{ fontSize: "0.8rem", fontWeight: "600" }}>Michael Brown</span>
          </Box>
        </Card>
      </Box>



       <Box
        sx={{
          display: "flex",
          flexDirection: "column",
          gap: "0.25rem",
          width: { xs: "100%", md: "350px" },
        }}
      >
        <Card sx={{ maxWidth: 345, height: "100%", backgroundColor:"#F0F7FF", boxShadow:"none"  }}>
          <Box sx={{ 
            height: 140, 
            overflow: "hidden",
            "&:hover .card-image": {
              transform: "scale(1.1)",
              transition: "transform 0.5s ease"
            }
          }}>
            <CardMedia
              className="card-image"
              component="img"
              image="https://cdn.sanity.io/images/sha60dij/production/4ba05660af54b653704ab134a8a21627711b02ee-640x640.webp?rect=0,107,640,427&w=750&h=500&fit=clip"
              title="Adobe Experience Manager"
              sx={{
                height: "100%",
                width: "100%",
                objectFit: "cover",
                transition: "transform 0.5s ease"
              }}
            />
          </Box>
          <CardContent>
            <Typography>15 Nov 2025</Typography>
            <Typography
              variant="h6"
              className="card-heading"
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
              Adobe Edge Delivery Services (EDS) is not only a new suite of powerful tools for publishing and delivering content in a more fast and performant way.
            </Typography>
          </CardContent>
          <Box
            sx={{
              display: "flex",
              alignItems: "center",
              gap: "0.5rem",
              marginTop: "auto",
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
            <span style={{ fontSize: "0.8rem", fontWeight: "600" }}>Michael Brown</span>
          </Box>
        </Card>
      </Box>
       <Box
        sx={{
          display: "flex",
          flexDirection: "column",
          gap: "0.25rem",
          width: { xs: "100%", md: "350px" },
        }}
      >
        <Card sx={{ maxWidth: 345, height: "100%", backgroundColor:"#F0F7FF", boxShadow:"none"  }}>
          <Box sx={{ 
            height: 140, 
            overflow: "hidden",
            "&:hover .card-image": {
              transform: "scale(1.1)",
              transition: "transform 0.5s ease"
            }
          }}>
            <CardMedia
              className="card-image"
              component="img"
              image="https://cdn.sanity.io/images/sha60dij/production/9b7864ee3df6fa25229a2682ee7e11db418115de-800x534.webp?rect=0,1,800,533&w=750&h=500&fit=clip"
              title="Adobe Experience Manager"
              sx={{
                height: "100%",
                width: "100%",
                objectFit: "cover",
                transition: "transform 0.5s ease"
              }}
            />
          </Box>
          <CardContent>
            <Typography>15 Nov 2025</Typography>
            <Typography
              variant="h6"
              className="card-heading"
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
              Adobe Edge Delivery Services (EDS) is not only a new suite of powerful tools for publishing and delivering content in a more fast and performant way.
            </Typography>
          </CardContent>
          <Box
            sx={{
              display: "flex",
              alignItems: "center",
              gap: "0.5rem",
              marginTop: "auto",
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
            <span style={{ fontSize: "0.8rem", fontWeight: "600" }}>Michael Brown</span>
          </Box>
        </Card>
      </Box>
       <Box
        sx={{
          display: "flex",
          flexDirection: "column",
          gap: "0.25rem",
          width: { xs: "100%", md: "350px" },
        }}
      >
        <Card sx={{ maxWidth: 345, height: "100%", backgroundColor:"#F0F7FF", boxShadow:"none"  }}>
          <Box sx={{ 
            height: 140, 
            overflow: "hidden",
            "&:hover .card-image": {
              transform: "scale(1.1)",
              transition: "transform 0.5s ease"
            }
          }}>
            <CardMedia
              className="card-image"
              component="img"
              image="https://cdn.sanity.io/images/sha60dij/production/19af2aac15ad831986765b80ba5eb03fd72c5b4b-800x613.webp?rect=0,41,800,533&w=750&h=500&fit=clip"
              title="Adobe Experience Manager"
              sx={{
                height: "100%",
                width: "100%",
                objectFit: "cover",
                transition: "transform 0.5s ease"
              }}
            />
          </Box>
          <CardContent>
            <Typography>15 Nov 2025</Typography>
            <Typography
              variant="h6"
              className="card-heading"
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
              Adobe Edge Delivery Services (EDS) is not only a new suite of powerful tools for publishing and delivering content in a more fast and performant way.
            </Typography>
          </CardContent>
          <Box
            sx={{
              display: "flex",
              alignItems: "center",
              gap: "0.5rem",
              marginTop: "auto",
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
            <span style={{ fontSize: "0.8rem", fontWeight: "600" }}>Michael Brown</span>
          </Box>
        </Card>
      </Box>
       <Box
        sx={{
          display: "flex",
          flexDirection: "column",
          gap: "0.25rem",
          width: { xs: "100%", md: "350px" },
        }}
      >
        <Card sx={{ maxWidth: 345, height: "100%", backgroundColor:"#F0F7FF", boxShadow:"none"  }}>
          <Box sx={{ 
            height: 140, 
            overflow: "hidden",
            "&:hover .card-image": {
              transform: "scale(1.1)",
              transition: "transform 0.5s ease"
            }
          }}>
            <CardMedia
              className="card-image"
              component="img"
              image="https://cdn.sanity.io/images/sha60dij/production/5450a6a297b425a4deaeac868619a7ee8f7de1a5-1200x795.webp?rect=4,0,1193,795&w=750&h=500&fit=clip"
              title="Adobe Experience Manager"
              sx={{
                height: "100%",
                width: "100%",
                objectFit: "cover",
                transition: "transform 0.5s ease"
              }}
            />
          </Box>
          <CardContent>
            <Typography>15 Nov 2025</Typography>
            <Typography
              variant="h6"
              className="card-heading"
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
              Adobe Edge Delivery Services (EDS) is not only a new suite of powerful tools for publishing and delivering content in a more fast and performant way.
            </Typography>
          </CardContent>
          <Box
            sx={{
              display: "flex",
              alignItems: "center",
              gap: "0.5rem",
              marginTop: "auto",
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
            <span style={{ fontSize: "0.8rem", fontWeight: "600" }}>Michael Brown</span>
          </Box>
        </Card>
      </Box>
       <Box
        sx={{
          display: "flex",
          flexDirection: "column",
          gap: "0.25rem",
          width: { xs: "100%", md: "350px" },
        }}
      >
        <Card sx={{ maxWidth: 345, height: "100%", backgroundColor:"#F0F7FF", boxShadow:"none"  }}>
          <Box sx={{ 
            height: 140, 
            overflow: "hidden",
            "&:hover .card-image": {
              transform: "scale(1.1)",
              transition: "transform 0.5s ease"
            }
          }}>
            <CardMedia
              className="card-image"
              component="img"
              image="https://cdn.sanity.io/images/sha60dij/production/6ddb4489eff22e0222c2880f476ab9c593bcd735-1000x600.webp?rect=50,0,900,600&w=750&h=500&fit=clip"
              title="Adobe Experience Manager"
              sx={{
                height: "100%",
                width: "100%",
                objectFit: "cover",
                transition: "transform 0.5s ease"
              }}
            />
          </Box>
          <CardContent>
            <Typography>15 Nov 2025</Typography>
            <Typography
              variant="h6"
              className="card-heading"
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
              Adobe Edge Delivery Services (EDS) is not only a new suite of powerful tools for publishing and delivering content in a more fast and performant way.
            </Typography>
          </CardContent>
          <Box
            sx={{
              display: "flex",
              alignItems: "center",
              gap: "0.5rem",
              marginTop: "auto",
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
            <span style={{ fontSize: "0.8rem", fontWeight: "600" }}>Michael Brown</span>
          </Box>
        </Card>
      </Box>
       <Box
        sx={{
          display: "flex",
          flexDirection: "column",
          gap: "0.25rem",
          width: { xs: "100%", md: "350px" },
        }}
      >
        <Card sx={{ maxWidth: 345, height: "100%", backgroundColor:"#F0F7FF", boxShadow:"none"  }}>
          <Box sx={{ 
            height: 140, 
            overflow: "hidden",
            "&:hover .card-image": {
              transform: "scale(1.1)",
              transition: "transform 0.5s ease"
            }
          }}>
            <CardMedia
              className="card-image"
              component="img"
              image="https://cdn.sanity.io/images/sha60dij/production/3325fc34b705811c550ec09a80e9af85656fd0e9-1200x800.webp?w=750&h=500&fit=clip"
              title="Adobe Experience Manager"
              sx={{
                height: "100%",
                width: "100%",
                objectFit: "cover",
                transition: "transform 0.5s ease"
              }}
            />
          </Box>
          <CardContent>
            <Typography>15 Nov 2025</Typography>
            <Typography
              variant="h6"
              className="card-heading"
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
              Adobe Edge Delivery Services (EDS) is not only a new suite of powerful tools for publishing and delivering content in a more fast and performant way.
            </Typography>
          </CardContent>
          <Box
            sx={{
              display: "flex",
              alignItems: "center",
              gap: "0.5rem",
              marginTop: "auto",
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
            <span style={{ fontSize: "0.8rem", fontWeight: "600" }}>Michael Brown</span>
          </Box>
        </Card>
      </Box>
       <Box
        sx={{
          display: "flex",
          flexDirection: "column",
          gap: "0.25rem",
          width: { xs: "100%", md: "350px" },
        }}
      >
        <Card sx={{ maxWidth: 345, height: "100%", backgroundColor:"#F0F7FF", boxShadow:"none"  }}>
          <Box sx={{ 
            height: 140, 
            overflow: "hidden",
            "&:hover .card-image": {
              transform: "scale(1.1)",
              transition: "transform 0.5s ease"
            }
          }}>
            <CardMedia
              className="card-image"
              component="img"
              image="https://cdn.sanity.io/images/sha60dij/production/6d51937f284329495fbe424b14a567bc7298c0f5-1200x800.webp?w=750&h=500&fit=clip"
              title="Adobe Experience Manager"
              sx={{
                height: "100%",
                width: "100%",
                objectFit: "cover",
                transition: "transform 0.5s ease"
              }}
            />
          </Box>
          <CardContent>
            <Typography>15 Nov 2025</Typography>
            <Typography
              variant="h6"
              className="card-heading"
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
              Adobe Edge Delivery Services (EDS) is not only a new suite of powerful tools for publishing and delivering content in a more fast and performant way.
            </Typography>
          </CardContent>
          <Box
            sx={{
              display: "flex",
              alignItems: "center",
              gap: "0.5rem",
              marginTop: "auto",
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
            <span style={{ fontSize: "0.8rem", fontWeight: "600" }}>Michael Brown</span>
          </Box>
        </Card>
      </Box>
       <Box
        sx={{
          display: "flex",
          flexDirection: "column",
          gap: "0.25rem",
          width: { xs: "100%", md: "350px" },
        }}
      >
        <Card sx={{ maxWidth: 345, height: "100%", backgroundColor:"#F0F7FF", boxShadow:"none"  }}>
          <Box sx={{ 
            height: 140, 
            overflow: "hidden",
            "&:hover .card-image": {
              transform: "scale(1.1)",
              transition: "transform 0.5s ease"
            }
          }}>
            <CardMedia
              className="card-image"
              component="img"
              image="https://cdn.sanity.io/images/sha60dij/production/b0f1ac2a5ac9e7dff1e0b970dd1087bb157aabd2-800x533.webp?w=750&h=500&fit=clip"
              title="Adobe Experience Manager"
              sx={{
                height: "100%",
                width: "100%",
                objectFit: "cover",
                transition: "transform 0.5s ease"
              }}
            />
          </Box>
          <CardContent>
            <Typography>15 Nov 2025</Typography>
            <Typography
              variant="h6"
              className="card-heading"
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
              Adobe Edge Delivery Services (EDS) is not only a new suite of powerful tools for publishing and delivering content in a more fast and performant way.
            </Typography>
          </CardContent>
          <Box
            sx={{
              display: "flex",
              alignItems: "center",
              gap: "0.5rem",
              marginTop: "auto",
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
            <span style={{ fontSize: "0.8rem", fontWeight: "600" }}>Michael Brown</span>
          </Box>
        </Card>
      </Box>
       <Box
        sx={{
          display: "flex",
          flexDirection: "column",
          gap: "0.25rem",
          width: { xs: "100%", md: "350px" },
        }}
      >
        <Card sx={{ maxWidth: 345, height: "100%", backgroundColor:"#F0F7FF", boxShadow:"none"  }}>
          <Box sx={{ 
            height: 140, 
            overflow: "hidden",
            "&:hover .card-image": {
              transform: "scale(1.1)",
              transition: "transform 0.5s ease"
            }
          }}>
            <CardMedia
              className="card-image"
              component="img"
              image="https://cdn.sanity.io/images/sha60dij/production/2009f1ea398202156ce25e5d3c03514a5a87ea01-300x250.webp?rect=0,25,300,200&w=750&h=500&fit=clip"
              title="Adobe Experience Manager"
              sx={{
                height: "100%",
                width: "100%",
                objectFit: "cover",
                transition: "transform 0.5s ease"
              }}
            />
          </Box>
          <CardContent>
            <Typography>15 Nov 2025</Typography>
            <Typography
              variant="h6"
              className="card-heading"
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
              Adobe Edge Delivery Services (EDS) is not only a new suite of powerful tools for publishing and delivering content in a more fast and performant way.
            </Typography>
          </CardContent>
          <Box
            sx={{
              display: "flex",
              alignItems: "center",
              gap: "0.5rem",
              marginTop: "auto",
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
            <span style={{ fontSize: "0.8rem", fontWeight: "600" }}>Michael Brown</span>
          </Box>
        </Card>
      </Box>
       <Box
        sx={{
          display: "flex",
          flexDirection: "column",
          gap: "0.25rem",
          width: { xs: "100%", md: "350px" },
        }}
      >
        <Card sx={{ maxWidth: 345, height: "100%", backgroundColor:"#F0F7FF", boxShadow:"none"  }}>
          <Box sx={{ 
            height: 140, 
            overflow: "hidden",
            "&:hover .card-image": {
              transform: "scale(1.1)",
              transition: "transform 0.5s ease"
            }
          }}>
            <CardMedia
              className="card-image"
              component="img"
              image="https://cdn.sanity.io/images/sha60dij/production/8d5745f195d444816db67e5a86bd0a73204a5bf3-1200x798.webp?rect=2,0,1197,798&w=750&h=500&fit=clip"
              title="Adobe Experience Manager"
              sx={{
                height: "100%",
                width: "100%",
                objectFit: "cover",
                transition: "transform 0.5s ease"
              }}
            />
          </Box>
          <CardContent>
            <Typography>15 Nov 2025</Typography>
            <Typography
              variant="h6"
              className="card-heading"
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
              Adobe Edge Delivery Services (EDS) is not only a new suite of powerful tools for publishing and delivering content in a more fast and performant way.
            </Typography>
          </CardContent>
          <Box
            sx={{
              display: "flex",
              alignItems: "center",
              gap: "0.5rem",
              marginTop: "auto",
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
            <span style={{ fontSize: "0.8rem", fontWeight: "600" }}>Michael Brown</span>
          </Box>
        </Card>
      </Box>
       <Box
        sx={{
          display: "flex",
          flexDirection: "column",
          gap: "0.25rem",
          width: { xs: "100%", md: "350px" },
        }}
      >
        <Card sx={{ maxWidth: 345, height: "100%", backgroundColor:"#F0F7FF", boxShadow:"none"  }}>
          <Box sx={{ 
            height: 140, 
            overflow: "hidden",
            "&:hover .card-image": {
              transform: "scale(1.1)",
              transition: "transform 0.5s ease"
            }
          }}>
            <CardMedia
              className="card-image"
              component="img"
              image="https://cdn.sanity.io/images/sha60dij/production/63e9d6798c15865d3627962a5237c51c0f24d626-800x450.webp?rect=63,0,675,450&w=750&h=500&fit=clip"
              title="Adobe Experience Manager"
              sx={{
                height: "100%",
                width: "100%",
                objectFit: "cover",
                transition: "transform 0.5s ease"
              }}
            />
          </Box>
          <CardContent>
            <Typography>15 Nov 2025</Typography>
            <Typography
              variant="h6"
              className="card-heading"
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
              Adobe Edge Delivery Services (EDS) is not only a new suite of powerful tools for publishing and delivering content in a more fast and performant way.
            </Typography>
          </CardContent>
          <Box
            sx={{
              display: "flex",
              alignItems: "center",
              gap: "0.5rem",
              marginTop: "auto",
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
            <span style={{ fontSize: "0.8rem", fontWeight: "600" }}>Michael Brown</span>
          </Box>
        </Card>
      </Box>

    </Box>
     

      <Box
      sx={{
        display: 'flex',
        flexDirection: 'column',
        justifyContent: 'center',
        alignItems: 'center',
        mt: 4,
        mb: 4,
        p: 2,
        
        borderRadius: 1,
        
          width: { xs: "90%", md: "100%" },
      }}
    >
      <Typography
        variant="body1"
        sx={{
          color: 'text.secondary',
          fontSize: '0.875rem',
          fontWeight: 400,
          mb: 1, // Add margin bottom for spacing above divider
           
        }}
      >
        You've viewed <strong>23</strong> of the <strong>23</strong> blogposts
      </Typography>
      <Divider 
        sx={{ 
          width: '12%', 
          borderColor: '#EC6E28', // Orange color
          borderBottomWidth: 2, // Thicker line
           
         
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
  )
}
