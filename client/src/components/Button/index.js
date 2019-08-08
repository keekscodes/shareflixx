import React from "react";

function Button({children}) {
  return (
    <button className="btn btn-primary" type="button">
      {children}
    </button>
  );
}

export default Button;