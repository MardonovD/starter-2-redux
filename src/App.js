import React from "react";
import { useState } from "react";
import BtnIncrDecr from "./components/BtnIncrDecr";
import InputValue from "./components/InputValue";
import "./style/styles.css";
const App = () => {
  const [toggleBtn, setToogleBtn] = useState(false);

  return (
    <>
      <div className="app w-50 mx-auto">
        <BtnIncrDecr />

        <hr />
        <InputValue />
        <button
          onClick={() => setToogleBtn(!toggleBtn)}
          className="btn btn-secondary"
        >
          Toogle Btn
        </button>
        {toggleBtn ? <p className="lead">Youtube Content</p> : null}
      </div>
    </>
  );
};

export default App;
