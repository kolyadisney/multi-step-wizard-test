import React from "react";
import { AppBar, Toolbar, Typography } from '@mui/material';

import type { SxProps, Theme } from '@mui/material';
import { ThemeSwitcher } from '@/components';
import type { HeaderProps } from './types';


export const Header: React.FC<HeaderProps> = ({ title }) => {
    return (
        <AppBar position="static" component="header">
            <Toolbar sx={toolbarStyles}>
                <Typography variant="h6">{title}</Typography>
                <ThemeSwitcher />
            </Toolbar>
        </AppBar>
    );
};

const toolbarStyles: SxProps<Theme> = {
    justifyContent: 'space-between',
    alignItems: 'center',
};
