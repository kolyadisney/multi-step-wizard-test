'use client';

import { Controller, useFormContext, Path } from 'react-hook-form';
import type { z } from 'zod';

import { AnimatedErrorMessage } from './animated-error-message';
import { formStyles, fieldContainerStyles } from './styles';
import type { FormFactoryProps, FormField } from './types';
import { ReactElement } from 'react';

export const FormFactory = <T extends z.ZodType>({ fields }: FormFactoryProps<T>) => {
    const {
        control,
        formState: { errors },
    } = useFormContext<z.infer<T>>();

    const renderField = (field: FormField<T>): ReactElement => {
        return (
            <>
                <Controller
                    key={String(field.name)}
                    name={field.name as Path<z.infer<T>>}
                    control={control}
                    render={({ field: controllerField }) => {
                        return field.render!({
                            field: controllerField,
                            error: errors[field.name]?.message as string,
                            label: field.label,
                            required: field.required,
                        }) as ReactElement;
                    }}
                />
                <AnimatedErrorMessage error={errors[field.name]?.message as string} />
            </>
        );
    };

    return (
        <div style={formStyles}>
            {fields.map((field) => (
                <div key={String(field.name)} style={fieldContainerStyles}>
                    {renderField(field)}
                </div>
            ))}
        </div>
    );
};
