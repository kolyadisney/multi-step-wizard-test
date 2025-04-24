import { Box, Typography } from '@mui/material';

import { stepTitleStyles } from './styles';
import { AnimatedStep } from '../wizard/animated-step';
import { STEPS } from '@/constants';
import useWizardStore from '@/store/wizard-store';
export const WizardStepContent = () => {
    const { activeStep } = useWizardStore();
    const currentStep = STEPS[activeStep];
    const StepComponent = currentStep.component;
    const isLastStep = currentStep?.hideNavigation;

    const content = (
        <>
            <Typography
                variant="h5"
                sx={stepTitleStyles}
                visibility={isLastStep ? 'hidden' : 'visible'}
            >
                {currentStep.label}
            </Typography>
            <Box>
                <StepComponent />
            </Box>
        </>
    );

    if (isLastStep) {
        return <Box>{content}</Box>;
    }

    return (
        <Box>
            <AnimatedStep stepIndex={activeStep}>{content}</AnimatedStep>
        </Box>
    );
};
