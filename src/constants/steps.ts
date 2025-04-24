import type { ComponentType } from 'react';

import {
    StepUserDetails,
    StepAddressDetails,
    StepAccountDetails,
    StepReview,
    StepSuccess,
} from '@/components';
interface StepProps {
    label: string;
    component: ComponentType;
    hideNavigation?: boolean;
}

export const STEPS: StepProps[] = [
    {
        label: 'User Details',
        component: StepUserDetails,
    },
    {
        label: 'Address Details',
        component: StepAddressDetails,
    },
    {
        label: 'User Account',
        component: StepAccountDetails,
    },
    {
        label: 'Review',
        component: StepReview,
    },
    {
        label: 'Success',
        component: StepSuccess,
        hideNavigation: true,
    },
];
