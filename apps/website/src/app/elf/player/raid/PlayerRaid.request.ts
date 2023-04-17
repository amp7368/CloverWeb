import { PlayerRequest } from '@app/api';
import { debounceTime, distinct, Subject } from 'rxjs';
import { playerQuery } from '../../../api/player/Player.query';
import { setUI, setUI2 } from '../PlayerUI.store';

const requestsStream = new Subject<PlayerRequest>();
requestsStream.pipe(distinct(), debounceTime(200)).subscribe(fetchPlayerRaid);

export function requestPlayerRaid(request: PlayerRequest) {
    if (!Object.values(request).find((val) => !val))
        requestsStream.next(request);
}

function fetchPlayerRaid(request: PlayerRequest) {
    playerQuery.raids(request).then((result) => {
        if (result.isOk) {
            setUI2('player', 'raid', (state) => ({ result, request }));
        } else {
            console.error(result.status, result.message);
        }
    });
}
