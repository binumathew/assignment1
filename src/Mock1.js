import React from "react";
import "./App.css";

export const Mock1 = ({mockData1=[]}) => {
    return ( 
        <div >
       
              <table>
      <tbody>
       {mockData1.map((data, key) => {
          return (
            
        <tr key={key}>
          <td>
            {data.id}
          </td>
          <td>
           {data.name}
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