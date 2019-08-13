import React from "react";
import "./style.css";


function Footer() {
  return (
    <footer className="page-footer" style={{"background": "rgb(2, 17, 49)",
    "color": "rgb(235, 235, 235)", "height": "auto"}}>


        <div class="container">
            <div class="row">
                <div class="col l4  s6">
                    <h6 class="white-text">Developers <i class="fab fa-github" style={{"font-size": "20px", "color":"#ffffff"}}></i> </h6>
                    <span style={{"font-size": "13px"}}>
                        <a class="grey-text text-lighten-3" href="" target="_blank">Kimberly | </a> 
                        <a class="grey-text text-lighten-3" href="" target="_blank">Laura | </a>  
                        <a class="grey-text text-lighten-3" href="" target="_blank">Mike | </a>
                        <a class="grey-text text-lighten-3" href="" target="_blank">Sajad | </a>
                        <a class="grey-text text-lighten-3" href="" target="_blank">Steven</a>


                    </span>
                </div>
            </div>
        </div>
        <div className="footer-copyright">
            <div style={{"margin" : "0 auto"}}>
                © 2019 APP NAME
            </div>
        </div>
    </footer>
  );
}

export default Footer;
