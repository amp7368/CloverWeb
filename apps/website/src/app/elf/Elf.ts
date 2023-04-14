import { getRegistry, Store } from '@ngneat/elf';
import {
    localStorageStrategy,
    persistState,
    sessionStorageStrategy,
} from '@ngneat/elf-persist-state';

export function persistStore(store: Store, options?: { isTemp?: boolean }) {
    const storage = options?.isTemp
        ? sessionStorageStrategy
        : localStorageStrategy;
    persistState(store, { storage });
}
export function resetStores() {
    getRegistry().forEach((store) => store.reset());
    console.log('RESET STORES');
}
