import React from "react";
import "./App.css";

export const Mock2 = ({mockData2=[]}) => {
  return (
 
        <div >
              <table>
      <tbody>
       {mockData2.map((data, key) => {
          return (
            
        <tr key={key}>
          <td>
            {data.id}
          </td>
          <td>
           {data.company}
          </td>
          <td>
            {data.location}
          </td>
         
        </tr>
    
          );
        })}
          </tbody>
    </table> 
            </div> 
  );
};