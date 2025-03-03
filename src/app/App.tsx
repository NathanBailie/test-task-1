import { memo } from 'react';
import { Table } from '@/features/Table';

const App = memo(() => {
    let a;

    return (
        <div className="app">
            <Table />
        </div>
    );
});

export default App;
