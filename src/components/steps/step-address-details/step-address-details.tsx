import { LocationCity, LocationOn, Map, Pin } from '@mui/icons-material';

import type { FormField } from '@/components/form/form-factory';
import { FormFactory } from '@/components/form/form-factory';
import { FormTextField } from '@/components/form/form-text-field';
import { addressDetailsSchema } from '@/validation';
import useWizardStore from '@/store/wizard-store';
import React from 'react';
import type { z } from 'zod';
export const StepAddressDetails = () => {
    const { formData, updateFormData, setActiveStep, activeStep } = useWizardStore();

    const handleSubmit = (data: z.infer<typeof addressDetailsSchema>) => {
        updateFormData(data);
        setActiveStep(activeStep + 1);
    };

    const fields = React    .useMemo<FormField<typeof addressDetailsSchema>[]>(() => {
        return [
            {
                name: 'street',
                label: 'Street',
                type: 'text',
                required: true,
                render: ({ field, label, required, error }) => {
                    return (
                        <FormTextField
                            name={field.name}
                            value={field.value}
                            onChange={field.onChange}
                            error={error}
                            textFieldProps={{
                                label,
                                required,
                            }}
                            startIcon={<Map />}
                        />
                    );
                },
            },
            {
                name: 'city',
                label: 'City',
                type: 'text',
                required: true,
                render: ({ field, label, required, error }) => {
                    return (
                        <FormTextField
                            name={field.name}
                            value={field.value}
                            onChange={field.onChange}
                            error={error}
                            textFieldProps={{
                                label,
                                required,
                            }}
                            startIcon={<LocationCity />}
                        />
                    );
                },
            },
            {
                name: 'state',
                label: 'State',
                type: 'text',
                required: true,
                render: ({ field, label, required, error }) => {
                    return (
                        <FormTextField
                            name={field.name}
                            value={field.value}
                            onChange={field.onChange}
                            error={error}
                            textFieldProps={{
                                label,
                                required,
                            }}
                            startIcon={<LocationOn />}
                        />
                    );
                },
            },
            {
                name: 'zipCode',
                label: 'Zip Code',
                type: 'text',
                required: true,
                render: ({ field, label, required, error }) => {
                    return (
                        <FormTextField
                            name={field.name}
                            value={field.value}
                            onChange={field.onChange}
                            error={error}
                            textFieldProps={{
                                label,
                                required,
                            }}
                            startIcon={<Pin />}
                        />
                    );
                },
            },
        ];
    }, []);
    return (
        <FormFactory
            fields={fields}
            schema={addressDetailsSchema}
            onSubmit={handleSubmit}
            defaultValues={formData}
        />
    );
};
