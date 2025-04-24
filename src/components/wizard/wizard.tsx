import { Box, Card, CardContent, Container, useTheme } from '@mui/material';
import { FormProvider } from 'react-hook-form';

import {
    cardContentStyles,
    cardStyles,
    containerStyles,
    contentWrapperStyles,
    progressBarStyles,
} from './styles';
import { WizardStepContent } from '../wizard-stepper/wizard-step-content';
import { useWizardForm } from '@/hooks/useWizardForm';
import useWizardStore from '@/store/wizard-store';
import { WizardStepper, WizardNavigation } from '@/components';

export const Wizard = () => {
    const theme = useTheme();
    const { activeStep } = useWizardStore();
    const { methods, handleStepChange, handleFinalSubmit, isLastStep, isSuccessStep } =
        useWizardForm();

    const onNext = async () => {
        await handleStepChange(activeStep + 1);
    };

    return (
        <FormProvider {...methods}>
            <Container maxWidth="md" sx={containerStyles}>
                <Card elevation={0} sx={cardStyles(theme)}>
                    {!isSuccessStep && <Box sx={progressBarStyles} />}
                    <CardContent sx={cardContentStyles}>
                        <WizardStepper />
                        <Box sx={contentWrapperStyles(isSuccessStep)}>
                            <form
                                onSubmit={
                                    isLastStep
                                        ? methods.handleSubmit(handleFinalSubmit)
                                        : (e) => {
                                            e.preventDefault();
                                            onNext();
                                        }
                                }
                            >
                                <WizardStepContent />
                                <WizardNavigation
                                    onSubmit={
                                        isLastStep
                                            ? methods.handleSubmit(handleFinalSubmit)
                                            : onNext
                                    }
                                />
                            </form>
                        </Box>
                    </CardContent>
                </Card>
            </Container>
        </FormProvider>
    );
};
