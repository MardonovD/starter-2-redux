import React from "react";

const App = () => {
  let count = 0;
  return (
    <>
      <h3>Count:{count}</h3>
      <button onClick={() => (count += 1)} className="btn btn-success">
        INCR
      </button>
      <button onClick={() => (count -= 1)} className="btn btn-danger">
        DECR
      </button>
    </>
  );
};

export default App;
