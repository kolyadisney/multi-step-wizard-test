import type { SxProps, Theme } from '@mui/material';

export const navigationWrapperStyles = (theme: Theme): SxProps<Theme> => ({
    display: 'flex',
    justifyContent: 'space-between',
    alignItems: 'center',
    gap: 2,
    mt: 4,
    pt: 3,
    borderTop: 1,
    borderColor: theme.palette.mode === 'light' ? 'rgba(0,0,0,0.1)' : 'rgba(255,255,255,0.1)',
});

export const previousButtonStyles = (isFirstStep: boolean, theme: Theme): SxProps<Theme> => ({
    px: 3,
    minWidth: { sm: 150 },
    maxWidth: { xs: '50%', sm: 'auto' },
    flex: { xs: '1 1 auto', sm: '0 0 auto' },
    transition: 'all 0.2s ease-in-out',
    visibility: isFirstStep ? 'hidden' : 'visible',
    '&:hover': {
        boxShadow: `0 4px 12px ${theme.palette.primary.main}`,
        transform: 'translateY(-2px)',
    },
});

export const nextButtonStyles = (
    isStepValid: boolean,
    isLastMainStep: boolean,
    theme: Theme,
): SxProps<Theme> => ({
    px: 3,
    minWidth: { sm: 150 },
    maxWidth: { xs: '50%', sm: 'auto' },
    marginTop: { xs: -0.5, sm: 0 },
    flex: { xs: '1 1 auto', sm: '0 0 auto' },
    transition: 'all 0.2s ease-in-out',
    transform: isStepValid ? 'translateY(0)' : 'translateY(2px)',
    opacity: isStepValid ? 1 : 0.8,
    '&:hover': {
        boxShadow:
            isStepValid && !isLastMainStep
                ? `0 6px 16px ${theme.palette.primary.main}`
                : `0 6px 16px ${theme.palette.success.main}`,
        transform: isStepValid ? 'translateY(-2px)' : 'translateY(2px)',
    },
});

export const containerStyles = {
    py: 5,
};

export const cardStyles = (theme: Theme) => ({
    borderRadius: 3,
    overflow: 'hidden',
    boxShadow:
        theme.palette.mode === 'light'
            ? '0 10px 30px rgba(0, 0, 0, 0.06)'
            : '0 10px 30px rgba(0, 0, 0, 0.25)',
    position: 'relative',
    transition: 'all 0.3s ease-in-out',
    '&:hover': {
        boxShadow:
            theme.palette.mode === 'light'
                ? '0 12px 40px rgba(0, 0, 0, 0.1)'
                : '0 12px 40px rgba(0, 0, 0, 0.3)',
    },
});

export const progressBarStyles = {
    position: 'absolute',
    top: 0,
    left: 0,
    right: 0,
    height: 4,
    backgroundColor: 'primary.main',
};

export const cardContentStyles = {
    p: { xs: 3, sm: 4 },
};

export const contentWrapperStyles = (isSuccessStep: boolean) => ({
    minHeight: 400,
    display: 'flex',
    flexDirection: 'column',
    justifyContent: isSuccessStep ? 'center' : 'flex-start',
    px: { xs: 1, sm: 2 },
});
