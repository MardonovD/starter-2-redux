import React from "react";
import { useState } from "react";
import TableHeader from "./components/TableHeader";
import TableItem from "./components/TableItem";

import "./style/styles.css";
const App = () => {
  const [posts, setPosts] = useState([
    {
      id: 1,
      title: "JavaScript",
      stack: "Mern-Stack",
    },
    {
      id: 2,
      title: "Python",
      stack: "Full-Stach",
    },
    {
      id: 3,
      title: "C#",
      stack: "Cyber",
    },
    {
      id: 4,
      title: "Goo",
      stack: "backend",
    },
  ]);
  return (
    <div className="app w-50 mx-auto ">
      <table className=" table table-striped ">
        <TableHeader />
        <tbody>
          {posts.map((post) => (
            <TableItem post={post} />
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default App;
