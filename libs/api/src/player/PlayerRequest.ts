import { Dayjs } from 'dayjs';

import { TermRequest } from '../TermRequest';
import { UUID } from 'crypto';

export interface PlayerRequest extends TermRequest {
    player: string | UUID;
}
export interface PlayerRequestForm
    extends Omit<PlayerRequest, 'start' | 'player'> {
    start: Dayjs;
    player: string;
}
