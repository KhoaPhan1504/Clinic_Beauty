import { createRoot } from 'react-dom/client';
// import { BrowserRouter } from 'react-router-dom';
import App from './App.tsx';
import 'process/browser';
import { StrictMode } from 'react';
import { Provider } from 'react-redux';
import { store } from './services/store.ts';

createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <Provider store={store}>
      <App />
    </Provider>
  </StrictMode>,
);
