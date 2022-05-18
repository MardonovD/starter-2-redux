import { useState } from "react";
import "./style/styles.css";
function App() {
  const [data, setData] = useState(0);

  function inc() {
    setData((prev) => prev + 1);
  }
  function dec() {
    setData((prev) => prev - 1);
  }

  return (
    <div className="app w-50 mx-auto">
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
