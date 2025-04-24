import { STEPS } from '@/constants';
import useWizardStore from '@/store/wizard-store';

import { useMemo } from 'react';

export const useWizardNavigation = () => {
    const { activeStep } = useWizardStore();

    const currentStep = useMemo(() => STEPS[activeStep], [activeStep]);
    const isFirstStep = useMemo(() => activeStep === 0, [activeStep]);
    const mainSteps = useMemo(() => STEPS.filter((step) => !step.hideNavigation), []);
    const isLastMainStep = useMemo(
        () => activeStep === mainSteps.length - 1,
        [activeStep, mainSteps],
    );
    const isSuccessStep = useMemo(() => Boolean(currentStep?.hideNavigation), [currentStep]);

    return {
        currentStep,
        isFirstStep,
        mainSteps,
        isLastMainStep,
        isSuccessStep,
        totalSteps: STEPS.length,
    };
};
