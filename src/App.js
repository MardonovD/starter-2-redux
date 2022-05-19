import React from "react";
import { useState } from "react";

import "./style/styles.css";
const App = () => {
  return (
    <div className="app w-50 mx-auto ">
      <table className=" table table-striped ">
        <thead>
          <tr>
            <th>#</th>
            <th>Programming Language</th>
            <th>Stack</th>
            <th>Actions</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td>1 </td>
            <td>JavaScript</td>
            <td>Mern Stack</td>
            <td>
              <button className="btn btn-outline-danger">delete</button>
            </td>
          </tr>
        </tbody>
      </table>
    </div>
  );
};

export default App;
