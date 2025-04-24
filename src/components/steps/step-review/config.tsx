import { AccountCircle, Home, Person } from '@mui/icons-material';

import type { WizardData } from '@/validation';

export const getSections = (formData: Partial<WizardData>) => [
    {
        title: 'Personal Information',
        icon: <Person color="primary" />,
        data: [
            { label: 'First Name', value: formData.firstName },
            { label: 'Last Name', value: formData.lastName },
            { label: 'Email', value: formData.email },
        ],
    },
    {
        title: 'Address Details',
        icon: <Home color="primary" />,
        data: [
            { label: 'Street', value: formData.street },
            { label: 'City', value: formData.city },
            { label: 'State', value: formData.state },
            { label: 'Zip Code', value: formData.zipCode },
        ],
    },
    {
        title: 'Account Information',
        icon: <AccountCircle color="primary" />,
        data: [
            { label: 'Username', value: formData.username },
            { label: 'Password', value: '********' },
        ],
    },
];
