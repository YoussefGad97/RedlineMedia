import React from "react";
import { Box, Grid, Typography } from "@mui/material";
import "../styles/components/AboutImageText.scss"; // Ensure this SCSS file is properly linked
import WelcomeImage from "../assets/images/AboutVertical.jpg";

const ImageWithText = () => {
  return (
    <Box
      sx={{
        padding: { xs: 3, sm: 4, md: 6 }, // Responsive padding
        backgroundColor: "black",
      }}
    >
      <Grid container spacing={4} alignItems="center">
        {/* Image Section */}
        <Grid item xs={12} md={6}>
          <Box
            component="img"
            src={WelcomeImage}
            alt="Welcome"
            sx={{
              width: "100%", // Image scales responsively
              maxWidth: "600px", // Restrict maximum width for medium size
              height: "800px",
              borderRadius: "8px",
              boxShadow: "0px 0px 20px 4px rgba(205, 27, 27, 0.7)", // Neon shadow effect
              display: "block",
              margin: { xs: "0 auto", md: "center" }, // Centered for small screens, left-aligned for medium+
            }}
          />
        </Grid>

        {/* Text Section */}
        <Grid item xs={12} md={6}>
          <Typography
            variant="h4"
            component="h2"
            gutterBottom
            sx={{
              color: "#cd1b1b", // Title color
              fontWeight: "bold",
              textAlign: { xs: "center", md: "center" },
            }}
          >
            Our Story
          </Typography>
          <Typography
            variant="body1"
            sx={{
              color: "#ffffff", // Text color for better contrast
              lineHeight: 1.8,
              fontSize: "1.1rem",
              textAlign: { xs: "center", md: "center" },
              width: "90%",
            }}
          >
            Redline Media was founded last year with a shared vision to bring
            creativity and innovation to life. Each member of our team worked
            tirelessly to hone their skills, driven by a passion for excellence
            and a commitment to delivering outstanding results. Together, we
            built this company to reflect our dedication, expertise, and love
            for what we do, creating a space where our hard work turns ideas
            into impactful solutions for our clients.
          </Typography>
        </Grid>
      </Grid>
    </Box>
  );
};

export default ImageWithText;
