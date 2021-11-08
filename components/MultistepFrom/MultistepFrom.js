import { Card, Grid, Typography } from '@mui/material';
import React from 'react';
import TimelineForm from '../TimelineForm/TimelineForm';
import StepperContent from './StepperContent';

const MultistepFrom = () => {
    return (
       <Card>
           <Typography variant="h2">Examples with steps UI</Typography>
           <Typography>Fill the information and click next to finish the map.</Typography>
           <br /><br />
           <Grid container>
               <Grid xs={3} style={{borderRight: '1px solid grey'}}>
                   {/* <VerticalStepper /> */}
                   <TimelineForm />
               </Grid>
               <Grid xs={9}>
                   <StepperContent />
               </Grid>
           </Grid>
       </Card>
    );
};

export default MultistepFrom;