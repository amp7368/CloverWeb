import { AppPaper, AppTypography } from '@app/ui';
import { Stack } from '@mui/material';

import { PlayerTermSnapshot } from './PlayerTermSnapshot';
import { useUI } from '../../../elf/player/PlayerUI.store';
import { ArrowForward } from '@mui/icons-material';
import { PlaySessionSnapshot, PlayerTermsResponse } from '@app/api';
import { ReactNode } from 'react';
import { PlayerTermChart } from './PlayerTermChart';

function PlayerPageResultWrapper(props: { children?: ReactNode }) {
    return (
        <AppPaper
            sx={{ maxWidth: '50%', minWidth: '50rem', flexGrow: 1, padding: 2 }}
        >
            {props.children}
        </AppPaper>
    );
}
function isZeroResponse(start: PlaySessionSnapshot) {
    return Object.values(start).every((n) => n === 0);
}
export function PlayerPageResult() {
    const term = useUI('player').term;
    const result = term.result;
    const request = term.request;

    if (!result || !request) {
        return (
            <PlayerPageResultWrapper>
                <AppTypography variant="h4">No Data to Display</AppTypography>
            </PlayerPageResultWrapper>
        );
    }
    const playerFirstRecorded = isZeroResponse(result.startingSnapshot);
    return (
        <PlayerPageResultWrapper>
            <Stack alignItems="center">
                <AppTypography variant="h3">{request.player}</AppTypography>
                <PlayerPageSnapshot {...result} />
            </Stack>
            <PlayerTermChart
                terms={result.terms}
                playerFirstRecorded={playerFirstRecorded}
            />
        </PlayerPageResultWrapper>
    );
}

function PlayerPageSnapshot(response: PlayerTermsResponse) {
    return (
        <Stack
            direction="row"
            justifyContent="space-evenly"
            alignItems="center"
        >
            <PlayerTermSnapshot
                title="Start"
                date={response.requestedStart}
                {...response?.startingSnapshot}
            />
            <ArrowForward sx={{ width: '7.5rem', height: '7.5rem' }} />
            <PlayerTermSnapshot
                title="End"
                date={response.requestedEnd}
                {...response?.endingSnapshot}
            />
        </Stack>
    );
}
