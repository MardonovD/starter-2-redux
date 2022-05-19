import React from "react";
import { useState } from "react";
const ToggleBtn = () => {
  const [toggleBtn, setToogleBtn] = useState(false);
  return (
    <>
      <button
        onClick={() => setToogleBtn(!toggleBtn)}
        className="btn btn-secondary my-2"
      >
        Toogle Btn
      </button>
      {toggleBtn ? <p className="lead">Youtube Content</p> : null}
    </>
  );
};

export default ToggleBtn;
