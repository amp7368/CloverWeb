import { Stack, Box, useTheme } from '@mui/material';

import { PlayerPageForm } from './form/PlayerPageForm';
import { PlayerTermResult } from './term/PlayerTermResult';
import { ControlDrawer, Header } from '@app/ui';
import { PlayerRaidResult } from './raid/PlayerRaidResult';

export function PlayerPage() {
    const sidebarColor = useTheme().palette.background.sidebar;
    const appbarHeight = '2.5rem';
    const drawerWidth = '25rem';
    return (
        <>
            <ControlDrawer width={drawerWidth} bgcolor={sidebarColor}>
                <PlayerPageForm />
            </ControlDrawer>
            <Stack
                marginLeft={drawerWidth}
                padding={2}
                marginTop={appbarHeight}
                spacing={2}
            >
                <PlayerTermResult />
                <PlayerRaidResult />
            </Stack>
        </>
    );
}
