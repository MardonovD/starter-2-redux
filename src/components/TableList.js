import React from "react";
import TableHeader from "./TableHeader";
import TableItem from "./TableItem";
const TableList = ({ posts }) => {
  return (
    <>
      <h5 className="text-center">Favourite Programming Language...</h5>
      <table className=" table table-striped ">
        <TableHeader />
        <tbody>
          {posts.map((post) => (
            <TableItem post={post} key={post.id} />
          ))}
        </tbody>
      </table>
    </>
  );
};

export default TableList;