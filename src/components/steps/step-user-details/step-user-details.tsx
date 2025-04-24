import React from 'react';

import { FormFactory, FormField } from '@/components/form/form-factory';
import { FormTextField } from '@/components/form/form-text-field';
import useWizardStore from '@/store/wizard-store';
import { userDetailsSchema } from '@/validation';

import { Person, Person3, Email } from '@mui/icons-material';
import { z } from 'zod';

export const StepUserDetails = () => {
    const { formData, updateFormData, setActiveStep, activeStep } = useWizardStore();

    const handleSubmit = (data: z.infer<typeof userDetailsSchema>) => {
        updateFormData(data);
        setActiveStep(activeStep + 1);
    };
    const fields = React.useMemo<FormField<typeof userDetailsSchema>[]>(() => {
        return [
            {
                name: 'firstName',
                label: 'First Name',
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
                            startIcon={<Person />}
                        />
                    );
                },
            },
            {
                name: 'lastName',
                label: 'Last Name',
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
                            startIcon={<Person3 />}
                        />
                    );
                },
            },
            {
                name: 'email',
                label: 'Email',
                type: 'email',
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
                                type: 'email',
                            }}
                            startIcon={<Email />}
                        />
                    );
                },
            },
        ];
    }, []);

    return (
        <FormFactory
            fields={fields}
            schema={userDetailsSchema}
            onSubmit={handleSubmit}
            defaultValues={formData}
        />
    );
};
