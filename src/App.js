import { useState } from "react";

import "./style/styles.css";
function App() {
  return (
    <div className="app w-50 mx-auto">
      <table className="table table-striped">
        <thead>
          <tr>
            <th>#</th>
            <th>Name</th>
            <th>Surname</th>
            <th>Action</th>
          </tr>
        </thead>
      </table>
    </div>
  );
}

export default App;
