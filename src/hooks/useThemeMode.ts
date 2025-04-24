import { useMediaQuery } from '@mui/material';
import useWizardStore from '@/store/wizard-store';


import { useEffect } from 'react';

export const useThemeMode = () => {
    const { themeMode, setThemeMode } = useWizardStore();
    const prefersDarkMode = useMediaQuery('(prefers-color-scheme: dark)');

    useEffect(() => {
        const savedTheme = localStorage.getItem('theme');
        if (savedTheme) {
            setThemeMode(savedTheme as 'light' | 'dark');
        } else if (prefersDarkMode) {
            setThemeMode('dark');
        }
    }, [prefersDarkMode, setThemeMode]);

    const toggleTheme = () => {
        const newTheme = themeMode === 'light' ? 'dark' : 'light';
        setThemeMode(newTheme);
        localStorage.setItem('theme', newTheme);
    };

    return {
        themeMode,
        toggleTheme,
    };
};
