import { useFormContext, useWatch } from 'react-hook-form';

import useWizardStore from '@/store/wizard-store';
import { STEP_FIELD_KEYS, STEP_SCHEMAS } from '@/validation';
import type { WizardData } from '@/validation';

export const useStepValidation = () => {
    const { activeStep } = useWizardStore();
    const stepKeys = STEP_FIELD_KEYS[activeStep] ?? [];
    const schema = STEP_SCHEMAS[activeStep];

    const { control } = useFormContext<WizardData>();

    const values = useWatch({
        name: stepKeys,
        control,
    });

    const dataForStep =
        schema &&
        stepKeys.reduce(
            (obj, key, idx) => ({ ...obj, [key]: values[idx] }),
            {} as Partial<WizardData>,
        );

    const isStepValid = schema ? schema.safeParse(dataForStep).success : true;

    return {
        isStepValid,
        stepKeys,
        schema,
    };
};
