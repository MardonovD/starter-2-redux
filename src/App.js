import React from "react";
import { useState } from "react";
import TableHeader from "./components/TableHeader";
import TableItem from "./components/TableItem";
import TableList from "./components/TableList";

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
      <TableList posts={posts} />
    </div>
  );
};

export default App;
