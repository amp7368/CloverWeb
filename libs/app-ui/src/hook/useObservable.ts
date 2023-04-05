import { useEffect, useState } from 'react';
import { Observable } from 'rxjs';

export function useObservable<T>(observable: Observable<T>, initialState: T) {
    const [state, setState] = useState<T>(initialState);
    useEffect(() => {
        const subscription = observable.subscribe(setState);
        return () => subscription.unsubscribe();
    }, [observable]);

    return state;
}
