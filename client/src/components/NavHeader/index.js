import React, { Component } from "react";
import { Link } from "react-router-dom";
import Logo from '../Logo/logo.jpg';
import Button from "../Button";
import Navbar from 'react-bootstrap/Navbar';
import Nav from 'react-bootstrap/Nav';

// import "./style.css";

class NavHeader extends Component {
  render() {
    return (
<Nav className="justify-content-end" activeKey="/home">
<Nav.Item>
  <Nav.Link href="/home">Active</Nav.Link>
</Nav.Item>
<Nav.Item>
  <Nav.Link eventKey="link-1">Link</Nav.Link>
</Nav.Item>
<Nav.Item>
  <Nav.Link eventKey="link-2">Link</Nav.Link>
</Nav.Item>
<Nav.Item>
  <Nav.Link eventKey="disabled" disabled>
    Disabled
  </Nav.Link>
</Nav.Item>
</Nav>
    )
 }
 }

 export default NavHeader;


// class Navbar extends Component {
//   state = {
//     open: false,
//     width: window.innerWidth
//   };

//   updateWidth = () => {
//     const newState = { width: window.innerWidth };

//     if (this.state.open && newState.width > 991) {
//       newState.open = false;
//     }

//     this.setState(newState);
//   };

//   toggleNav = () => {
//     this.setState({ open: !this.state.open });
//   };

//   componentDidMount() {
//     window.addEventListener("resize", this.updateWidth);
//   }

//   componentWillUnmount() {
//     window.removeEventListener("resize", this.updateWidth);
//   }

//   render() {
//     return (
//       <nav className="navbar navbar-expand-lg navbar-light bg-light mb-2">
//         <Link className="navbar-brand" to="/">
//         <img src={Logo} alt="App logo" height="50px" width="100px" />
//         </Link>
//         <button
//           onClick={this.toggleNav}
//           className="navbar-toggler"
//           data-toggle="collapse"
//           data-target="#navbarNav"
//           aria-controls="navbarNav"
//           aria-expanded="false"
//           aria-label="Toggle navigation"
//         >
//           <span className="navbar-toggler-icon" />
//         </button>
//         <div className={`${this.state.open ? "" : "collapse "}navbar-collapse`} id="navbarNav">
//           <ul className="navbar-nav">
//             <li className="nav-item">
//               <Link
//                 onClick={this.toggleNav}
//                 className={window.location.pathname === "/" ? "nav-link active" : "nav-link"}
//                 to="/"
//               >
               
//               </Link>
//             </li>
//             <li className="nav-item pullRight">
//               <Link
//                 onClick={this.toggleNav}
//                 className={window.location.pathname === "/saved" ? "nav-link active" : "nav-link"}
//                 to="/saved"
//               >
//                 <i className="fa fa-user-ninja"></i>
//                 {/* <Button>Logout</Button> */}
//               </Link>
//             </li>
//           </ul>
//         </div>
//       </nav>
//     );
//   }
// }

