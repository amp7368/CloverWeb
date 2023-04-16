import { UUID } from 'crypto';

export interface PlayerUUID {
    player: string;
    uuid: UUID;
}
export interface PlayerManyUUIDResponse {
    players: PlayerUUID[];
}
