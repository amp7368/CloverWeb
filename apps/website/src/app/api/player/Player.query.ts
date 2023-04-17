import { PlayerTermsResponse } from '@app/api';

import { links } from '../../global/links';
import { AppQuery } from '../AppQuery';
import { PlayerRaidResponse, PlayerRequest } from '@app/api';

class PlayerQuery extends AppQuery {
    terms(request: PlayerRequest) {
        return this.post(links.playerTerm.url())
            .payload(request)
            .build<PlayerTermsResponse>();
    }
    raids(request: PlayerRequest) {
        return this.post(links.playerRaid.url())
            .payload(request)
            .build<PlayerRaidResponse>();
    }
}
export const playerQuery = new PlayerQuery();
