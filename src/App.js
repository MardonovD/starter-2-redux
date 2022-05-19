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
            <th>Name</th>
            <th>Surname</th>
            <th>Actions</th>
          </tr>
        </thead>
      </table>
    </div>
  );
};

export default App;
