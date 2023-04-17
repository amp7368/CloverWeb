import { PlayerRaidSnapshot } from '@app/api';
import { useState } from 'react';

import { useUI } from '../../../elf/player/PlayerUI.store';
import { PlayerSnapshot } from '../base/PlayerSnapshot';
import { ResultSection } from '../base/ResultSection';
import { ResultSectionWrapper } from '../base/ResultSectionWrapper';
import { RaidChart } from './RaidChart';

export function PlayerRaidResult() {
    const { result, request } = useUI('player').raid;
    if (!result || !request) {
        return <ResultSectionWrapper />;
    }
    return (
        <ResultSection
            title="Raid"
            player={request.player}
            chart={
                <RaidChart
                    unit={request.timeResolution}
                    playerFirstRecorded={
                        result.startingSnapshot.total.raidCount == 0
                    }
                    result={result}
                />
            }
            startSnapshot={
                <PlayerSnapshot
                    isStart
                    date={result.startingSnapshot.retrieved}
                    data={result.startingSnapshot}
                    mapData={mapRaidData}
                />
            }
            endingSnapshot={
                <PlayerSnapshot
                    date={result.endingSnapshot.retrieved}
                    data={result.endingSnapshot}
                    mapData={mapRaidData}
                />
            }
        />
    );
}
function mapRaidData(data: PlayerRaidSnapshot) {
    return Object.entries(data.raids).map(
        ([name, snapshot]): [string, number] => [name, snapshot.total.raidCount]
    );
}
