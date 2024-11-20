import React from 'react';
import { Container, Grid, Typography, Card, CardContent, CardMedia, Box } from '@mui/material';

// Services array based on the provided information
const services = [
  {
    title: 'Painting',
    description: 'Professional interior and exterior painting services to transform your space.',
    image: '/painting.jpg', // Replace with an actual image path
  },
  {
    title: 'Drywalling & Finishing',
    description: 'High-quality drywall installation and finishing for a polished look.',
    image: '/drywall.jpg', // Replace with an actual image path
  },
  {
    title: 'Flooring',
    description: 'Expert flooring installation, refinishing, and repairs for any type of floor.',
    image: '/woodfloor1.jpg', // Replace with an actual image path
  },
  {
    title: 'Demolition',
    description: 'Efficient and safe demolition services for your remodeling projects.',
    image: '/demolition.jpg', // Replace with an actual image path
  },
  {
    title: 'Junk Removal',
    description: 'Quick and reliable junk removal services to keep your space clean.',
    image: '/junkRemoval.jpg', // Replace with an actual image path
  },
];

const ServicesSection = () => {
  return (
    <Box sx={{ py: 8, backgroundColor: '#f9f9f9' }}>
      <Container>
        <Typography
          variant="h4"
          sx={{
            fontWeight: 'bold',
            mb: 4,
            textAlign: 'center',
          }}
        >
          Our Services
        </Typography>
        <Grid container spacing={4}>
          {services.map((service, index) => (
            <Grid item xs={12} sm={6} md={4} key={index}>
              <Card
                sx={{
                  borderRadius: 2,
                  boxShadow: '0 4px 8px rgba(0, 0, 0, 0.1)',
                  transition: 'transform 0.3s',
                  '&:hover': {
                    transform: 'scale(1.05)',
                  },
                }}
              >
                <CardMedia
                  component="img"
                  image={service.image}
                  alt={service.title}
                  height="160"
                  sx={{
                    borderTopLeftRadius: 2,
                    borderTopRightRadius: 2,
                  }}
                />
                <CardContent>
                  <Typography
                    variant="h5"
                    sx={{ fontWeight: 'bold', mb: 1 }}
                  >
                    {service.title}
                  </Typography>
                  <Typography
                    variant="body1"
                    sx={{ color: '#555', lineHeight: 1.6 }}
                  >
                    {service.description}
                  </Typography>
                </CardContent>
              </Card>
            </Grid>
          ))}
        </Grid>
      </Container>
    </Box>
  );
};

export default ServicesSection;
