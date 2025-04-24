import { Lock, Person, VisibilityOff, Visibility } from '@mui/icons-material';
import { IconButton } from '@mui/material';
import type { z } from 'zod';
import React from 'react';

import { FormFactory, FormField } from '@/components/form/form-factory';
import useWizardStore from '@/store/wizard-store';
import { accountDetailsSchema } from '@/validation';
import { FormTextField } from '@/components/form/form-text-field';

export const StepAccountDetails = () => {
    const { formData, updateFormData, setActiveStep, activeStep } = useWizardStore();
    const [showPassword, setShowPassword] = React.useState(false);
    const [showConfirmPassword, setShowConfirmPassword] = React.useState(false);

    const handleSubmit = (data: z.infer<typeof accountDetailsSchema>) => {
        updateFormData(data);
        setActiveStep(activeStep + 1);
    };

    const fields = React.useMemo<FormField<typeof accountDetailsSchema>[]>(() => {
        return [
            {
                name: 'username',
                label: 'Username',
                type: 'text',
                required: true,
                render: ({ field, label, required, error }) => (
                    <FormTextField
                        name={field.name}
                        value={field.value}
                        onChange={field.onChange}
                        error={error}
                        textFieldProps={{ label, required }}
                        startIcon={<Person />}
                    />
                ),
            },
            {
                name: 'password',
                label: 'Password',
                type: 'password',
                required: true,
                render: ({ field, label, required, error }) => (
                    <FormTextField
                        name={field.name}
                        value={field.value}
                        onChange={field.onChange}
                        error={error}
                        textFieldProps={{
                            label,
                            required,
                            type: showPassword ? 'text' : 'password',
                        }}
                        startIcon={<Lock />}
                        endIcon={
                            <IconButton
                                onClick={() => setShowPassword(!showPassword)}
                                tabIndex={-1}
                            >
                                {showPassword ? <Visibility /> : <VisibilityOff />}
                            </IconButton>
                        }
                    />
                ),
            },
            {
                name: 'confirmPassword',
                label: 'Confirm Password',
                type: 'password',
                required: true,
                render: ({ field, label, required, error }) => (
                    <FormTextField
                        name={field.name}
                        value={field.value}
                        onChange={field.onChange}
                        error={error}
                        textFieldProps={{
                            label,
                            required,
                            type: showConfirmPassword ? 'text' : 'password',
                        }}
                        startIcon={<Lock />}
                        endIcon={
                            <IconButton
                                onClick={() => setShowConfirmPassword(!showConfirmPassword)}
                                tabIndex={-1}
                            >
                                {showConfirmPassword ? <Visibility /> : <VisibilityOff />}
                            </IconButton>
                        }
                    />
                ),
            },
        ];
    }, [showPassword, showConfirmPassword]);

    return (
        <FormFactory
            fields={fields}
            schema={accountDetailsSchema}
            onSubmit={handleSubmit}
            defaultValues={formData}
        />
    );
};
