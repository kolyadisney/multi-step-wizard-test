import { ArrowBack, ArrowForward, CheckCircle } from '@mui/icons-material';
import { Box, Button, useTheme } from '@mui/material';
import React from 'react';

import { useStepValidation } from '@/hooks/useStepValidation';
import useWizardStore from '@/store/wizard-store';

import { navigationWrapperStyles, previousButtonStyles, nextButtonStyles } from './styles';
import type { WizardNavigationProps } from './types';
import { useWizardNavigation } from '@/hooks/useWizardNavigation';

export const WizardNavigation: React.FC<WizardNavigationProps> = ({ onSubmit }) => {
    const theme = useTheme();
    const { activeStep, setActiveStep } = useWizardStore();
    const { isStepValid } = useStepValidation();
    const { currentStep, isFirstStep, isLastMainStep } = useWizardNavigation();

    if (currentStep?.hideNavigation) {
        return null;
    }

    return (
        <Box sx={navigationWrapperStyles(theme)}>
            <Button
                variant="contained"
                color="primary"
                onClick={() => setActiveStep(activeStep - 1)}
                disabled={isFirstStep}
                startIcon={<ArrowBack />}
                sx={previousButtonStyles(isFirstStep, theme)}
            >
                Previous
            </Button>
            <Button
                variant="contained"
                color={isLastMainStep ? 'success' : 'primary'}
                disabled={isLastMainStep ? false : !isStepValid}
                endIcon={isLastMainStep ? <CheckCircle /> : <ArrowForward />}
                sx={nextButtonStyles(isStepValid, isLastMainStep, theme)}
                onClick={onSubmit}
            >
                {isLastMainStep ? 'Complete' : 'Next'}
            </Button>
        </Box>
    );
};
