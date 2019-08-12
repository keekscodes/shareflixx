import React from "react";

function Card({children}) {
  return (
    <div
      style={{
        width: "100%",
        clear: "both",
        //  padding:"5%",
        marginLeft: "0em",
        //  marginTop:"2%",
        //  textAlign: "center",
        backgroundColor: "white"
      }}
      className="card"
    >
      {children}
    </div>
  );
}

export default Card;
