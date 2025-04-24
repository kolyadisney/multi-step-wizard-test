import { AnimatePresence, motion } from 'framer-motion';
import { Box } from '@mui/material';

import React from 'react';

import { useIsFirstRender } from '@/hooks/useIsFirstRender';

interface AnimatedStepProps {
    children: React.ReactNode;
    stepIndex: number;
}

const fadeVariants = {
    enter: {
        opacity: 0,
    },
    center: {
        opacity: 1,
    },
    exit: {
        opacity: 0,
    },
};

export const AnimatedStep = ({ children, stepIndex }: AnimatedStepProps) => {
    const isFirstRender = useIsFirstRender();

    if (isFirstRender) {
        return <Box>{children}</Box>;
    }

    return (
        <Box position="relative">
            <AnimatePresence mode="wait">
                <motion.div
                    key={stepIndex}
                    variants={fadeVariants}
                    initial="enter"
                    animate="center"
                    exit="exit"
                    transition={{
                        opacity: { duration: 0.2 },
                        ease: 'easeInOut',
                    }}
                >
                    {children}
                </motion.div>
            </AnimatePresence>
        </Box>
    );
};
