import React from "react";

const MyInput = React.forwardRef((props) => {
  return <input {...props} type="text" />;
});

export default MyInput;
