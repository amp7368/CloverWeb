import { Header } from '@app/ui';

import logo from '../../assets/common/logo.png';
import { bgColor } from '../global/appTheme';
import { urls } from '../global/routes';

export function AppHeader() {
    return (
        <Header
            home={urls.Home}
            links={Object.values(urls)}
            bgcolor={bgColor}
            logo={logo}
        />
    );
}
