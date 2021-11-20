
import { Typography } from '@mui/material';
import { Box } from '@mui/system';
import React from 'react';

const Steps = ({ title,index,activeStep }) => {
   return (
      <Box textAlign="left">
        {
            activeStep === index ?  <Typography variant="h4" style={{ fontWeight: 600 }} color="primary">Step {index + 1}</Typography> : ''
        }
        <Typography>{title}</Typography>
      </Box>
   );
};

export default Steps;