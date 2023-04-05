import { CssBaseline, ThemeProvider } from '@mui/material';
import { enableElfProdMode } from '@ngneat/elf';
import { StrictMode } from 'react';
import { createRoot } from 'react-dom/client';
import { BrowserRouter } from 'react-router-dom';

import App from './app/App';
import { defaultTheme } from './app/global/appTheme';
import { environment } from './environments/environment';

const container = document.getElementById('root') as HTMLElement;
createRoot(container).render(
    <StrictMode>
        <ThemeProvider theme={defaultTheme}>
            <CssBaseline />
            <BrowserRouter>
                <App callback={callback} />
            </BrowserRouter>
        </ThemeProvider>
    </StrictMode>
);

function callback() {
    if (environment.production) {
        enableElfProdMode();
    }
}
