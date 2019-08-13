import React from "react";
import "./style.css";


function Footer() {
  return (
    <footer className="page-footer" style={{"background": "rgb(2, 17, 49)",
    "color": "rgb(235, 235, 235)", "height": "auto"}}>
        <div className="container">
            <div className="row">
                <div className="col l4  s6">
                    <h6 className="white-text">Developers <i className="fab fa-github" style={{fontSize: "20px", color:"#ffffff"}}></i> </h6>
                    <span style={{fontSize: "13px"}}>
                        <a className="grey-text text-lighten-3" href="" target="_blank">team member 1 | </a> 
                        <a className="grey-text text-lighten-3" href="" target="_blank">member 2 | </a>  
                        <a className="grey-text text-lighten-3" href="" target="_blank">member 3 | </a>
                        <a className="grey-text text-lighten-3" href="" target="_blank">member 4 | </a>
                        <a className="grey-text text-lighten-3" href="" target="_blank">member 5</a>
                    </span>
                </div>
            </div>
        </div>
        <div className="footer-copyright">
            <div className="container">
                © 2019 APP NAME
            </div>
        </div>
    </footer>
  );
}

export default Footer;
