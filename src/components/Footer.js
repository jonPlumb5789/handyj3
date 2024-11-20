import React from 'react';
import { Typography, Box } from '@mui/material';

const Footer = () => {
  return (
    <Box sx={{ py: 2, backgroundColor: '#333', color: '#fff', textAlign: 'center' }}>
      <Typography variant="body2">
        © 2024 HandyJ3 - All rights reserved.
      </Typography>
    </Box>
  );
};

export default Footer;
