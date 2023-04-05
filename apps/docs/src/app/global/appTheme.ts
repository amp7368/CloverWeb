import { createTheme, ThemeOptions } from '@mui/material';

export const defaultThemeOptions: ThemeOptions = {
    palette: {
        mode: 'dark',
        primary: {
            main: '#6B83C3',
        },
        secondary: {
            main: '#58B4A9',
        },
        background: {
            default: '#232323',
            paper: '#132435',
        },
        text: {
            primary: '#152324',
            secondary: '#C9F2EE',
        },
        info: { main: '#3E8F89' },
        divider: '#fff',
        grey: { [500]: '#333333' },
    },
};
export const defaultTheme = createTheme(defaultThemeOptions);

export const bgColor = '#232323';
// const element = document.getElementById('root');
// const color = defaultTheme.palette.background.default;
// if (element != null) element.style.backgroundColor = color;
