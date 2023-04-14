import { PlayerManyUUIDResponse } from '@app/api';

import { links } from '../../global/links';
import { AppQuery } from '../AppQuery';

class PlayerUUIDQuery extends AppQuery {
    manyPlayerUUID(name: string) {
        return this.get(
            links.playerManyUUID.url(name)
        ).build<PlayerManyUUIDResponse>();
    }
}
export const playerUUIDQuery = new PlayerUUIDQuery();
