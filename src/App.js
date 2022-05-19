import React from "react";
import { useState } from "react";
import Counter from "./components/Counter";
import InputValue from "./components/InputValue";
import ToggleBtn from "./components/ToggleBtn";
import "./style/styles.css";
const App = () => {
  return (
    <>
      <div className="app w-50 mx-auto">
        <Counter />

        <hr />
        <InputValue />
        <ToggleBtn />
      </div>
    </>
  );
};

export default App;
