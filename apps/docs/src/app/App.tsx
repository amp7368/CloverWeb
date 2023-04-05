import { Stack } from '@mui/material';
import { BrowserRouter, Route, Routes } from 'react-router-dom';

import { AppHeader } from './components/AppHeader';
import { NotFoundPage } from './pages/error/NotFoundPage';
import { UrlRoute, urls } from './global/routes';

interface AppRoutesProps {
    thisRoute: UrlRoute;
    routes: Record<string, UrlRoute>;
}
function AppRoutes(props: AppRoutesProps) {
    if (props.thisRoute.fullRoute === location.pathname) {
        return <props.thisRoute.render />;
    }
    return (
        <Routes>
            {Object.values(props.routes).map((route: UrlRoute) => {
                return (
                    <Route
                        key={route.route}
                        path={route.route + '/*'}
                        errorElement={<NotFoundPage />}
                        element={
                            <AppRoutes
                                thisRoute={route}
                                routes={route.divisions ?? {}}
                            />
                        }
                    />
                );
            })}
        </Routes>
    );
}

export function App(props: { callback: () => void }) {
    const pathname = location.pathname;
    if (pathname.endsWith('/')) {
        history.pushState({}, '', pathname.substring(0, pathname.length - 1));
    }
    return (
        <Stack>
            <AppHeader />
            <AppRoutes thisRoute={urls.Home} routes={urls} />
        </Stack>
    );
}
export default App;
