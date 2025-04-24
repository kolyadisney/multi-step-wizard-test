import type { TextFieldProps } from '@mui/material';

import type { ReactElement } from 'react';

export interface FormTextFieldProps {
    name: string;
    value?: string;
    onChange?: (value: string) => void;
    error?: string;
    textFieldProps?: Partial<TextFieldProps>;
    startIcon?: ReactElement;
    endIcon?: ReactElement;
    iconColor?: string | { default: string; hover?: string };
}
