import { PlaySessionSnapshot } from '@app/api';
import { AppTypography } from '@app/ui';
import { Card, Stack } from '@mui/material';
import dayjs from 'dayjs';
import { ReactNode } from 'react';

import { AppDateFormat } from '../../../global/dateFormat';

export type PlayerSnapshotProps<T> = {
    title?: string;
    isStart?: boolean;
    date: Date;
    data: T;
    mapData?: (data: T) => [string, ReactNode][];
};
export function PlayerSnapshot<T extends Object>(
    props: PlayerSnapshotProps<T>
) {
    const dateFormat = AppDateFormat.day;
    let title: string;
    if (props.title) title = props.title;
    else {
        title = props.isStart ? 'Start' : 'End';
    }
    const mapData = props.mapData ?? ((data: T) => Object.entries(data));
    return (
        <Stack margin={2} alignItems="center">
            <AppTypography variant="h5">{title}</AppTypography>
            <Card sx={{ padding: 3 }}>
                <Stack>
                    <AppTypography variant="h5">
                        {dayjs(props.date).format(dateFormat)}
                    </AppTypography>
                    {mapData(props.data).map(([name, value]) => (
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
            <AppTypography variant="h5" noWrap>
                {props.name}
            </AppTypography>
            <AppTypography variant="h5">{props.value}</AppTypography>
        </Stack>
    );
}
