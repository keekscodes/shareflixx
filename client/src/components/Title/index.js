import React from "react";
import "./style.css";


function Title({children}) {
  return (
    <h1 className="title"> {children}</h1>
  );
}

export default Title;


// function Title(props) {
//     return <h1 className="title">{props.children}</h1>;
//   }

//   export default Title;
