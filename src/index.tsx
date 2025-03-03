import { DataProvider } from './app/providers/DataProvider';
import { createRoot } from 'react-dom/client';
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
    <DataProvider>
        <App />
    </DataProvider>,
);
