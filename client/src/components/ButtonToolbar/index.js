import React from "react";

function ButtonToolbar({children}) {
  return (
    <div className="btn-toolbar" role="toolbar">
      {children}
    </div>
  );
}

export default ButtonToolbar;
