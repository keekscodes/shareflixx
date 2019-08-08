import React from "react";
import "./style.css";


function Footer({ children }) {
    return (
      <footer className="page-footer font-small indigo"> {children}</footer>
    );
  }
  
  export default Footer;