import { InputAdornment, TextField, useTheme } from '@mui/material';
import type { SvgIconProps, SxProps, Theme } from '@mui/material';
import React from 'react';

import type { FormTextFieldProps } from './types';
import { textFieldStyles } from './styles';

export const FormTextField: React.FC<FormTextFieldProps> = ({
    name,
    value,
    onChange,
    error,
    textFieldProps,
    startIcon,
    endIcon,
}) => {
    const theme = useTheme();
    const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        onChange?.(e.target.value);
    };

    const fieldStartIcon =
        startIcon &&
        React.cloneElement(startIcon as React.ReactElement<SvgIconProps>, {
            color: error ? 'error' : 'primary',
        });

    const fieldEndIcon =
        endIcon &&
        React.cloneElement(endIcon as React.ReactElement<SvgIconProps>, {
            color: error ? 'error' : 'primary',
        });

    return (
        <TextField
            {...textFieldProps}
            name={name}
            value={value}
            onChange={handleChange}
            variant={textFieldProps?.variant ?? 'outlined'}
            error={!!error}
            fullWidth
            type={textFieldProps?.type ?? 'text'}
            sx={textFieldStyles(theme) as SxProps<Theme>}
            slotProps={{
                input: {
                    startAdornment: fieldStartIcon && (
                        <InputAdornment position="start">{fieldStartIcon}</InputAdornment>
                    ),
                    endAdornment: fieldEndIcon && (
                        <InputAdornment position="end">{fieldEndIcon}</InputAdornment>
                    ),
                },
            }}
        />
    );
};
