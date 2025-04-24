import type { PaletteMode, ThemeOptions } from '@mui/material';
import { createTheme } from '@mui/material';

const getDesignTokens = (mode: PaletteMode) => ({
    palette: {
        mode,
        ...(mode === 'light'
            ? {
                  primary: {
                      main: '#4f46e5',
                      light: '#818cf8',
                      dark: '#3730a3',
                      contrastText: '#ffffff',
                  },
                  secondary: {
                      main: '#6b7280',
                      light: '#9ca3af',
                      dark: '#4b5563',
                      contrastText: '#ffffff',
                  },
                  background: {
                      default: '#f9fafb',
                      paper: '#ffffff',
                  },
                  text: {
                      primary: '#111827',
                      secondary: '#6b7280',
                  },
                  success: {
                      main: '#059669',
                      light: '#34d399',
                      dark: '#047857',
                  },
                  error: {
                      main: '#dc2626',
                      light: '#f87171',
                      dark: '#b91c1c',
                  },
              }
            : {
                  primary: {
                      main: '#818cf8',
                      light: '#a5b4fc',
                      dark: '#4f46e5',
                      contrastText: '#030712',
                  },
                  secondary: {
                      main: '#9ca3af',
                      light: '#d1d5db',
                      dark: '#6b7280',
                      contrastText: '#030712',
                  },
                  background: {
                      default: '#030712',
                      paper: '#111827',
                  },
                  text: {
                      primary: '#f9fafb',
                      secondary: '#d1d5db',
                  },
                  success: {
                      main: '#34d399',
                      light: '#6ee7b7',
                      dark: '#059669',
                  },
                  error: {
                      main: '#f87171',
                      light: '#fca5a5',
                      dark: '#dc2626',
                  },
              }),
    },
    components: {
        MuiButton: {
            defaultProps: {
                disableElevation: true,
            },
            styleOverrides: {
                root: {
                    borderRadius: 8,
                    padding: '10px 20px',
                    fontSize: '0.875rem',
                },
                containedPrimary: {
                    '&:hover': {
                        boxShadow: '0 4px 12px rgba(59, 130, 246, 0.25)',
                    },
                },
                containedSecondary: {
                    '&:hover': {
                        boxShadow: '0 4px 12px rgba(100, 116, 139, 0.25)',
                    },
                },
                outlined: {
                    borderWidth: 2,
                    '&:hover': {
                        borderWidth: 2,
                    },
                },
            },
        },
        MuiCard: {
            styleOverrides: {
                root: {
                    boxShadow:
                        mode === 'light'
                            ? '0 4px 20px rgba(0, 0, 0, 0.05)'
                            : '0 4px 20px rgba(0, 0, 0, 0.3)',
                    borderRadius: 16,
                },
            },
        },
        MuiTextField: {
            defaultProps: {
                variant: 'outlined',
                fullWidth: true,
                margin: 'normal',
            },
            styleOverrides: {
                root: {
                    '& .MuiOutlinedInput-root': {
                        borderRadius: 8,
                        '&.Mui-focused fieldset': {
                            borderWidth: 2,
                        },
                    },
                },
            },
        },
        MuiOutlinedInput: {
            styleOverrides: {
                root: {
                    '&:hover .MuiOutlinedInput-notchedOutline': {
                        borderColor: mode === 'light' ? '#3b82f6' : '#60a5fa',
                    },
                },
            },
        },
        MuiStepConnector: {
            styleOverrides: {
                line: {
                    borderColor: mode === 'light' ? '#e2e8f0' : '#334155',
                    borderTopWidth: 2,
                },
            },
        },
        MuiStepLabel: {
            styleOverrides: {
                root: {
                    '&.Mui-active': {
                        color: mode === 'light' ? '#3b82f6' : '#60a5fa',
                    },
                    '&.Mui-completed': {
                        color: mode === 'light' ? '#10b981' : '#34d399',
                    },
                },
                label: {
                    fontSize: '0.875rem',
                    fontWeight: 600,
                    '&.Mui-active': {
                        color: mode === 'light' ? '#3b82f6' : '#60a5fa',
                    },
                    '&.Mui-completed': {
                        color: mode === 'light' ? '#10b981' : '#34d399',
                    },
                },
            },
        },
        MuiPaper: {
            styleOverrides: {
                root: {
                    backgroundImage: 'none',
                },
            },
        },
    },
    typography: {
        fontFamily: '"Inter", "Roboto", "Helvetica", "Arial", sans-serif',
        h1: {
            fontWeight: 800,
            fontSize: '2.5rem',
        },
        h2: {
            fontWeight: 700,
            fontSize: '2rem',
        },
        h3: {
            fontWeight: 700,
            fontSize: '1.5rem',
        },
        h4: {
            fontWeight: 700,
            fontSize: '1.25rem',
        },
        h5: {
            fontWeight: 600,
            fontSize: '1.1rem',
        },
        h6: {
            fontWeight: 600,
            fontSize: '1rem',
        },
        button: {
            textTransform: 'none' as const,
            fontWeight: 600,
        },
        subtitle1: {
            fontSize: '1rem',
            fontWeight: 500,
        },
        subtitle2: {
            fontSize: '0.875rem',
            fontWeight: 500,
        },
    },
    shape: {
        borderRadius: 12,
    },
});

export const getTheme = (mode: PaletteMode) => createTheme(getDesignTokens(mode) as ThemeOptions);
