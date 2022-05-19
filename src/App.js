import React from "react";
import { useState, useRef } from "react";
import PostForm from "./components/PostForm";
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

  const createPost = (newPost) => {
    setPosts([...posts, newPost]);
  };

  const removePost = (post) => {
    setPosts(posts.filter((s) => s.id !== post.id));
  };

  return (
    <div className="app w-50 mx-auto ">
      <PostForm createPost={createPost} />
      {posts.length ? (
        <TableList
          remove={removePost}
          posts={posts}
          title={"Favourite Programming Language.."}
        />
      ) : (
        <h6 className="my-3 text-center " style={{ color: "red" }}>
          You should add some Post
        </h6>
      )}
    </div>
  );
};

export default App;
