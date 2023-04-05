import { CssBaseline, ThemeProvider } from '@mui/material';
import { LocalizationProvider } from '@mui/x-date-pickers';
import { AdapterDayjs } from '@mui/x-date-pickers/AdapterDayjs';
import { enableElfProdMode } from '@ngneat/elf';
import { StrictMode } from 'react';
import { createRoot } from 'react-dom/client';

import { App } from './app/App';
import { defaultTheme } from './app/global/appTheme';
import { environment } from './environments/environment';

const container = document.getElementById('root') as HTMLElement;

createRoot(container).render(
    <StrictMode>
        <ThemeProvider theme={defaultTheme}>
            <CssBaseline />
            <LocalizationProvider dateAdapter={AdapterDayjs}>
                <App />
            </LocalizationProvider>
        </ThemeProvider>
    </StrictMode>
);
if (environment.production) {
    enableElfProdMode();
}
