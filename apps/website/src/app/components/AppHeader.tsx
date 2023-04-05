import { Header } from '@app/ui';

import logo from '../../assets/common/logo.png';
import { headerColor } from '../global/appTheme';
import { urls } from '../global/routes';

export function AppHeader() {
    return (
        <Header
            home={urls.Home}
            links={Object.values(urls)}
            bgcolor={headerColor}
            logo={logo}
        />
    );
}
