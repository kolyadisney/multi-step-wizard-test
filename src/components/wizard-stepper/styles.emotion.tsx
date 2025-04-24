import { StepConnector } from '@mui/material';
import { styled } from '@mui/material/styles';

// Custom connector between steps
export const CustomStepConnector = styled(StepConnector)(({ theme }) => ({
    [`& .MuiStepConnector-line`]: {
        borderColor: theme.palette.divider,
        borderTopWidth: 2,
        borderRadius: 1,
        marginTop: 5,
    },
    '&.Mui-active .MuiStepConnector-line': {
        borderColor: theme.palette.success.main,
    },
    '&.Mui-completed .MuiStepConnector-line': {
        borderColor: theme.palette.success.main,
    },
}));

// Custom step icon
export const CustomStepIconRoot = styled('div')<{
    ownerState: { active?: boolean; completed?: boolean; error?: boolean };
}>(({ theme, ownerState }) => ({
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    width: 36,
    height: 36,
    borderRadius: '50%',
    backgroundColor: ownerState.active
        ? theme.palette.primary.main
        : theme.palette.action.disabledBackground,
    color: ownerState.active ? theme.palette.primary.contrastText : theme.palette.text.secondary,
    border: 'none',
    boxShadow: ownerState.active
        ? `0 0 0 3px ${theme.palette.primary.main}${theme.palette.mode === 'light' ? '33' : '4D'}`
        : `0 0 0 3px ${theme.palette.secondary.main}${theme.palette.mode === 'light' ? '33' : '4D'}`,
    transition: theme.transitions.create(['background-color', 'box-shadow'], {
        duration: theme.transitions.duration.short,
    }),
    zIndex: 1,
    ...(ownerState.completed && {
        backgroundColor: theme.palette.success.main,
        color: theme.palette.success.contrastText,
        border: 'none',
    }),
}));
