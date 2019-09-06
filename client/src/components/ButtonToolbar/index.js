import React from "react";

function ButtonToolbar({children}) {
  return (
    <div
      style={{
        margin: "5%"
      }}
      className="btn-toolbar" role="toolbar"
    >
      {children}
    </div>
  );
}

export default ButtonToolbar;
