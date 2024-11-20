import React, { useState } from "react";
import { Box, Typography, TextField, Button, Grid } from "@mui/material";
import emailjs from "emailjs-com";

const GetInTouch = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    subject: "",
    message: "",
  });
  const [successMessage, setSuccessMessage] = useState("");

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    emailjs
      .send(
        "service_kc1v8rt",
        "template_eja26xn",
        {
          from_name: formData.name,
          from_email: formData.email,
          subject: formData.subject,
          message: formData.message,
        },
        "G3swXDWYcnKKHGZQb"
      )
      .then(
        (response) => {
          console.log("SUCCESS!", response.status, response.text);
          setSuccessMessage("Your message has been sent successfully!");
          setFormData({ name: "", email: "", subject: "", message: "" }); // Clear form
        },
        (err) => {
          console.error("FAILED...", err);
        }
      );
  };

  return (
    <Box sx={{ py: 8, px: 3, backgroundColor: "#f9f9f9" }}> {/* Added horizontal padding */}
      <Typography
        variant="h4"
        sx={{
          fontWeight: "bold",
          mb: 2,
          textAlign: "center",
        }}
      >
        Get in Touch
      </Typography>
      <Typography
        variant="body1"
        sx={{
          mb: 4,
          color: "#555",
          textAlign: "center",
        }}
      >
        Fill out the form below, and we will get back to you as soon as possible.
      </Typography>
      <Box component="form" onSubmit={handleSubmit}>
        <Grid container spacing={2}>
          <Grid item xs={12} md={6}>
            <TextField
              fullWidth
              label="Name"
              name="name"
              value={formData.name}
              onChange={handleChange}
              variant="outlined"
              required
            />
          </Grid>
          <Grid item xs={12} md={6}>
            <TextField
              fullWidth
              label="Email"
              name="email"
              value={formData.email}
              onChange={handleChange}
              variant="outlined"
              required
            />
          </Grid>
          <Grid item xs={12}>
            <TextField
              fullWidth
              label="Subject"
              name="subject"
              value={formData.subject}
              onChange={handleChange}
              variant="outlined"
              required
            />
          </Grid>
          <Grid item xs={12}>
            <TextField
              fullWidth
              label="Message"
              name="message"
              value={formData.message}
              onChange={handleChange}
              variant="outlined"
              multiline
              rows={4}
              required
            />
          </Grid>
          <Grid
            item
            xs={12}
            sx={{
              display: "flex",
              justifyContent: "center", // Center the button
              mt: 2,
            }}
          >
            <Button
              type="submit"
              variant="contained"
              color="primary"
              size="large"
              sx={{
                fontWeight: "bold",
                textTransform: "none",
              }}
            >
              Send Message
            </Button>
          </Grid>
          {successMessage && (
            <Grid item xs={12}>
              <Typography
                variant="body2"
                color="success"
                sx={{ mt: 2, textAlign: "center" }}
              >
                {successMessage}
              </Typography>
            </Grid>
          )}
        </Grid>
      </Box>
    </Box>
  );
};

export default GetInTouch;
