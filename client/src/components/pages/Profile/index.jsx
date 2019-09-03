// import React, {Component} from "react";
// import Navigation from "../../Navigation/index";
// // @material-ui/icons

// // core components
// import "./style.css"

// class Profile extends Component {
//   render() {
//     return (
//       <div>
//         <div className="container-fluid">
//           <Navigation />
//           <div className="row border-bottom">
//             <div className="col-6">
//               <h2 className="text-left">Manage Your Account</h2>
//             </div>
//           </div>
//           <div className="row border-bottom">
//             <div className="col-6">
//               <ul className="nav nav-tabs">
//                 <li className="nav-item">
//                   <a className="nav-link active" href="/overview">Settings</a>
//                 </li>
//                 <li className="nav-item">
//                   <a className="nav-link" href="/profile">Profile</a>
//                 </li>
//               </ul>
//             </div>
//           </div>
//         </div>

//       </div>
//     )
//   }
// }

// export default Profile;

import React, { Component } from "react";
import Navigation from "../../Navigation/index";
import { MDBContainer, MDBTabPane, MDBTabContent, MDBNav, MDBNavItem, MDBNavLink } from "mdbreact";
import "./style.css";

  class Profile extends Component {
    state = {
      activeItem: "1"
    };

    toggle = tab => e => {
      if (this.state.activeItem !== tab) {
        this.setState({
          activeItem: tab
        });
      }
    };

    render() {
      return (
        <div className="container-fluid">
          <Navigation />
        <MDBContainer>
          <section>
            <h2 className="border-bottom border-dark">Manage Your Account</h2>
          </section>
        <MDBNav className="nav-tabs mt-5">
          <MDBNavItem >
            <MDBNavLink to="#" active={this.state.activeItem === "1"} onClick={this.toggle("1")} role="tab" >
              Settings
            </MDBNavLink>
          </MDBNavItem>
          <MDBNavItem>
            <MDBNavLink to="#" active={this.state.activeItem === "2"} onClick={this.toggle("2")} role="tab" >
              Profile
            </MDBNavLink>
          </MDBNavItem>
        </MDBNav>
        <MDBTabContent activeItem={this.state.activeItem} >
          <MDBTabPane tabId="1" role="tabpanel">
            <p className="mt-2">
              Lorem ipsum dolor sit amet, consectetur adipisicing elit.
              Nihil odit magnam minima, soluta doloribus reiciendis
              molestiae placeat unde eos molestias. Quisquam aperiam,
              pariatur. Tempora, placeat ratione porro voluptate odit
              minima.
            </p>
          </MDBTabPane>
          <MDBTabPane tabId="2" role="tabpanel">
            <p className="mt-2">
              Quisquam aperiam, pariatur. Tempora, placeat ratione porro
              voluptate odit minima. Lorem ipsum dolor sit amet,
              consectetur adipisicing elit. Nihil odit magnam minima,
              soluta doloribus reiciendis molestiae placeat unde eos
              molestias.
            </p>
            <p>
              Quisquam aperiam, pariatur. Tempora, placeat ratione porro
              voluptate odit minima. Lorem ipsum dolor sit amet,
              consectetur adipisicing elit. Nihil odit magnam minima,
              soluta doloribus reiciendis molestiae placeat unde eos
              molestias.
            </p>
          </MDBTabPane>
          <MDBTabPane tabId="3" role="tabpanel">
            <p className="mt-2">
              Quisquam aperiam, pariatur. Tempora, placeat ratione porro
              voluptate odit minima. Lorem ipsum dolor sit amet,
              consectetur adipisicing elit. Nihil odit magnam minima,
              soluta doloribus reiciendis molestiae placeat unde eos
              molestias.
            </p>
          </MDBTabPane>
        </MDBTabContent>
      </MDBContainer>
      </div>
    );
  }
}
export default Profile;