import React from "react";

function Jumbotron({ children }) {
  return (
    <div
      style={{
         width: "100%", 
         clear: "both", 
         marginLeft:"0em",
         marginTop:"20em", 
         textAlign: "center",
         }}
      className="jumbotron"
    >
      {children}
    </div>
  );
}

export default Jumbotron;