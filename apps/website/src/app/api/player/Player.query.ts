import { PlayerTermsResponse } from '@app/api';

import { links } from '../../global/links';
import { AppQuery } from '../AppQuery';
import { PlayerRequest } from '@app/api';

class PlayerQuery extends AppQuery {
    terms(request: PlayerRequest) {
        return this.post(links.playerTerm.url())
            .payload(request)
            .build<PlayerTermsResponse>();
    }
}
export const playerQuery = new PlayerQuery();
