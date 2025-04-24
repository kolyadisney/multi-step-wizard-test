import type { SxProps, Theme } from '@mui/material';

export const containerStyles: SxProps<Theme> = {
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    justifyContent: 'center',
    minHeight: '400px',
};

export const iconStyles: SxProps<Theme> = {
    fontSize: 80,
    mb: 2,
};

export const titleStyles: SxProps<Theme> = {
    mb: 2,
    fontWeight: 'bold',
};

export const messageStyles: SxProps<Theme> = {
    mb: 4,
};

export const buttonStyles: SxProps<Theme> = {
    minWidth: 200,
    borderRadius: 2,
};

export const containerAnimation = {
    initial: { scale: 0.5, opacity: 0 },
    animate: { scale: 1, opacity: 1 },
    transition: { duration: 0.5 },
};

export const iconAnimation = {
    initial: { scale: 0 },
    animate: { scale: 1 },
    transition: { type: 'spring', stiffness: 200 },
};
