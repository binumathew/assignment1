import React, { useState, useEffect } from 'react';
import "./App.css";
import { getData } from "./functions/GetData";
import { getSearchList } from "./functions/FilterData";
export const Mock = ({ filename }) => {
  const [mockData, setMockData] = useState([]);
  const [keys, setKeys] = useState([]);
  useEffect(() => {
    getData(filename).then(result => {  setMockData(result);console.log(result); })
    if(mockData.length > 0)
    {
      let first = mockData[0];
      let keys = Object.keys(first)
      setKeys(keys);
    }
}, []);
  return (
    <div >
      <table>
        <tbody>
          { mockData.length > 0 && mockData.map((data, key) => {
            return (
              <tr key={key}>
                <td>
                  {data[keys[0]]}
                </td>
                <td>
                  {data[keys[1]]}
                </td>
                <td>
                  {data[keys[2]]}
                </td>
              </tr>
            );
          })}
        </tbody>
      </table>
    </div>
  );
};