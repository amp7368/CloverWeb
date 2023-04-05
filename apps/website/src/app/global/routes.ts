import { HomePage } from '../pages/home/HomePage';
import { PlayerPage } from '../pages/player/PlayerPage';

export const urls = {
    Home: {
        title: 'Home',
        route: '/',
        fullRoute: '',
        render: HomePage,
    },
    Player: {
        title: 'Player',
        route: '/player',
        fullRoute: '',
        render: PlayerPage,
    },
};
export interface UrlRoute {
    title: string;
    route: string;
    fullRoute: string;
    render: () => JSX.Element;
    divisions?: Record<string, UrlRoute>;
}
function remap(urls: Record<string, UrlRoute>, url: string) {
    for (const key in urls) {
        const subroute: string = url + urls[key].route;
        urls[key].fullRoute = subroute;
        const divisions = urls[key].divisions;
        if (divisions) remap(divisions, subroute);
    }
}

remap(urls, '');
