import React from "react";

const MyButton = (props) => {
  return <button className="btn  btn-primary w-100">{props.children}</button>;
};

export default MyButton;
