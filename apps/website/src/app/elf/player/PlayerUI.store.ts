import { PlayerRequest, PlayerTermsResponse } from '@app/api';
import { createStore, setProps, withProps } from '@ngneat/elf';
import { map, Observable } from 'rxjs';

import { persistStore } from '../Elf';
import { useObservableMemo } from '@app/ui';

export interface UI {
    player: {
        term: {
            result?: PlayerTermsResponse;
            request?: PlayerRequest;
        };
    };
}
const store = createStore(
    { name: 'ui' },
    withProps<UI>({ player: { term: {} } })
);
persistStore(store, { isTemp: true });

type PartialUpdate<S> = (state: S) => Partial<S>;

function partialUpdate<S, K extends keyof S>(
    key: K,
    update: PartialUpdate<S[K]>
): (state: S) => S {
    return (state: S) => {
        const partialVal: S[K] = state[key];
        return {
            ...state,
            [key]: {
                ...partialVal,
                ...update(partialVal),
            },
        };
    };
}
// Update
export function setUI2<K extends keyof UI, K2 extends keyof UI[K]>(
    key: K,
    key2: K2,
    update: PartialUpdate<UI[K][K2]>
) {
    setUI(key, partialUpdate(key2, update));
}

export function setUI<K extends keyof UI>(
    key: K,
    update: PartialUpdate<UI[K]>
) {
    store.update(setProps(partialUpdate(key, update)));
}

// UseHooks
type IfIndexable<V, K extends undefined | keyof V> = K extends undefined
    ? V
    : V[Exclude<K, undefined>];

export function useUI<K extends undefined | keyof UI>(
    key: K
): IfIndexable<UI, K> {
    const initialState = (key
        ? store.getValue()[key]
        : store.getValue()) as unknown as IfIndexable<UI, K>;

    return useObservableMemo(
        () =>
            store.pipe(
                map((val: UI): IfIndexable<UI, K> => {
                    return (key ? val[key] : val) as unknown as IfIndexable<
                        UI,
                        K
                    >;
                })
            ),
        [key, store],
        initialState
    );
}
