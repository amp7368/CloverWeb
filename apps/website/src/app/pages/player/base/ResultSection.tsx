import { AppTypography } from '@app/ui';
import { ArrowForward } from '@mui/icons-material';
import { Stack } from '@mui/material';
import { ReactNode } from 'react';

import { ResultSectionWrapper } from './ResultSectionWrapper';

export interface ResultSectionProps {
    title: string;
    player: string;
    chart: ReactNode;
    startSnapshot: ReactNode;
    endingSnapshot: ReactNode;
}
export function ResultSection(props: ResultSectionProps) {
    return (
        <ResultSectionWrapper>
            <Stack direction="row" justifyContent="space-between">
                <AppTypography variant="h2">{props.title}</AppTypography>
                <AppTypography variant="h3">{props.player}</AppTypography>
            </Stack>
            <Stack alignItems="center">
                <PlayerSnapshotSection
                    start={props.startSnapshot}
                    end={props.endingSnapshot}
                />
            </Stack>
            {props.chart}
        </ResultSectionWrapper>
    );
}

interface PlayerSnapshotSectionProps {
    start: ReactNode;
    end: ReactNode;
}
function PlayerSnapshotSection(props: PlayerSnapshotSectionProps) {
    return (
        <Stack
            direction="row"
            justifyContent="space-evenly"
            alignItems="center"
        >
            {props.start}
            <ArrowForward sx={{ width: '7.5rem', height: '7.5rem' }} />
            {props.end}
        </Stack>
    );
}
