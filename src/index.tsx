import { DataProvider } from './app/providers/DataProvider';
import { createRoot } from 'react-dom/client';
import { BrowserRouter } from 'react-router-dom';
import App from '@/app/App';
import '@/app/styles/index.scss';

const container = document.getElementById('root');

if (!container) {
    throw new Error(
        'No root container found. Failed to mount the react application',
    );
}

const root = createRoot(container);

root.render(
    <BrowserRouter>
        <DataProvider>
            <App />
        </DataProvider>
    </BrowserRouter>,
);
