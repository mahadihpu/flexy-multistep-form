import React from 'react'
import Card from '@mui/material/Card';
import PropTypes from 'prop-types';
import { Button, Step, StepLabel, Stepper, Typography } from '@mui/material'
import { styled } from '@mui/material/styles';
import SettingsIcon from '@mui/icons-material/Settings';
import GroupAddIcon from '@mui/icons-material/GroupAdd';
import VideoLabelIcon from '@mui/icons-material/VideoLabel';
import Steps from './Steps';
import StepContents from './StepContents';
import ArrowBackIcon from '@mui/icons-material/ArrowBack';

function getSteps(stepData,activeStep) {
  return stepData.map((step, index) => <Steps index={index} title={step.title} message={step.message} activeStep={activeStep} />)
}

function getStepContent(activeStep, handleComplete, completedSteps, totalSteps, stepData) {
  switch (activeStep) {
     case activeStep < stepData.length && activeStep:
        return <StepContents index={activeStep} data={stepData[activeStep]} handleComplete={handleComplete} completedSteps={completedSteps} totalSteps={totalSteps} />;
     default:
        return <><Typography variant="h3" align="center">Form is completed</Typography><Typography color="primary" align="center">Congratulations!Now get access to quick cash loan</Typography></>;
  }
}

const stepData = [
  { title: "Personal details", message: "Get your mobile and email verified to get access to quick cash loan" },
  { title: "Contact details", message: "Get your mobile and email verified to get access to quick cash loan" },
  { title: "KYC Verification", message: "Get your mobile and email verified to get access to quick cash loan" },
  // { title: "Bank Verification", message: "Get your mobile and email verified to get access to quick cash loan" },
  // { title: "Country Verification", message: "Get your mobile and email verified to get access to quick cash loan" },
  // { title: "Friend Verification", message: "Get your mobile and email verified to get access to quick cash loan" },
  // { title: "enemy Verification", message: "Get your mobile and email verified to get access to quick cash loan" },
];

const ColorlibStepIconRoot = styled('div')(({ theme, ownerState }) => ({
  backgroundColor: theme.palette.mode === 'dark' ? theme.palette.grey[700] : '#ccc',
  zIndex: 1,
  color: '#fff',
  width: 50,
  height: 50,
  display: 'flex',
  borderRadius: '50%',
  justifyContent: 'center',
  alignItems: 'center',
  ...(ownerState.active && {
    backgroundColor: theme.palette.primary.main,
    boxShadow: '0 4px 10px 0 rgba(0,0,0,.25)',
  }),
  ...(ownerState.completed && {
    backgroundImage:
      'linear-gradient( 136deg, rgb(242,113,33) 0%, rgb(233,64,87) 50%, rgb(138,35,135) 100%)',
  }),
}));

function ColorlibStepIcon(props) {
  const { active, completed, className } = props;

  const icons = {
    1: <SettingsIcon />,
    2: <GroupAddIcon />,
    3: <VideoLabelIcon />,
  };

  return (
    <ColorlibStepIconRoot ownerState={{ completed, active }} className={className}>
      {icons[String(props.icon)]}
    </ColorlibStepIconRoot>
  );
}

ColorlibStepIcon.propTypes = {
  /**
   * Whether this step is active.
   * @default false
   */
  active: PropTypes.bool,
  className: PropTypes.string,
  /**
   * Mark the step as completed. Is passed to child components.
   * @default false
   */
  completed: PropTypes.bool,
  /**
   * The label displayed in the step icon.
   */
  icon: PropTypes.node,
};

export default function HorizontalStepForm() {
  const [activeStep, setActiveStep] = React.useState(0)
  const [completed, setCompleted] = React.useState({})
  const steps = getSteps(stepData,activeStep)

  const totalSteps = () => {
    return steps.length
  }

  const completedSteps = () => {
    return Object.keys(completed).length
  }

  const isLastStep = () => {
    return activeStep === totalSteps() - 1
  }

  const allStepsCompleted = () => {
    return completedSteps() === totalSteps()
  }

  const handleNext = () => {
    const newActiveStep =
      isLastStep() && !allStepsCompleted()
        ? // It's the last step, but not all steps have been completed,
          // find the first step that has been completed
          steps.findIndex((step, i) => !(i in completed))
        : activeStep + 1
    setActiveStep(newActiveStep)
  }

  const handleBack = () => {
    setActiveStep((prevActiveStep) => prevActiveStep - 1)
  }

  const handleStep = (step) => () => {
    setActiveStep(step)
  }

  const handleComplete = () => {
    const newCompleted = completed;
    newCompleted[activeStep] = true;
    setCompleted(newCompleted);
    handleNext();
  };

  const handleReset = () => {
    setActiveStep(0)
    setCompleted({})
  }

  return (
    <><Card variant="outlined" sx={{padding:'50px'}}>
    <Card variant="outlined">
    <Stepper nonLinear activeStep={activeStep} connector="">
      {steps.map((label, index) => (
        <Step key={label}>
          {console.log(label,index)}
          <StepLabel StepIconComponent={ColorlibStepIcon}>{activeStep === index ? label : ''}</StepLabel>
        </Step>
      ))}
    </Stepper>
    </Card>
    {
      console.log(steps)
    }
    <div>
      {allStepsCompleted() ? (
        <div>
          <Typography>
            All steps completed
          </Typography>
          <Button onClick={handleReset}>Reset</Button>
        </div>
      ) : (
        <div>
          <Typography>
          {getStepContent(activeStep, handleComplete, completedSteps, totalSteps, stepData)}
          </Typography>
          <div style={{ marginLeft: '50%' }}>
            <Button
              disabled={activeStep === 0}
              onClick={handleBack}
              startIcon={<ArrowBackIcon />}
            >
              Back
            </Button>
            <Button
              variant="contained"
              onClick={handleNext}
              color="primary"
            >
              Continue
            </Button>
          </div>
        </div>
      )}
    </div>
</Card>
    </>
  )
}
