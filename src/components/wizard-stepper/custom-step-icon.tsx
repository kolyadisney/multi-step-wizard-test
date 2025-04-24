import {
    AssignmentTurnedIn,
    AccountCircle,
    Key,
    Home,
    Check,
    CheckCircle,
} from '@mui/icons-material';
import React from 'react';

import { CustomStepIconRoot } from './styles.emotion';
import type { CustomStepIconProps } from './types';

const stepsIcons: { [index: string]: React.ReactElement } = {
    'User Details': <AccountCircle fontSize="small" />,
    'Address Details': <Home fontSize="small" />,
    'User Account': <Key fontSize="small" />,
    Review: <AssignmentTurnedIn fontSize="small" />,
    Success: <CheckCircle fontSize="small" />,
};

export const CustomStepIcon = React.forwardRef<HTMLDivElement, CustomStepIconProps>(
    (props, ref) => {
        const { active, completed, icon, label } = props;

        return (
            <CustomStepIconRoot ref={ref} ownerState={{ active, completed }}>
                {completed ? <Check fontSize="small" /> : stepsIcons[label] || <span>{icon}</span>}
            </CustomStepIconRoot>
        );
    },
);

CustomStepIcon.displayName = 'CustomStepIcon';
