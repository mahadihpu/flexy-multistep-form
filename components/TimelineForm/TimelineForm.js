import CreateIcon from '@mui/icons-material/Create';
import ImportContactsIcon from '@mui/icons-material/ImportContacts';
import LocalOfferIcon from '@mui/icons-material/LocalOffer';
import MailOutlineIcon from '@mui/icons-material/MailOutline';
import PersonIcon from '@mui/icons-material/Person';
import { TimelineItem as MuiTimelineItem, TimelineSeparator } from '@mui/lab';
import Timeline from '@mui/lab/Timeline';
import TimelineConnector from '@mui/lab/TimelineConnector';
import TimelineContent from '@mui/lab/TimelineContent';
import { Typography } from '@mui/material';
import { styled, withStyles } from '@mui/styles';
import * as React from 'react';
import "./TimelineForm";

const steps = [
    {
      label: 'Your name',
      description: `Browse and Upload`,
      icon: <PersonIcon /> 
    },
    {
      label: 'Describes',
      description:
        'Browse and Upload',
        icon: <ImportContactsIcon />
    },
    {
      label: 'Services',
      description: `Browse and Upload`,
      
      icon: <CreateIcon />
    },
    {
        label: 'Budget',
        description: `Browse and Upload`,
        
        icon: <LocalOfferIcon />
      },
      {
        label: 'Complete',
        description: `Browse and Upload`,
        
        icon: <MailOutlineIcon />  
      },
  ];


const CustomIconDiv = styled("div")(({ theme, ownerState }) => {
    return {
      backgroundColor: theme.palette.primary.main,
      zIndex: 1,
      color: '#fff',
      width: 50,
      height: 50,
      display: 'flex',
      borderRadius: '50%',
      justifyContent: 'center',
      alignItems: 'center',
    // ...(ownerState.active && {
    //     backgroundColor: theme.palette.primary.main,
    //   }),
    };
  });

  const TimelineItem = withStyles({
    missingOppositeContent: {
      "&:before": {
        display: "none"
      }
    }
  })(MuiTimelineItem);

const TimelineForm = () => {
    const [active, setActiveStep] = React.useState(0);

    return (
        <Timeline position="left">
      {
          steps.map(step => 
            <TimelineItem>
            <TimelineSeparator>
            <CustomIconDiv ownerState={{ active }}>
              {step.icon}
              </CustomIconDiv>
              <TimelineConnector />
            </TimelineSeparator>
            <TimelineContent sx={{ py: '12px', px: 2 }}>
              <Typography variant="h4">
                {step.label}
              </Typography>
              <Typography sx={{
                            clear: "both",
                            display: "inline-block",
                            overflow: "hidden",
                            whiteSpace: "nowrap",}}>

              </Typography>
              {step.description}
            </TimelineContent>
          </TimelineItem>
          )
      }
      </Timeline>
    );
};

export default TimelineForm;