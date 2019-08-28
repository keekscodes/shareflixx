import React from "react";
import "./style.css";


function Footer() {
  return (
    <footer className="page-footer" style={{
      "background": "rgb(2, 17, 49)",
      "color": "rgb(235, 235, 235)", "height": "auto"
    }}>


      {/* <div className="container"> */}
        <div className="row">
          <div className="col l4  s6">
            <h6 className="white-text">Developers <i className="fab fa-github"
                                                     style={{fontSize: "17px", color: "#ffffff"}}/></h6>
            <span style={{fontSize: "13px"}}>
                        <a className="grey-text text-lighten-3" href="/show">Kimberly | </a>
                        <a className="grey-text text-lighten-3" href="/show">Laura | </a>
                        <a className="grey-text text-lighten-3" href="/show">Mike | </a>
                        <a className="grey-text text-lighten-3" href="https://github.com/sajadgzd">Sajad | </a>
                        <a className="grey-text text-lighten-3" href="/show">Steven</a>
                    </span>
          </div>
        </div>
      {/* </div> */}
      <div className="footer-copyright">
        <div style={{"margin": "0 auto"}}>
          © {new Date().getFullYear()} ShareFlix
        </div>
      </div>
    </footer>
  );
}

export default Footer;
