import { PlaySessionSnapshot } from '@app/api';
import { AppTypography } from '@app/ui';
import { Card, Stack } from '@mui/material';
import dayjs from 'dayjs';
import { ReactNode } from 'react';

import { AppDateFormat } from '../../../global/dateFormat';

export type PlayerTermSnapshotProps = PlaySessionSnapshot & {
    title: string;
    date: Date;
};
export function PlayerTermSnapshot({
    title,
    date,
    ...props
}: PlayerTermSnapshotProps) {
    const dateFormat = AppDateFormat.day;
    return (
        <Stack margin={4} spacing={1} alignItems="center">
            <AppTypography variant="h4">{title}</AppTypography>
            <Card sx={{ padding: 3 }}>
                <Stack>
                    <AppTypography variant="h4">
                        {dayjs(date).format(dateFormat)}
                    </AppTypography>
                    {Object.entries(props).map(([name, value]) => (
                        <TermSnapshotVariable
                            key={name}
                            name={name}
                            value={value}
                        />
                    ))}
                </Stack>
            </Card>
        </Stack>
    );
}
interface TermSnapshotVariableProps {
    name: string;
    value: ReactNode;
}
export function TermSnapshotVariable(props: TermSnapshotVariableProps) {
    return (
        <Stack direction="row" spacing={1} justifyContent="space-between">
            <AppTypography variant="h5">{props.name}</AppTypography>
            <AppTypography variant="h5">{props.value}</AppTypography>
        </Stack>
    );
}
