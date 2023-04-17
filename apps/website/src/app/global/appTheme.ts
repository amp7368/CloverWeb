import { createTheme, ThemeOptions } from '@mui/material';
export const defaultThemeOptions: ThemeOptions = {
    palette: {
        mode: 'light',
        primary: {
            main: '#01579b',
        },
        secondary: {
            main: '#F27405',
        },
        background: {
            default: '#014040',
            paper: '#BBBBBB',
            sidebar: '#a5b1a5',
        },
        text: {
            primary: '#000000',
            secondary: '#000000',
        },
        action: {
            active: '#01579b',
        },
        divider: '#BDBDBD',
    },
};
export const defaultTheme = createTheme(defaultThemeOptions);

export const headerColor = '#689F38';
defaultTheme.palette.augmentColor({ color: { main: headerColor } });
