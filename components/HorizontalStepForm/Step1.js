import { InputLabel, TextField, Typography } from '@mui/material'
import { Box } from '@mui/system'
import React from 'react'


const Step1 = () => {
  return (
    <Box>
      <Typography variant="h3">We can't wait to meet you</Typography>
      <Typography>Please fill the infromation below so that we can in contact with you</Typography>
      <br /><br />
      <InputLabel>
          Please Enter Your Name
        </InputLabel>
      <TextField id="outlined-basic" variant="outlined" sx={{width: '50%'}} />
      <br />
      <InputLabel>
          Please Enter Email
        </InputLabel>
      <TextField id="outlined-basic" variant="outlined" sx={{width: '50%'}} />
    </Box>
  )
}

export default Step1
