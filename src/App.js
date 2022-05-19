import React from "react";
import { useState } from "react";
import BtnIncrDecr from "./components/BtnIncrDecr";
import InputValue from "./components/InputValue";
import ToggleBtn from "./components/ToggleBtn";
import "./style/styles.css";
const App = () => {
  return (
    <>
      <div className="app w-50 mx-auto">
        <BtnIncrDecr />

        <hr />
        <InputValue />
        <ToggleBtn />
      </div>
    </>
  );
};

export default App;
