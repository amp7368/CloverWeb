import { UUID } from 'crypto';
import { RaidDelta, RaidSnapshot } from './BaseResponse';
import { PlayerRaidTerm } from './TermResponse';
import { PlayerRaidSnapshot } from './SnapshotResponse';

export interface PlayerRaidResponse {
    requestedStart: Date;
    requestedEnd: Date;
    terms: PlayerRaidTerm[];
    startingSnapshot: PlayerRaidSnapshot;
    endingSnapshot: PlayerRaidSnapshot;
}
