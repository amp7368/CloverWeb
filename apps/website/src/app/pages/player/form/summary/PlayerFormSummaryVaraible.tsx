import { AppTypography } from '@app/ui';
import { Box, Stack } from '@mui/material';
import { ReactNode } from 'react';
import { PlayerFormSummaryText } from './PlayerFormSummaryUtil';

export interface PlayerFormSummaryVariableProps {
    name: string;
    value: unknown;
    format?: (val: string) => string;
    append?: string;
    prepend?: string;
}

export function FormResultVariable(props: PlayerFormSummaryVariableProps) {
    let value = `${props.value ?? '?'}`;
    if (props.format) value = props.format(value);

    return (
        <Stack alignItems="flex-end" direction="row">
            <PlayerFormSummaryText>{props.prepend}</PlayerFormSummaryText>
            <PlayerFormSummaryText sx={{ textDecorationLine: 'underline' }}>
                {value}
            </PlayerFormSummaryText>
            <PlayerFormSummaryText>{props.append}</PlayerFormSummaryText>
        </Stack>
    );
}
function FormResultVariableName(props: { name: string }) {
    return (
        <Stack
            marginLeft="1px"
            height="100%"
            direction="row"
            alignItems="center"
        >
            <AppTypography
                sx={{ fontStyle: 'italic' }}
                color="text.primary"
                variant="subtitle2"
            >
                ({props.name})
            </AppTypography>
        </Stack>
    );
}

export function PlayerFormSummaryRow({ children }: { children: ReactNode[] }) {
    return (
        <Stack alignItems="bottom" flexWrap="wrap" spacing={1} direction="row">
            {children}
        </Stack>
    );
}
