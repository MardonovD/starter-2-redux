import React from "react";
import { useState } from "react";
import BtnIncrDecr from "./components/BtnIncrDecr";
import "./style/styles.css";
const App = () => {
  const [toggleBtn, setToogleBtn] = useState(false);
  const [value, setValue] = useState("dos");

  return (
    <>
      <div className="app w-50 mx-auto">
        <BtnIncrDecr /> 
        <hr />
        <p>Value:{value}</p>
        <input
          type="text"
          className="form-control"
          value={value}
          onChange={(event) => setValue(event.target.value)}
        />
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
