import { UUID } from 'crypto';
import { RaidDelta, RaidName } from './BaseResponse';

export interface PlayerRaidTerm {
    retrieved: Date;
    raids: Record<RaidName, PlayerRaidCharactersTerm>;
}
export interface PlayerRaidCharactersTerm {
    characters: Record<UUID, RaidDelta>;
    total: RaidDelta;
}
