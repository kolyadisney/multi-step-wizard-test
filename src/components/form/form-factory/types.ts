import type { ReactElement } from 'react';

import type { z } from 'zod';

export interface FormField<T extends z.ZodType> {
    name: keyof z.infer<T>;
    label: string;
    type: string;
    required?: boolean;
    render: (props: FormFieldRenderProps<T>) => ReactElement;
}

export interface FormFieldRenderProps<T extends z.ZodType> {
    field: {
        name: keyof z.infer<T>;
        value: string | undefined;
        onChange: (value: string | undefined) => void;
    };
    error?: string;
    label: string;
    required?: boolean;
}

export interface FormFactoryProps<T extends z.ZodType> {
    fields: FormField<T>[];
    schema: T;
    onSubmit: (data: z.infer<T>) => void;
    defaultValues?: Partial<z.infer<T>>;
}

export interface AnimatedErrorMessageProps {
    error?: string;
}
