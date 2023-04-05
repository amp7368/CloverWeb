import { NotFoundPage } from '../pages/error/NotFoundPage';
import { HomePage } from '../pages/home/HomePage';

export const urls = {
    Home: {
        title: 'Home',
        route: '/',
        fullRoute: '',
        render: HomePage,
    },
    Features: {
        title: 'Deck',
        route: '/deck',
        fullRoute: '',
        render: NotFoundPage,
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
