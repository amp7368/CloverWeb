import { addTimeResolution, PlayerRequestForm } from '@app/api';
import { Card, Stack } from '@mui/material';
import { ReactNode } from 'react';
import { useWatch } from 'react-hook-form';

import { PlayerFormSummaryText } from './PlayerFormSummaryUtil';
import { Dayjs } from 'dayjs';
import {
    FormResultVariable,
    PlayerFormSummaryRow,
} from './PlayerFormSummaryVaraible';

export function PlayerFormSummaryWrapper(props: { children: ReactNode[] }) {
    return (
        <Card sx={{ padding: 3 }}>
            <Stack>{props.children}</Stack>
        </Card>
    );
}
const dateFormat = 'MM/DD/YYYY';
export function PlayerFormSummary() {
    const values = useWatch<PlayerRequestForm>();
    const start: Dayjs | undefined = values.start as Dayjs | undefined;
    return (
        <PlayerFormSummaryWrapper>
            <PlayerFormSummaryRow>
                <PlayerFormSummaryText>The view on</PlayerFormSummaryText>
                <FormResultVariable value={values.player} name="Player" />
            </PlayerFormSummaryRow>
            <PlayerFormSummaryRow>
                <PlayerFormSummaryText>begins on</PlayerFormSummaryText>
                <FormResultVariable
                    value={start?.format(dateFormat)}
                    name="Start Date"
                />
            </PlayerFormSummaryRow>
            <PlayerFormSummaryRow>
                <PlayerFormSummaryText>and will continue</PlayerFormSummaryText>
                <FormResultVariable
                    value={values.termsAfter}
                    format={(t) => `${t}`}
                    name="Terms After"
                />
                <FormResultVariable
                    value={values.timeResolution}
                    format={(t) => `${t}(s)`.toLocaleLowerCase()}
                    name="Time Resolution"
                />
            </PlayerFormSummaryRow>
            <PlayerFormSummaryRow>
                <PlayerFormSummaryText>onwards until,</PlayerFormSummaryText>
                <PlayerFormSummaryText color="text.primary">
                    {addTimeResolution(
                        start,
                        values.timeResolution,
                        values.termsAfter
                    ).format(dateFormat)}
                </PlayerFormSummaryText>
            </PlayerFormSummaryRow>
        </PlayerFormSummaryWrapper>
    );
}
