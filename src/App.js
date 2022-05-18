import { useState } from "react";
import "./style/styles.css";
function App() {
  const [data, setData] = useState(0);
  const [toggleBtn, setToogleBtn] = useState(false);

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
      <button
        onClick={() => setToogleBtn(!toggleBtn)}
        className="btn btn-secondary"
      >
        Toogle Btn
      </button>
      {toggleBtn ? <p className="lead"> Youtube Content</p> : null}
    </div>
  );
}

export default App;
