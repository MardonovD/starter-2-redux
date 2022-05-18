import { useState } from "react";
import TableHeader from "./components/TableHeader";
import TableItem from "./components/TableItem";

import "./style/styles.css";
function App() {
  return (
    <div className="app w-50 mx-auto">
      <table className="table table-striped">
        <TableHeader />
        <tbody>
          <TableItem />
          <TableItem />
          <TableItem />
        </tbody>
      </table>
    </div>
  );
}

export default App;
