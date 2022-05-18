import { useState } from "react";

function App() {
  const [data, setData] = useState(0);
  console.log(data);
  function inc() {
    setData((prev) => prev + 1);
  }
  function dec() {
    setData((prev) => prev - 1);
  }

  return (
    <div>
      <h3>Counet: {data}</h3>
      <button onClick={inc} className="btn btn-success">
        INCR
      </button>
      <button onClick={dec} className="btn btn-danger">
        DECR
      </button>
    </div>
  );
}

export default App;
