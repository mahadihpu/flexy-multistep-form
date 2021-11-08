import { Box, Typography } from '@mui/material';
import React from 'react';

const StepperContent = () => {
    return (
    //     <StepContent>
        
    //   </StepContent>
    <Box sx={{ mb: 2 }}>
            <Typography variant="">Stepper content</Typography>
          <div>
            {/* <Button
              variant="contained"
              onClick={handleNext}
              sx={{ mt: 1, mr: 1 }}
            >
              {index === steps.length - 1 ? 'Finish' : 'Continue'}
            </Button>
            <Button
              disabled={index === 0}
              onClick={handleBack}
              sx={{ mt: 1, mr: 1 }}
            >
              Back
            </Button> */}
          </div>
        </Box>
    );
};

export default StepperContent;