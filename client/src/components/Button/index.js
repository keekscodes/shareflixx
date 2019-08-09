import React from "react";
import "./style.css";

function Button({children}) {
  return (
    <button className="btn btn-primary" type="button">
      {children}
    </button>
  );
}

export default Button;