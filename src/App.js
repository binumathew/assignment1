import React, { useState, useEffect } from 'react';
import { Mock } from "./Mock";
import { Search } from "./Search";
import { getData } from "./functions/GetData";
function App() {
    const fileName = ['MOCK_DATA-5.json', 'MOCK_DATA-6.json'];
    const [mockData, setMockData] = useState([]);
    const [filterMockData, setFilterMockData] = useState([]);
    function handleUpdate(returnData,input) {
       if(input !=='')
       {
        setMockData(returnData)
       }
       else
       {
        setMockData(filterMockData)
       }
    }
    useEffect(() => {
        let result = [];
        for (let i = 0; i < fileName.length; i++) {
            getData(fileName[i]).then(response => { result.push(...response) })
        }
        setMockData(result);
        setFilterMockData(result);
    }, []);
    return (
        <div className="App">
            <Search data={mockData} updateState={handleUpdate} />
            <Mock data={mockData} />
        </div>
    );
}

export default App;