import AppRouter from './providers/router/ui/AppRouter';
import { memo } from 'react';

const App = memo(() => (
    <div className="app">
        <AppRouter />
    </div>
));

export default App;
