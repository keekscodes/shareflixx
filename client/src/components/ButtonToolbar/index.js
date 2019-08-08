import React from "react";

function Jumbotron({ children }) {
  return (
    <div className="btn-toolbar" role="toolbar">
      {children}
    </div>
  );
}

export default ButtonToolbar;