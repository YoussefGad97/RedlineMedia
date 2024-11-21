import React from "react";
import { Box, Grid, Typography } from "@mui/material";
import "../styles/components/ImageWithText.scss"; // Ensure this SCSS file is properly linked
import WelcomeImage from "../assets/images/welcome.jpg";

const ImageWithText = () => {
  return (
    <Box sx={{ padding: { xs: 2, md: 4 }, backgroundColor: "black" }}>
      <Grid container spacing={4} alignItems="center">
        {/* Image Section */}
        <Grid item xs={12} md={6}>
          <Box
            component="img"
            src={WelcomeImage}
            alt="Sample Image"
            sx={{
              width: "80%", // Adjust this value to control image size
              maxWidth: "500px", // Maximum width of the image
              height: "auto",
              borderRadius: "8px",
              boxShadow: "0px 4px 8px rgba(0, 0, 0, 0.1)",
              display: "block",
              margin: "0 auto",
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
              color: "#cd1b1b", // Set the color of the title
              fontWeight: "bold",
              textAlign: { xs: "center", md: "left" },
            }}
          >
            Welcome to Crescendo Media!
          </Typography>
          <Typography
            variant="body1"
            sx={{
              color: "#ffffff", // Set text color to white for better contrast on dark background
              lineHeight: 1.6,
              fontSize: "1rem",
              textAlign: { xs: "center", md: "left" },
              width:"85%",
            }}
          >
            We're thrilled to have you here. At Crescendo Media, we help brands,
            startups, and creatives tell their stories through innovative media
            solutions. Whether you're looking to launch a new project, rebrand,
            or take your digital presence to the next level—we're here to make
            it happen.
          </Typography>
        </Grid>
      </Grid>
    </Box>
  );
};

export default ImageWithText;
