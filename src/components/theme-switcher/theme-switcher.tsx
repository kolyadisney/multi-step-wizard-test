import { NightsStay, WbSunny } from '@mui/icons-material';
import { useThemeMode } from '@/hooks/useThemeMode';
import { Button } from '@mui/material';

export const ThemeSwitcher = () => {
    const { themeMode, toggleTheme } = useThemeMode();

    return (
        <Button variant="outlined" onClick={toggleTheme}>
            {themeMode === 'light' ? (
                <NightsStay sx={{ color: 'white' }} />
            ) : (
                <WbSunny sx={{ color: 'white' }} />
            )}
        </Button>
    );
};
