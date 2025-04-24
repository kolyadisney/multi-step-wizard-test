import { ThemeProvider } from '@mui/material/styles';
import { CssBaseline } from '@mui/material';

import { Wizard } from './components/wizard/wizard';
import { useThemeMode } from './hooks/useThemeMode';
import { getTheme } from './theme/theme';
import { Header } from './components';

function App() {
    const { themeMode } = useThemeMode();

    return (
        <ThemeProvider theme={getTheme(themeMode)}>
            <CssBaseline />
            <Header title="Wizard Form" />
            <Wizard />
        </ThemeProvider>
    );
}

export default App;
