import { AppTypography } from '@app/ui';
import { TypographyProps } from '@mui/material';
import { ReactNode } from 'react';

export function PlayerFormSummaryText(props: {
    children: ReactNode;
    sx?: TypographyProps['sx'];
    color?: string;
}) {
    return (
        <AppTypography
            sx={props.sx}
            color={props.color ?? 'text.primary'}
            variant="h5"
        >
            {props.children}
        </AppTypography>
    );
}
