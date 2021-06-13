import React, { useState } from 'react';
import { Mock } from "./Mock";
import { Search } from "./Search";
function App() {

    return (
        <div className="App">
            <Search/>
            <Mock filename='MOCK_DATA-5.json' />
            <Mock filename='MOCK_DATA-6.json' />
        </div>
    );
}

export default App;