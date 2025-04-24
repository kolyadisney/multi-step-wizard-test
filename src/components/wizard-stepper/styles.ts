import type { SxProps, Theme } from '@mui/material';
import type { MotionProps } from 'framer-motion';

export const stepLabelStyles: SxProps<Theme> = {
    cursor: 'pointer',
    '& .MuiStepLabel-labelContainer': {
        mt: 1,
    },
    '& .MuiStepLabel-label': {
        display: { xs: 'none', sm: 'block' },
    },
};

export const stepLabelTypographyStyles: SxProps<Theme> = {
    fontWeight: 'inherit',
    color: 'inherit',
};

export const stepperWrapperStyles: SxProps<Theme> = {
    width: '100%',
    mb: 4,
    mt: 1,
};

export const stepTitleStyles: SxProps<Theme> = {
    mb: 3,
    display: { xs: 'block', sm: 'none' },
    color: 'text.secondary',
    fontSize: 16,
};

export const labelAnimationProps: MotionProps = {
    initial: { opacity: 0.7 },
    transition: { duration: 0.3 },
};

export const getLabelAnimationStyle = (isActive: boolean, theme: Theme) => ({
    opacity: 1,
    color: isActive ? theme.palette.primary.main : theme.palette.text.secondary,
});
