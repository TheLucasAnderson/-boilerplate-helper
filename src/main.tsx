import React from 'react';
import * as ReactDOM from 'react-dom/client';
import { ThemeProvider } from 'styled-components';
import { Navigation } from './routes.tsx';
import ResetStyles from './styles/reset.ts';
import { server, worker } from './mocks';
import theme from './styles/theme';
import '../i18n.config.ts';

const init = async () => {
  if (typeof window === "undefined") {
    server.listen();
  } else {
    worker.start();
  }
}

init();

ReactDOM.createRoot(document.getElementById('root') as HTMLElement).render(
  <React.StrictMode>
    <ThemeProvider theme={theme}>
      <ResetStyles />
      <Navigation />
    </ThemeProvider>
  </React.StrictMode>,
);
