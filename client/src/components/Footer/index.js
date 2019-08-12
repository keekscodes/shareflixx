import React from "react";
import "./style.css";


function Footer() {
  return (
    <footer class="page-footer" style={{"background": "rgb(2, 17, 49)",
    "color": "rgb(235, 235, 235)", "height": "auto"}}>
        <div class="container">
            <div class="row">
                <div class="col l4  s6">
                    <h6 class="white-text">Developers <i class="fab fa-github" style={{"font-size": "20px", "color":"#ffffff"}}></i> </h6>
                    <span style={{"font-size": "13px"}}>
                        <a class="grey-text text-lighten-3" href="" target="_blank">team member 1 | </a> 
                        <a class="grey-text text-lighten-3" href="" target="_blank">member 2 | </a>  
                        <a class="grey-text text-lighten-3" href="" target="_blank">member 3 | </a>
                        <a class="grey-text text-lighten-3" href="" target="_blank">member 4 | </a>
                        <a class="grey-text text-lighten-3" href="" target="_blank">member 5</a>
                    </span>
                </div>
            </div>
        </div>
        <div class="footer-copyright">
            <div class="container">
                © 2019 APP NAME
            </div>
        </div>
    </footer>
  );
}

export default Footer;
