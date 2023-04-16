import {
    debounceTime,
    distinct,
    distinctUntilChanged,
    Subject,
    tap,
} from 'rxjs';

import { getPlayerUUID, setPlayerUUID } from './PlayerUUID.store';
import { playerUUIDQuery } from '../../api/uuid/PlayerUUID.query';

const requestsStream = new Subject<string>();
requestsStream.pipe(distinct(), debounceTime(200)).subscribe(fetchPlayerUUID);

export function requestPlayerUUID(name: string) {
    if (name) requestsStream.next(name);
}

function fetchPlayerUUID(name: string) {
    const playerUUID = getPlayerUUID(name);
    if (playerUUID) return;

    playerUUIDQuery.manyPlayerUUID(name).then((response) => {
        if (response.isOk) {
            setPlayerUUID(response.players);
        } else {
            console.error(response.status, response.message);
        }
    });
}
