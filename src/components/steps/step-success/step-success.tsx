import { Box, Button, Typography } from '@mui/material';
import { CheckCircle } from '@mui/icons-material';
import { motion } from 'framer-motion';

import {
    buttonStyles,
    containerStyles,
    iconStyles,
    messageStyles,
    titleStyles,
    containerAnimation,
    iconAnimation,
} from './styles';
import useWizardStore from '@/store/wizard-store';

export const StepSuccess = () => {
    const { resetFormData, setActiveStep } = useWizardStore();

    const handleReset = () => {
        resetFormData();
        setActiveStep(0);
    };

    return (
        <Box component={motion.div} {...containerAnimation} sx={containerStyles}>
            <motion.div {...iconAnimation}>
                <CheckCircle color="success" sx={iconStyles} />
            </motion.div>

            <Typography variant="h4" component="h2" sx={titleStyles}>
                Thank You!
            </Typography>

            <Typography variant="body1" color="text.secondary" sx={messageStyles}>
                Your registration has been successfully completed. We're excited to have you on
                board!
            </Typography>

            <Button variant="contained" size="large" onClick={handleReset} sx={buttonStyles}>
                Start New Registration
            </Button>
        </Box>
    );
};
