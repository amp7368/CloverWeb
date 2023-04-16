import { PlayerUUID } from '@app/api';
import { createStore } from '@ngneat/elf';
import {
    upsertEntities,
    getAllEntities,
    withEntities,
    selectEntities,
    selectAllEntities,
    selectAllEntitiesApply,
} from '@ngneat/elf-entities';

import { persistStore } from '../Elf';
import { useObservableMemo } from '@app/ui';
import { useMemo } from 'react';
import Fuse from 'fuse.js';

const store = createStore(
    { name: 'playerUUID' },
    withEntities<PlayerUUID, 'uuid'>({ idKey: 'uuid' })
);
persistStore(store, { isTemp: true });

export function setPlayerUUID(playerUUIDs: PlayerUUID[]) {
    store.update(upsertEntities(playerUUIDs.filter((e) => e)));
}

export function getPlayerUUID(username: string): PlayerUUID | undefined {
    return store
        .query(getAllEntities())
        .find((e) => e.player.toLowerCase() === username.toLowerCase());
}
export function usePlayerUUIDList(username: string | undefined): PlayerUUID[] {
    const players: PlayerUUID[] = useObservableMemo(
        () => store.pipe(selectAllEntities()),
        [username],
        []
    );
    return useMemo(() => {
        if (!username) return [];
        const fuse = new Fuse<PlayerUUID>(players, { keys: ['player'] });
        return fuse.search(username, { limit: 50 });
    }, [players, username]).map((result) => result.item);
}
