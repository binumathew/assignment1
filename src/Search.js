import React from 'react';
import "./App.css";
import { getSearchList } from "./functions/FilterData";
export const Search = () => {
    const updateInput = async (input) =>  {
      
      };
  return (
    <div >
     <input type="text"  onChange={(e) => updateInput(e.target.value)} />
    </div>
  );
};