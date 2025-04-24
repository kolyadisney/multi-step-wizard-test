import { zodResolver } from '@hookform/resolvers/zod';
import { STEP_FIELD_KEYS, STEP_SCHEMAS, wizardSchema } from '@/validation';
import useWizardStore from '@/store/wizard-store';
import type { WizardData } from '@/validation';

import { useForm } from 'react-hook-form';

import { STEPS } from '@/constants';

import { useEffect } from 'react';

export const useWizardForm = () => {
    const { activeStep, formData, updateFormData, resetFormData, setActiveStep } = useWizardStore();

    const methods = useForm<WizardData>({
        resolver: zodResolver(wizardSchema),
        mode: 'onChange',
        reValidateMode: 'onChange',
        defaultValues: formData,
    });

    const { trigger, reset, getValues, clearErrors } = methods;
    const stepKeys = STEP_FIELD_KEYS[activeStep] ?? [];
    const currentSchema = STEP_SCHEMAS[activeStep];

    useEffect(() => {
        if (!currentSchema || stepKeys.length === 0) return;

        const hasStepData = stepKeys.every((key) => formData[key] !== undefined);

        if (hasStepData) {
            const schema = currentSchema.safeParse(
                stepKeys.reduce((acc, key) => ({ ...acc, [key]: formData[key] }), {}),
            );

            if (schema.success) {
                clearErrors(stepKeys);
            }
        }
    }, [activeStep]);

    const handleStepChange = async (nextStep: number) => {
        if (!currentSchema || stepKeys.length === 0) {
            setActiveStep(nextStep);
            return;
        }

        const isValid = await trigger(stepKeys);
        if (!isValid) return;

        const stepData = stepKeys.reduce<Partial<WizardData>>(
            (acc, key) => ({
                ...acc,
                [key]: getValues(key),
            }),
            {},
        );

        updateFormData(stepData);
        setActiveStep(nextStep);
    };

    const handleFinalSubmit = (data: WizardData) => {
        updateFormData(data);
        resetFormData();
        reset({}, { keepDirty: false, keepTouched: false });
        setActiveStep(activeStep + 1);
    };

    return {
        methods,
        handleStepChange,
        handleFinalSubmit,
        isLastStep: activeStep === STEPS.length - 2,
        isSuccessStep: Boolean(STEPS[activeStep]?.hideNavigation),
    };
};
