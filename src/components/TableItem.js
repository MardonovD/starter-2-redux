import React from "react";

const TableItem = () => {
  return (
    <>
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
    </>
  );
};

export default TableItem;
