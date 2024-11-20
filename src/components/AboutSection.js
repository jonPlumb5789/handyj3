import React from 'react';
import { Container, Grid, Typography, Box, useMediaQuery, useTheme } from '@mui/material';
import HandshakeIcon from '@mui/icons-material/Handshake';
import BuildIcon from '@mui/icons-material/Build';

const AboutSection = () => {
  const theme = useTheme();
  const isMobile = useMediaQuery(theme.breakpoints.down('sm')); // Check if the screen is small (mobile)

  return (
    <Box sx={{ py: 8, backgroundColor: '#f9f9f9' }}>
      <Container>
        {/* About Us Header */}
        <Typography
          variant="h6"
          sx={{
            color: '#FF6D16',
            fontWeight: 'bold',
            mb: 1,
            textAlign: 'center',
          }}
        >
        
        </Typography>
        <Typography
          variant="h4"
          sx={{
            fontWeight: 'bold',
            mb: 4,
            textAlign: 'center',
          }}
        >
           Reliable Handyman Services in Ypsilanti, Michigan
        </Typography>

        {/* Main Content */}
        <Grid
          container
          spacing={4}
          alignItems="center"
          direction={isMobile ? 'column' : 'row'}
        >
          {/* Images Section */}
          <Grid item xs={12} md={6}>
            <Box
              sx={{
                position: 'relative',
                display: 'flex',
                justifyContent: 'center',
                alignItems: 'center',
              }}
            >
              {!isMobile ? (
                <>
                  {/* Before Image */}
                  <Box
                    component="img"
                    src="/floorb41.jpg"
                    alt="Before Floor"
                    sx={{
                      width: '40%',
                      borderRadius: 2,
                      boxShadow: '0 4px 8px rgba(0, 0, 0, 0.1)',
                      position: 'absolute',
                      top: 400,
                      left: 2,
                    }}
                  />
                  {/* After Image */}
                  <Box
                    component="img"
                    src="/floorafter1.jpg"
                    alt="After Floor"
                    sx={{
                      width: '90%',
                      borderRadius: 2,
                      boxShadow: '0 4px 8px rgba(0, 0, 0, 0.1)',
                    }}
                  />
                </>
              ) : (
                <Box
                  component="img"
                  src="/floorafter1.jpg"
                  alt="After Floor"
                  sx={{
                    width: '100%',
                    borderRadius: 2,
                    boxShadow: '0 4px 8px rgba(0, 0, 0, 0.1)',
                  }}
                />
              )}
            </Box>
          </Grid>

          {/* Text Content Section */}
          <Grid item xs={12} md={6}>
          <Typography variant="h5" sx={{ fontWeight: 'bold', mb: 1 }}>
                About Us
              </Typography>
            <Typography variant="body1" sx={{ mb: 2, lineHeight: 1.6 }}>
              HandyJ3 is your trusted partner for all your home repair and maintenance needs. Based in Ypsilanti, Michigan, we bring over a decade of experience to every project, ensuring your home improvements are done right the first time.
            </Typography>
            <Typography variant="body1" sx={{ mb: 2, lineHeight: 1.6 }}>
              From fixing floors to assembling furniture, HandyJ3 prides itself on attention to detail, professionalism, and top-notch customer service. Your satisfaction is our priority.
            </Typography>
            {/* Mission and Vision Section */}
        <Grid container spacing={4} sx={{ mt: 6 }}>
          <Grid item xs={12} md={6}>
          <Box display="flex" alignItems="center">
              <HandshakeIcon sx={{ fontSize: 48, color: '#007BFF', mr: 2 }} />
              <Typography variant="h5" sx={{ fontWeight: 'bold', mb: 1 }}>
                Our Mission
              </Typography>
            </Box>
            <Typography variant="body1" sx={{ lineHeight: 1.6 }}>
              To provide reliable, high-quality handyman services that improve the lives of homeowners in Ypsilanti and surrounding areas.
            </Typography>
          </Grid>
          <Grid item xs={12} md={6}>
            <Box display="flex" alignItems="center">
              <BuildIcon sx={{ fontSize: 48, color: '#007BFF', mr: 2 }} />
              <Typography variant="h5" sx={{ fontWeight: 'bold', mb: 1 }}>
                Our Vision
              </Typography>
            </Box>
            <Typography variant="body1" sx={{ lineHeight: 1.6 }}>
              To become Ypsilanti's go-to handyman by building trust, exceeding expectations, and delivering excellent craftsmanship on every job.
            </Typography>
          </Grid>
        </Grid>
          </Grid>
          
        </Grid>

        
      </Container>
    </Box>
  );
};

export default AboutSection;


