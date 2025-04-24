import React from "react";
import type { SxProps, Theme } from '@mui/material';

export const formStyles: React.CSSProperties = {
    display: 'flex',
    flexDirection: 'column',
    rowGap: '0rem',
    width: '100%',
};

export const fieldContainerStyles: React.CSSProperties = {
    width: '100%',
    display: 'flex',
    flexDirection: 'column',
};

export const errorContainerStyles: SxProps<Theme> = {
    minHeight: '20px',
    position: 'relative',
};

export const errorMessageStyles: SxProps<Theme> = {
    pl: 2,
};
