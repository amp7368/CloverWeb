import { UUID } from 'crypto';

import { TermRequest } from './TermRequest';
import { Dayjs } from 'dayjs';

export interface PlayerRequest extends TermRequest {
    player: UUID;
}
export interface PlayerRequestForm
    extends Omit<Partial<PlayerRequest>, 'start' | 'player'> {
    start: Dayjs;
    player: string;
}
