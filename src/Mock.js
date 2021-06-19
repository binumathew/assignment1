import React from 'react';
import "./App.css";
export const Mock = (props) => {
  return (
    <div >
      <table>
        <tbody>
          { props.data && props.data.map((data, key) => {
             let keys = Object.keys(data)
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
          })
          }
        </tbody>
      </table>
    </div>
  );
};