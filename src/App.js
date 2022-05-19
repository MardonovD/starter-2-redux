import React from "react";
import { useState } from "react";
import TableHeader from "./components/TableHeader";
import TableItem from "./components/TableItem";

import "./style/styles.css";
const App = () => {
  return (
    <div className="app w-50 mx-auto ">
      <table className=" table table-striped ">
        <TableHeader />
        <tbody>
          <TableItem
            post={{ id: 1, title: "JavaScript", stack: "Full-Stack" }}
          />
        </tbody>
      </table>
    </div>
  );
};

export default App;
