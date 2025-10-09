import { Box, Button, Typography, Toolbar } from "@mui/material";
import { NavLink } from "react-router";
import { Rocket } from "@mui/icons-material";

const links = [
  { path: "/", label: "Home" },
  { path: "/contact", label: "Contact" },
];

const Header = () => {
  return (
    <Toolbar sx={{ justifyContent: "space-between" }}>
      {/* Logo/Brand */}
      <Box sx={{ display: "flex", alignItems: "center", gap: 1 }}>
        <Rocket sx={{ color: "primary.main" }} />
        <Typography
          variant="h6"
          fontWeight={700}
          sx={{
            background: "linear-gradient(45deg, #9231c6 30%, #0c7a72 90%)",
            backgroundClip: "text",
            WebkitBackgroundClip: "text",
            WebkitTextFillColor: "transparent",
          }}
        >
          MUI React Starter
        </Typography>
      </Box>

      {/* Navigation Links */}
      <Box sx={{ display: "flex", alignItems: "center", gap: 1 }}>
        {links.map((link) => (
          <NavLink
            key={link.path}
            to={link.path}
            end
            style={{ textDecoration: "none" }}
          >
            {({ isActive }) => (
              <Button
                variant={isActive ? "contained" : "text"}
                color="primary"
                sx={{
                  borderRadius: 2,
                  px: 3,
                  fontWeight: 600,
                  color: isActive ? "white" : "primary.main",
                  "&:hover": {
                    backgroundColor: isActive
                      ? "primary.dark"
                      : "primary.light",
                    color: "white",
                  },
                }}
              >
                {link.label}
              </Button>
            )}
          </NavLink>
        ))}
      </Box>
    </Toolbar>
  );
};

export default Header;
