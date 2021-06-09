import './App.css';

import { mockDataFromJson1 } from "./MOCK_DATA-5.js";
import { mockDataFromJson2 } from "./MOCK_DATA-6.js";
import { Mock1 } from "./Mock1";
import { Mock2 } from "./Mock2";
import React, { useState, useEffect } from 'react';


function App() {
    const [mockData1, setMockData1] = useState();
    const [mockData2, setMockData2] = useState();
    const [inputValue, setInputValue] = useState();
    useEffect(() => {
        setMockData1(mockDataFromJson1)
        setMockData2(mockDataFromJson2)
    }, []);
    const getUpdatedSearchList = (mockData, regex) => {
     
        return mockData.filter(data => regex.test(data.name) || regex.test(data.location));
    };
    const getUpdatedSearchList2 = (mockData, regex) => {
         
        return mockData.filter(data => regex.test(data.company) || regex.test(data.location));
    };
    const updateInput = async (input) => {
        if (/\s/.test(input) && /".*?"/.test(input) === false) {
            var broad = new RegExp(input.split(" ").join('|'), 'i');
        } else  {
          var removed_quotes = input.replace(/^"(.+(?="$))"$/, '$1')
          var broad = new RegExp('(:?(' + removed_quotes + ')(([^_])|$))', 'i');          
        }
       
        if (input) {
            setInputValue(input);

            setMockData1(getUpdatedSearchList(mockDataFromJson1, broad));
            setMockData2(getUpdatedSearchList2(mockDataFromJson2, broad))
        } else {
            setInputValue(input);
            setMockData1(mockDataFromJson1);
            setMockData2(mockDataFromJson2);
        }

    }
    return (
        <div className="App">
    <input type="text" onChange={(e) => updateInput(e.target.value)} value={inputValue}/>
      <Mock1 mockData1={mockData1}/>
      <Mock2 mockData2={mockData2}/>
    </div>
    );
}

export default App;