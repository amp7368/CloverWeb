import { PlayerTermsResponse, PlaySessionSnapshot } from '@app/api';
import { AppPaper, AppTypography } from '@app/ui';
import { ArrowForward } from '@mui/icons-material';
import { Stack } from '@mui/material';
import { ReactNode, useState } from 'react';

import { useUI } from '../../../elf/player/PlayerUI.store';
import { PlayerTermChart } from './PlayerTermChart';
import { PlayerSnapshot } from '../base/PlayerSnapshot';
import { ResultSection, ResultSectionProps } from '../base/ResultSection';
import { ResultSectionWrapper } from '../base/ResultSectionWrapper';
import { PlayerTermResultControl } from './PlayerTermResultControl';

function PlayerTermResultWrapper(props: { children?: ReactNode }) {
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
export function PlayerTermResult() {
    const term = useUI('player').term;
    const result = term.result;
    const request = term.request;
    const [controlState, setControlState] =
        useState<keyof PlaySessionSnapshot>('playtime');

    if (!result || !request) {
        return <ResultSectionWrapper />;
    }
    const isPlayerFirstRecorded = isZeroResponse(result.startingSnapshot);
    return (
        <ResultSection
            title="Overall"
            player={request.player}
            startSnapshot={
                <PlayerSnapshot
                    isStart={true}
                    date={result.requestedStart}
                    data={result.startingSnapshot}
                />
            }
            controller={
                <PlayerTermResultControl
                    state={controlState}
                    setState={setControlState}
                />
            }
            endingSnapshot={
                <PlayerSnapshot
                    isStart={false}
                    date={result.requestedEnd}
                    data={result.endingSnapshot}
                />
            }
            chart={
                <PlayerTermChart
                    showField={controlState}
                    result={result}
                    playerFirstRecorded={isPlayerFirstRecorded}
                    unit={request.timeResolution}
                />
            }
        />
    );
}
