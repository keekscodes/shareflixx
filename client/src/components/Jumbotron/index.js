import React from "react";

function Jumbotron({children}) {
  return (
    <div
      style={{
        width: "100%",
        clear: "both",
        padding: "5%",
        marginLeft: "0em",
        //  marginTop:"2%",
        textAlign: "center",
        backgroundColor: "steelblue"
      }}
      className="jumbotron"
    >
      {children}
    </div>
  );
}

export default Jumbotron;
