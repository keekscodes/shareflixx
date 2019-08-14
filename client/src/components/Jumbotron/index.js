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
        // backgroundColor: "steelblue"
        // backgroundColor: "#dc3545"
        // background: "-webkit-linear-gradient(top, #a90329 0%, #8f0222 44%, #6d0019 100%)", /* Chrome10-25,Safari5.1-6 */
            background: "linear-gradient(to bottom, #a90329 0%, #8f0222 44%, #6d0019 100%", /* W3C, IE10+, FF16+, Chrome26+, Opera12+, Safari7+ */
            // filter: "progid:DXImageTransform.Microsoft.gradient(startColorstr='#a90329'", 
            // endColorstr='#6d0019', 
            // GradientType=0 /* IE6-9 */
      }}
      className="jumbotron"
    >
      {children}
    </div>
  );
}

export default Jumbotron;
