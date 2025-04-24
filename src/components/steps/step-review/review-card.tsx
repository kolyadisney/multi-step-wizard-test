import { Card, CardContent, Divider, Stack, Typography } from '@mui/material';

import {
    cardStyles,
    contentStackStyles,
    dividerStyles,
    headerStackStyles,
    itemStackStyles,
} from './styles';
import type { ReviewCardProps } from './types';

export const ReviewCard = ({ title, icon, data }: ReviewCardProps) => (
    <Card variant="outlined" sx={cardStyles}>
        <CardContent>
            <Stack direction="row" alignItems="center" spacing={1} sx={headerStackStyles}>
                {icon}
                <Typography variant="h6" component="h2">
                    {title}
                </Typography>
            </Stack>
            <Divider sx={dividerStyles} />
            <Stack sx={contentStackStyles}>
                {data.map(({ label, value }) => (
                    <Stack key={label} sx={itemStackStyles}>
                        <Typography color="text.secondary" variant="body2">
                            {label}
                        </Typography>
                        <Typography variant="body2">{value || '-'}</Typography>
                    </Stack>
                ))}
            </Stack>
        </CardContent>
    </Card>
);
