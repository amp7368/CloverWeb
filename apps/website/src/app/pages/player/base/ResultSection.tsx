import { AppTypography } from '@app/ui';
import { ArrowForward } from '@mui/icons-material';
import { Stack } from '@mui/material';
import { ReactNode } from 'react';

import { ResultSectionWrapper } from './ResultSectionWrapper';

export interface ResultSectionProps {
    title: string;
    player: string;
    controller?: ReactNode;
    startSnapshot: ReactNode;
    endingSnapshot: ReactNode;
    chart: ReactNode;
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
                    controller={props.controller}
                    start={props.startSnapshot}
                    end={props.endingSnapshot}
                />
            </Stack>
            {props.chart}
        </ResultSectionWrapper>
    );
}

interface PlayerSnapshotSectionProps {
    controller?: ReactNode;
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
            {props.controller}
            {props.start}
            <ArrowForward sx={{ width: '7.5rem', height: '7.5rem' }} />
            {props.end}
        </Stack>
    );
}
