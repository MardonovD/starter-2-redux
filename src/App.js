import React from "react";
import { useState } from "react";
import TableItem from "./components/TableItem";

import "./style/styles.css";
const App = () => {
  return (
    <div className="app w-50 mx-auto ">
      <table className=" table table-striped ">
       
        <TableItem />
      </table>
    </div>
  );
};

export default App;
