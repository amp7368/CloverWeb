import { UUID } from 'crypto';
import { RaidName, RaidSnapshot } from './BaseResponse';

export interface PlayerRaidSnapshot {
    retrieved: Date;
    raids: Record<RaidName, PlayerRaidCharactersSnapshot>;
    total: RaidSnapshot;
}
export interface PlayerRaidCharactersSnapshot {
    characters: Record<UUID, RaidSnapshot>;
    total: RaidSnapshot;
}
