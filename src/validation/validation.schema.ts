import { z } from 'zod';

export const userDetailsSchema = z.object({
    firstName: z.string().min(2, 'First name must be at least 2 characters'),
    lastName: z.string().min(2, 'Last name must be at least 2 characters'),
    email: z.string().email('Please enter a valid email address'),
});

export const addressDetailsSchema = z.object({
    street: z.string().min(5, 'Street must be at least 5 characters'),
    city: z.string().min(2, 'City must be at least 2 characters'),
    state: z.string().min(2, 'State must be at least 2 characters'),
    zipCode: z.string().regex(/^\d{5}(-\d{4})?$/, 'Please enter a valid zip code'),
});

const accountBaseSchema = z.object({
    username: z.string().min(3, 'Username must be at least 3 characters'),
    password: z
        .string()
        .min(8, 'Password must be at least 8 characters')
        .regex(
            /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[@$!%*?&])[A-Za-z\d@$!%*?&]+$/,
            'Password must contain uppercase and lowercase letters, numbers and special characters',
        ),
    confirmPassword: z.string(),
});

export const accountDetailsSchema = accountBaseSchema.refine(
    (data) => data.password === data.confirmPassword,
    {
        message: "Passwords don't match",
        path: ['confirmPassword'],
    },
);

export const wizardSchema = userDetailsSchema
    .merge(addressDetailsSchema)
    .merge(accountBaseSchema)
    .refine((data) => data.password === data.confirmPassword, {
        message: "Passwords don't match",
        path: ['confirmPassword'],
    });

export const STEP_FIELD_KEYS = [
    Object.keys(userDetailsSchema.shape),
    Object.keys(addressDetailsSchema.shape),
    Object.keys(accountBaseSchema.shape),
] as (keyof WizardData)[][];

export const STEP_SCHEMAS = [userDetailsSchema, addressDetailsSchema, accountBaseSchema] as const;

export type UserDetails = z.infer<typeof userDetailsSchema>;
export type AddressDetails = z.infer<typeof addressDetailsSchema>;
export type AccountDetails = z.infer<typeof accountDetailsSchema>;
export type WizardData = UserDetails & AddressDetails & AccountDetails;
