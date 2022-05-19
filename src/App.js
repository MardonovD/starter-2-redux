import React from "react";

const App = () => {
  let count = 0;
  function inc() {
    count += 1;
    console.log(count);
  }
  function dec() {
    count -= 1;
    console.log(count);
  }
  return (
    <>
      <h3>Count:{count}</h3>
      <button onClick={inc} className="btn btn-success">
        INCR
      </button>
      <button onClick={dec} className="btn btn-danger">
        DECR
      </button>
    </>
  );
};

export default App;
