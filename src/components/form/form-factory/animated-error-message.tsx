import { AnimatePresence, motion } from 'framer-motion';
import { Box, Typography } from '@mui/material';

import { errorContainerStyles, errorMessageStyles } from './styles';
import type { AnimatedErrorMessageProps } from './types';

export const AnimatedErrorMessage = ({ error }: AnimatedErrorMessageProps) => {
    return (
        <Box sx={errorContainerStyles}>
            <AnimatePresence mode="wait">
                {error && (
                    <motion.div
                        initial={{ opacity: 0, y: -10 }}
                        animate={{ opacity: 1, y: 0 }}
                        exit={{ opacity: 0, y: -10 }}
                        transition={{ duration: 0.2 }}
                    >
                        <Typography variant="caption" color="error" sx={errorMessageStyles}>
                            {error}
                        </Typography>
                    </motion.div>
                )}
            </AnimatePresence>
        </Box>
    );
};
