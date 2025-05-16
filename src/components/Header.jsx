import React, { useState } from "react";
import {
  AppBar,
  Toolbar,
  Box,
  Typography,
  IconButton,
  Drawer,
  List,
  ListItem
} from "@mui/material";
import CheckCircleIcon from "@mui/icons-material/CheckCircle";
import MenuIcon from "@mui/icons-material/Menu";
import CloseIcon from "@mui/icons-material/Close";
import { Link as RouterLink } from 'react-router-dom';

export const Header = () => {
  const [mobileOpen, setMobileOpen] = useState(false);

  const handleDrawerToggle = () => {
    setMobileOpen(!mobileOpen);
  };

  const navLinks = [
    { name: "Services", path: "/services" },
    { name: "Insights", path: "/insights" },
    { name: "Work", path: "/work" },
    { name: "About", path: "/about" },
    { name: "Contact", path: "/contact" }
  ];

  return (
    <>
      {/* Main Header */}
      <AppBar
        position="static"
        sx={{
          backgroundColor: "#04273F",
          padding: "1rem 1.5rem",
          width: "100%",
        }}
      >
        <Toolbar disableGutters sx={{ justifyContent: "space-between" }}>
          <RouterLink to="/" style={{ textDecoration: 'none' }}>
            <Box sx={{ display: "flex", alignItems: "center", gap: "0.5rem" }}>
              <Box
                sx={{
                  width: "2rem",
                  height: "2rem",
                  borderRadius: "50%",
                  backgroundColor: "#f36e0a",
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "center",
                }}
              >
                <Typography
                  variant="body1"
                  sx={{ color: "white", fontWeight: "bold" }}
                >
                  <CheckCircleIcon
                    sx={{
                      width: "1rem",
                      height: "1rem",
                      marginLeft: "-0.25rem",
                      color: "lightgray",
                    }}
                  />
                </Typography>
              </Box>
              <Typography
                variant="h6"
                sx={{
                  fontWeight: "bold",
                  fontSize: "1.25rem",
                  letterSpacing: "0.2em",
                  color: "white",
                }}
              >
                AMEXIO
              </Typography>
              <Typography
                variant="h6"
                sx={{
                  fontStyle: "italic",
                  fontWeight: "600",
                  fontSize: "1.25rem",
                  color: "#f36e0a",
                }}
              >
                fuse
              </Typography>
            </Box>
          </RouterLink>

          {/* Desktop Navigation */}
          <Box sx={{ display: { xs: "none", md: "flex" }, gap: "2.5rem" }}>
            {navLinks.map((item) => (
              <RouterLink
                key={item.name}
                to={item.path}
                style={{
                  color: "white",
                  textDecoration: "none",
                  fontFamily: "'Roboto Slab', serif",
                  fontWeight: "bold",
                }}
              >
                {item.name}
              </RouterLink>
            ))}
          </Box>

          {/* Mobile Menu Button */}
          <IconButton
            color="inherit"
            aria-label="open drawer"
            edge="end"
            onClick={handleDrawerToggle}
            sx={{ display: { md: "none" } }}
          >
            <MenuIcon />
          </IconButton>
        </Toolbar>
      </AppBar>

      {/* Mobile Drawer */}
      <Drawer
        anchor="right"
        open={mobileOpen}
        onClose={handleDrawerToggle}
        sx={{
          "& .MuiDrawer-paper": {
            width: { xs: "100%", sm: "320px" },
            backgroundColor: "#04273F",
            padding: "1.5rem",
          },
        }}
      >
        <Box
          sx={{
            display: "flex",
            justifyContent: "flex-end",
            marginBottom: "2rem",
          }}
        >
          <Box
            sx={{
              display: "flex",
              alignItems: "center",
              gap: "0.5rem",
              marginRight: "100px",
            }}
          >
            <Box
              sx={{
                width: "2rem",
                height: "2rem",
                borderRadius: "50%",
                backgroundColor: "#f36e0a",
                display: "flex",
                alignItems: "center",
                justifyContent: "center",
              }}
            >
              <Typography
                variant="body1"
                sx={{ color: "white", fontWeight: "bold" }}
              >
                <CheckCircleIcon
                  sx={{
                    width: "1rem",
                    height: "1rem",
                    marginLeft: "-0.25rem",
                    color: "lightgray",
                  }}
                />
              </Typography>
            </Box>
            <Typography
              variant="h6"
              sx={{
                fontWeight: "bold",
                fontSize: "1.25rem",
                letterSpacing: "0.2em",
                color: "white",
              }}
            >
              AMEXIO
            </Typography>
            <Typography
              variant="h6"
              sx={{
                fontStyle: "italic",
                fontWeight: "600",
                fontSize: "1.25rem",
                color: "#f36e0a",
              }}
            >
              fuse
            </Typography>
          </Box>
          <IconButton onClick={handleDrawerToggle}>
            <CloseIcon sx={{ color: "white", fontSize: "1.75rem" }} />
          </IconButton>
        </Box>

        <List sx={{ display: "flex", flexDirection: "column", gap: "1rem" }}>
          {navLinks.map((item) => (
            <ListItem
              key={item.name}
              disablePadding
              onClick={handleDrawerToggle}
              sx={{
                "&:hover": {
                  backgroundColor: "rgba(255, 255, 255, 0.1)",
                  borderRadius: "4px",
                },
              }}
            >
              <RouterLink
                to={item.path}
                style={{
                  width: "100%",
                  padding: "0.75rem 1rem",
                  textDecoration: "none",
                  color: "white",
                  fontSize: "1.25rem",
                  fontFamily: "'Roboto Slab', serif",
                  fontWeight: "bold",
                  textAlign: "right",
                }}
              >
                {item.name}
              </RouterLink>
            </ListItem>
          ))}
        </List>
      </Drawer>
    </>
  );
};