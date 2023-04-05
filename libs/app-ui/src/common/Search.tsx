import { Stack, TextField } from '@mui/material';
import { Search as SearchEmote } from '@mui/icons-material';
import { ChangeEvent } from 'react';
export interface SearchProps {
    onChange: (val: string) => void;
}
export function Search(props: SearchProps) {
    return (
        <Stack direction="row" alignItems="center">
            <TextField
                variant="filled"
                label={'Filter'}
                onChange={(event: ChangeEvent<HTMLInputElement>) =>
                    props.onChange(event.currentTarget.value)
                }
            />
            <SearchEmote
                sx={{
                    scale: '-1 1',
                    left: -50,
                    position: 'relative',
                }}
                fontSize="large"
            />
        </Stack>
    );
}
