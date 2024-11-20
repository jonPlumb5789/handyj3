import React from "react";
import { Box, Typography } from "@mui/material";
import { Phone, Email, Schedule } from "@mui/icons-material";

const ContactInformation = () => {
  return (
    <Box sx={{ py: 8, backgroundColor: "#ffffff" }}>
      <Typography variant="h4" align="center" gutterBottom>
          Contact Information:
        </Typography>
      <Box sx={{ mt: 2 }}>
        <Box
          sx={{
            display: "flex",
            alignItems: "center",
            mb: 3,
            justifyContent: "center",
          }}
        >
          <Phone sx={{ fontSize: 32, color: "#007bff", mr: 2 }} />
          <Typography variant="body1" sx={{ fontSize: "1.1rem", color: "#555" }}>
            <strong>Phone:</strong>{" "}
            <a
              href="tel:+17347996213"
              style={{ color: "#007bff", textDecoration: "none" }}
            >
              +1 (734) 799-6213
            </a>
          </Typography>
        </Box>
        <Box
          sx={{
            display: "flex",
            alignItems: "center",
            mb: 3,
            justifyContent: "center",
          }}
        >
          <Email sx={{ fontSize: 32, color: "#007bff", mr: 2 }} />
          <Typography variant="body1" sx={{ fontSize: "1.1rem", color: "#555" }}>
            <strong>Email:</strong>{" "}
            <a
              href="mailto:handyjohnson85@yahoo.com"
              style={{ color: "#007bff", textDecoration: "none" }}
            >
              handyjohnson85@yahoo.com
            </a>
          </Typography>
        </Box>
        <Box
          sx={{
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
          }}
        >
          <Schedule sx={{ fontSize: 32, color: "#007bff", mr: 2 }} />
          <Typography variant="body1" sx={{ fontSize: "1.1rem", color: "#555" }}>
            <strong>Hours:</strong> Monday - Friday, 9 AM - 5 PM
          </Typography>
        </Box>
      </Box>
    </Box>
  );
};

export default ContactInformation;
