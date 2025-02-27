import React from "react";
import { Box, Grid, Typography } from "@mui/material";
import "../styles/components/ImageWithText.scss";
import WelcomeImage from "../assets/images/welcome.jpg";

const ImageWithText = () => {
  const features = [
    {
      title: "Digital Marketing",
      description: "Strategic online presence & growth",
    },
    {
      title: "Creative Design",
      description: "Stunning visuals & branding",
    },
    {
      title: "Web Development",
      description: "Custom website solutions",
    },
  ];

  return (
    <Box
      sx={{
        padding: { xs: 3, sm: 4, md: 6 },
        backgroundColor: "black",
      }}
    >
      <Grid container spacing={4} alignItems="center">
        <Grid item xs={12} md={6}>
          <Box
            component="img"
            src={WelcomeImage}
            alt="Welcome"
            sx={{
              width: "100%",
              maxWidth: "600px",
              height: "auto",
              borderRadius: "8px",
              boxShadow: "0px 0px 20px 4px rgba(205, 27, 27, 0.7)",
              display: "block",
              margin: { xs: "0 auto", md: "center" },
            }}
          />
        </Grid>

        <Grid item xs={12} md={6}>
          <Typography
            variant="h4"
            component="h2"
            gutterBottom
            sx={{
              color: "#cd1b1b",
              fontWeight: "bold",
              textAlign: { xs: "center", md: "Center" },
              marginBottom: "2rem",
            }}
          >
            What We Offer!
          </Typography>
          <Typography
            variant="body1"
            sx={{
              color: "#ffffff",
              lineHeight: 1.8,
              fontSize: "1.1rem",
              textAlign: { xs: "center", md: "Center" },
              width: "90%",
              marginBottom: "3rem",
            }}
          >
            At Redline Media, we deliver top-tier marketing services tailored to
            elevate your brand. From cutting-edge strategies to creative
            solutions, our team is dedicated to driving impactful results that
            help your business thrive.
          </Typography>

          <Grid container spacing={3} className="features-circles">
            {features.map((feature, index) => (
              <Grid item xs={12} sm={4} key={index}>
                <div className="feature-circle">
                  <h3>{feature.title}</h3>
                  <p>{feature.description}</p>
                </div>
              </Grid>
            ))}
          </Grid>
        </Grid>
      </Grid>
    </Box>
  );
};

export default ImageWithText;
