import { TextField } from "@mui/material";

export const stepData = [
    {
      label: 'Your name',
      description: `Browse and Upload`,
      info: {
        title: "Let's start with your name",
        input: <TextField sx={{
            width: "80%"
        }}
        helperText="Please enter your name"
        label="Name"
      />,
      info_descrition: "Please fill the necessary information"
      },
      about: "Some information about the field 1"
    },
    {
      label: 'Describes',
      description:
        'Browse and Upload',
        info: {
            title: "What describes you?",
            input: <TextField sx={{
                width: "80%"
            }}
            helperText="Please enter your name"
            label="Name"
          />,
          info_descrition: "Please fill the necessary information"
          },
          about: "Some information about the field 2"
    },
    {
      label: 'Services',
      description: `Browse and Upload`,
      info: {
        title: "What services are you looking for?",
        input: <TextField sx={{
            width: "80%"
        }}
        helperText="Please enter your name"
        label="Name"
      />,
      info_descrition: "Please fill the necessary information",
      },
      about: "Some information about the field 3"
    },
    {
        label: 'Budget',
        description: `Browse and Upload`,
        info: {
            title: "Please select your budget",
            input: <TextField sx={{
                width: "80%"
            }}
            helperText="Please enter your name"
            label="Name"
          />,
          info_descrition: "Please fill the necessary information"
          },
          about: "Some information about the field 4"
      },
      {
        label: 'Complete',
        description: `Browse and Upload`,
        info: {
            title: "Complete Submission",
            input: <TextField sx={{
                width: "80%"
            }}
            helperText="Please enter your name"
            label="Name"
          />,
          info_descrition: "Please fill the necessary information"
          },
          about: "Some information about the field 5"
      },
  ];