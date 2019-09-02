import React from "react";

function Embed({children}) {
  return (
    <div className="embed-responsive embed-responsive-16by9">
      {/* <iframe class="embed-responsive-item" title="blank" src="..."></iframe> */}
      {children}
    </div>
  );
}

export default Embed;
