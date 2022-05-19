import React from "react";
import { useState, useRef } from "react";
import TableHeader from "./components/TableHeader";
import TableItem from "./components/TableItem";
import TableList from "./components/TableList";
import MyButton from "./components/UI/BUTTON/MyButton";
import MyInput from "./components/UI/input/MyInput";

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

  const [title, setTitle] = useState("");
  const [stack, setStack] = useState("");

  const addPost = (e) => {
    e.preventDefault();
    const newPost = {
      id: Date.now(),
      title,
      stack,
    };
    setPosts([...posts, newPost]);
  };

  return (
    <div className="app w-50 mx-auto ">
      <form>
        <h5 className="text-center">Create your first post</h5>
        <MyInput
          type="text"
          className="form-control"
          placeholder="Programming Language..."
          value={title}
          onChange={(e) => setTitle(e.target.value)}
        />
        <MyInput
          type="text"
          className="form-control my-3"
          placeholder="Enter your favourite stack"
          value={stack}
          onChange={(e) => setStack(e.target.value)}
        />

        <MyButton onClick={addPost}>Add Post</MyButton>
      </form>
      <TableList posts={posts} title={"Favourite Programming Language.."} />
    </div>
  );
};

export default App;
