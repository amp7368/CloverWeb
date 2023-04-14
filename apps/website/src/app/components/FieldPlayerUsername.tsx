import { HasUsernameField, PlayerUUID } from '@app/api';
import { Autocomplete, TextField } from '@mui/material';
import { useCallback, useEffect } from 'react';
import { Controller, useFormContext, useWatch } from 'react-hook-form';

import { getPlayerUUID, usePlayerUUIDList } from '../elf/uuid/PlayerUUID.store';

const usernameRegex = /^\w+$/;
export function FieldPlayerUsername() {
    const { control, setValue, getFieldState } =
        useFormContext<HasUsernameField>();
    const { player } = useWatch<HasUsernameField>();
    const validate = (username: string) => !!getPlayerUUID(username ?? '');

    const playerAutoComplete: string[] = usePlayerUUIDList(player).map(
        (uuid: PlayerUUID) => uuid.player
    );
    const fieldState = getFieldState('player');
    const required = true;
    const onChange = useCallback(
        (event: unknown, value: string | null) => {
            if (value)
                setValue('player', value, {
                    shouldDirty: true,
                    shouldValidate: true,
                    shouldTouch: true,
                });
        },
        [setValue]
    );
    return (
        <Controller
            control={control}
            name="player"
            rules={{ required, validate, pattern: usernameRegex }}
            render={({ field }) => (
                <Autocomplete
                    {...field}
                    fullWidth
                    freeSolo
                    options={playerAutoComplete}
                    getOptionLabel={(p: string) => p}
                    onInputChange={onChange}
                    onChange={onChange}
                    renderInput={(params) => (
                        <TextField
                            {...params}
                            label="player"
                            required={required}
                            error={!!fieldState.error}
                            helperText={fieldState.error?.message}
                        />
                    )}
                />
            )}
        />
    );
}
