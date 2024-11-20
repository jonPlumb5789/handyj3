import React, { useEffect, useState } from "react";
import { Box, Typography, Button } from "@mui/material";

const HeroSection = () => {
  const images = ["/good1.jpg", "/good2.jpg", "/good3.jpg"];
  const [currentIndex, setCurrentIndex] = useState(0);

  // Auto-scroll logic for the slider
  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentIndex((prevIndex) => (prevIndex + 1) % images.length);
    }, 3000); // 3 seconds interval

    return () => clearInterval(interval); // Cleanup interval on unmount
  }, [images.length]);

  return (
    <Box sx={{ height: "75vh", position: "relative", overflow: "hidden" }}>
      {/* Background Image Slider */}
      <Box
        sx={{
          height: "100vh",
          backgroundImage: `url(${images[currentIndex]})`,
          backgroundSize: "cover",
          backgroundPosition: "center",
          transition: "background-image 1s ease-in-out", // Smooth transition
        }}
      />

      {/* Overlay Content */}
      <Box
        sx={{
          position: "absolute",
          top: 0,
          left: 0,
          width: "100%",
          height: "100%",
          display: "flex",
          flexDirection: "column",
          justifyContent: "center",
          alignItems: "center",
          backgroundColor: "rgba(0, 0, 0, 0.5)", // Semi-transparent overlay
          zIndex: 1,
        }}
      >
       

        {/* Welcome Text */}
        <Typography
          variant="h2"
          sx={{ fontWeight: "bold", mb: 2, color: "#FFFFFF", textAlign: "center" }}
        >
          Welcome to HandyJ3
        </Typography>
        <Typography
          variant="h5"
          sx={{ mb: 4, color: "#FFF", textAlign: "center" }}
        >
          Your Reliable Handyman Service
        </Typography>
        <Button
          variant="contained"
          color="secondary"
          size="large"
          href="tel:+17347996213" // Updated phone number
          sx={{
            fontWeight: "bold",
            color: "#FFF",
            backgroundColor: "#FF6D16", // Matches color scheme
            '&:hover': {
              backgroundColor: "#cc8500", // Darker shade on hover
            },
            mb: 2, // Add margin below the button
          }}
        >
          Call Now
        </Button>
        <Button
          variant="outlined"
          color="secondary"
          size="large"
          href="mailto:handyjohnson85@yahoo.com" // Updated email
          sx={{
            fontWeight: "bold",
            color: "#FF6D16",
            borderColor: "#FF6D16",
            '&:hover': {
              borderColor: "#cc8500",
              color: "#cc8500",
            },
          }}
        >
          Email Us
        </Button>
      </Box>
    </Box>
  );
};

export default HeroSection;
