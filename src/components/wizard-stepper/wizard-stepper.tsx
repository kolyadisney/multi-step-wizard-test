import React from "react";

import { Box, Step, StepLabel, Stepper, Typography, useTheme } from '@mui/material';
import { motion } from 'framer-motion';

import {
    stepLabelStyles,
    stepLabelTypographyStyles,
    stepperWrapperStyles,
    labelAnimationProps,
    getLabelAnimationStyle,
} from './styles';
import { CustomStepConnector } from './styles.emotion';
import { STEPS } from '@/constants';
import useWizardStore from '@/store/wizard-store';
import { CustomStepIcon } from './custom-step-icon';

export const WizardStepper = () => {
    const theme = useTheme();
    const { activeStep, setActiveStep } = useWizardStore();

    const currentStep = STEPS[activeStep];

    if (currentStep?.hideNavigation) {
        return null;
    }

    const mainSteps = STEPS.filter((step) => !step.hideNavigation);

    return (
        <Box sx={stepperWrapperStyles}>
            <Stepper activeStep={activeStep} alternativeLabel connector={<CustomStepConnector />}>
                {mainSteps.map((step, index) => {
                    const labelProps: {
                        optional?: React.ReactNode;
                        error?: boolean;
                    } = {};
                    return (
                        <Step key={step.label}>
                            <StepLabel
                                icon={
                                    <CustomStepIcon
                                        icon={index + 1}
                                        active={activeStep === index}
                                        completed={activeStep > index}
                                        label={step.label}
                                    />
                                }
                                onClick={() => activeStep > index && setActiveStep(index)}
                                {...labelProps}
                                sx={stepLabelStyles}
                            >
                                <motion.div
                                    {...labelAnimationProps}
                                    animate={getLabelAnimationStyle(activeStep === index, theme)}
                                >
                                    <Typography variant="subtitle2" sx={stepLabelTypographyStyles}>
                                        {step.label}
                                    </Typography>
                                </motion.div>
                            </StepLabel>
                        </Step>
                    );
                })}
            </Stepper>
        </Box>
    );
};
