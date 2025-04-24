import { Stack, Typography } from '@mui/material';

import { getSections } from './config';
import { ReviewCard } from './review-card';
import { titleStyles } from './styles';
import useWizardStore from '@/store/wizard-store';
export const StepReview = () => {
    const { formData } = useWizardStore();

    return (
        <>
            <Typography variant="h5" sx={titleStyles}>
                Review your information
            </Typography>
            <Stack spacing={2}>
                {getSections(formData).map((section) => (
                    <ReviewCard key={section.title} {...section} />
                ))}
            </Stack>
        </>
    );
};
