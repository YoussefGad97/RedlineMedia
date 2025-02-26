import React from "react";
import { Box, Grid, Typography } from "@mui/material";
import "../styles/components/ImageWithText.scss"; // Ensure this SCSS file is properly linked
import WelcomeImage from "../assets/images/welcome.jpg";

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
              height: "auto",
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
              textAlign: { xs: "center", md: "Center" },
            }}
          >
            What We Offer!
          </Typography>
          <Typography
            variant="body1"
            sx={{
              color: "#ffffff", // Text color for better contrast
              lineHeight: 1.8,
              fontSize: "1.1rem",
              textAlign: { xs: "center", md: "Center" },
              width: "90%",
            }}
          >
            At Redline Media, we deliver top-tier marketing services tailored to
            elevate your brand. From cutting-edge strategies to creative
            solutions, our team is dedicated to driving impactful results that
            help your business thrive.
          </Typography>
        </Grid>
      </Grid>
    </Box>
  );
};

export default ImageWithText;
