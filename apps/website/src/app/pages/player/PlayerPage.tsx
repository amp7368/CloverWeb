import { Stack } from '@mui/material';

import { PlayerPageForm } from './form/PlayerPageForm';
import { PlayerPageResult } from './result/PlayerPageResult';

export function PlayerPage() {
    return (
        <Stack
            width="100%"
            padding={5}
            direction="row"
            flexWrap="wrap"
            justifyContent="flex-start"
        >
            <PlayerPageForm />
            <PlayerPageResult />
        </Stack>
    );
}
