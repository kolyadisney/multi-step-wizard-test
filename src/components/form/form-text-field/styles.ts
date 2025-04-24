import type { SxProps, Theme } from '@mui/material';

export const textFieldStyles = (theme: Theme): SxProps<Theme> => ({
    '& .MuiInputBase-input': {
        '&:-webkit-autofill': {
            WebkitBoxShadow: `0 0 0 100px ${theme.palette.background.paper} inset`,
            WebkitTextFillColor: theme.palette.text.primary,
            fontSize: '16px',
        },
        '&:-webkit-autofill:focus': {
            WebkitBoxShadow: `0 0 0 100px ${theme.palette.background.paper} inset`,
            WebkitTextFillColor: theme.palette.text.primary,
            fontSize: '16px',
        },
        '&:-webkit-autofill:hover': {
            WebkitBoxShadow: `0 0 0 100px ${theme.palette.background.paper} inset`,
            WebkitTextFillColor: theme.palette.text.primary,
            fontSize: '16px',
        },
    },
});
