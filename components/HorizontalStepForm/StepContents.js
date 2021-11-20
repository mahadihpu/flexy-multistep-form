import { Button, Typography } from '@mui/material';
import { Box } from '@mui/system';
import React from 'react';
import Step1 from './Step1';

const StepContents = ({ index, data, handleComplete, completedSteps, totalSteps }) => {
   return (
      <Box style={{ marginTop: "10%" }}>
         {
            data.title === 'Personal details' ? <Step1 handleComplete={handleComplete} completedSteps={completedSteps} totalSteps={totalSteps} /> : <Box><Typography variant="h5">Step {index + 1}: {data.title}</Typography>
               <Typography>{data.message}</Typography>
               <Button variant="contained" color="primary" onClick={handleComplete}>
                  {completedSteps() === totalSteps() - 1 ? 'Finish' : 'Complete Step'}
               </Button></Box>
         }
      </Box>
   );
};

export default StepContents;