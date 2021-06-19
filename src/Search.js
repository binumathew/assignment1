import React from 'react';
import "./App.css";
import { getSearchList } from "./functions/FilterData";
export const Search = (props) => {
    const updateInput = async (input) =>  {
      let mockData = getSearchList(props.data,input);
      props.updateState(mockData,input);
      };
  return (
    <div >
     <input type="text"  onChange={(e) => updateInput(e.target.value)} />
    </div>
  );
};