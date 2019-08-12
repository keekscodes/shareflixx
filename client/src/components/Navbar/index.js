// import React, { Component } from "react";
// import { MDBNavbar, MDBNavbarBrand, MDBNavbarNav, MDBNavItem, MDBNavLink, MDBNavbarToggler, MDBCollapse, MDBDropdown,
// MDBDropdownToggle, MDBDropdownMenu, MDBDropdownItem, MDBIcon } from "mdbreact";
// import { BrowserRouter as Router } from 'react-router-dom';

// class NavbarPage extends Component {
// state = {
//   isOpen: false
// };

// toggleCollapse = () => {
//   this.setState({ isOpen: !this.state.isOpen });
// }

// render() {
//   return (
//     <Router>
//       <MDBNavbar color="default-color" dark expand="md">
//         <MDBNavbarBrand>
//           <strong className="white-text">Navbar</strong>
//         </MDBNavbarBrand>
//         <MDBNavbarToggler onClick={this.toggleCollapse} />
//         <MDBCollapse id="navbarCollapse3" isOpen={this.state.isOpen} navbar>
//           <MDBNavbarNav left>
//             <MDBNavItem active>
//               <MDBNavLink to="#!">Home</MDBNavLink>
//             </MDBNavItem>
//             <MDBNavItem>
//               <MDBNavLink to="#!">Features</MDBNavLink>
//             </MDBNavItem>
//             <MDBNavItem>
//               <MDBNavLink to="#!">Pricing</MDBNavLink>
//             </MDBNavItem>
//             <MDBNavItem>
//               <MDBDropdown>
//                 <MDBDropdownToggle nav caret>
//                   <div className="d-none d-md-inline">Dropdown</div>
//                 </MDBDropdownToggle>
//                 <MDBDropdownMenu className="dropdown-default">
//                   <MDBDropdownItem href="#!">Action</MDBDropdownItem>
//                   <MDBDropdownItem href="#!">Another Action</MDBDropdownItem>
//                   <MDBDropdownItem href="#!">Something else here</MDBDropdownItem>
//                   <MDBDropdownItem href="#!">Something else here</MDBDropdownItem>
//                 </MDBDropdownMenu>
//               </MDBDropdown>
//             </MDBNavItem>
//           </MDBNavbarNav>
//           <MDBNavbarNav right>
//             <MDBNavItem>
//               <MDBNavLink className="waves-effect waves-light" to="#!">
//                 <MDBIcon fab icon="twitter" />
//               </MDBNavLink>
//             </MDBNavItem>
//             <MDBNavItem>
//               <MDBNavLink className="waves-effect waves-light" to="#!">
//                 <MDBIcon fab icon="google-plus-g" />
//               </MDBNavLink>
//             </MDBNavItem>
//             <MDBNavItem>
//               <MDBDropdown>
//                 <MDBDropdownToggle nav caret>
//                   <MDBIcon icon="user" />
//                 </MDBDropdownToggle>
//                 <MDBDropdownMenu className="dropdown-default">
//                   <MDBDropdownItem href="#!">Action</MDBDropdownItem>
//                   <MDBDropdownItem href="#!">Another Action</MDBDropdownItem>
//                   <MDBDropdownItem href="#!">Something else here</MDBDropdownItem>
//                   <MDBDropdownItem href="#!">Something else here</MDBDropdownItem>
//                 </MDBDropdownMenu>
//               </MDBDropdown>
//             </MDBNavItem>
//           </MDBNavbarNav>
//         </MDBCollapse>
//       </MDBNavbar>
//     </Router>
//     );
//   }
// }

// export default NavbarPage;
// import React from "react";
// import { Link } from "react-router-dom";
// import "./style.css";

// class Navbar extends Component {
//   state = {
//     open: false,
//     width: window.innerWidth
//   };

// function NavDropdownExample() {
//   const handleSelect = eventKey => alert(`selected ${eventKey}`);

//   return (
//     <Nav variant="pills" activeKey="1" onSelect={handleSelect}>
//       <Nav.Item>
//         <Nav.Link eventKey="1" href="#/home">
//           NavLink 1 content
//         </Nav.Link>
//       </Nav.Item>
//       <Nav.Item>
//         <Nav.Link eventKey="2" title="Item">
//           NavLink 2 content
//         </Nav.Link>
//       </Nav.Item>
//       <Nav.Item>
//         <Nav.Link eventKey="3" disabled>
//           NavLink 3 content
//         </Nav.Link>
//       </Nav.Item>
//       <NavDropdown title="Dropdown" id="nav-dropdown">
//         <NavDropdown.Item eventKey="4.1">Action</NavDropdown.Item>
//         <NavDropdown.Item eventKey="4.2">Another action</NavDropdown.Item>
//         <NavDropdown.Item eventKey="4.3">Something else here</NavDropdown.Item>
//         <NavDropdown.Divider />
//         <NavDropdown.Item eventKey="4.4">Separated link</NavDropdown.Item>
//       </NavDropdown>
//     </Nav>
//   );
// }

// render(<NavDropdownExample />);


import React, { Component } from "react";
import { Link } from "react-router-dom";
// import "./style.css";

class Navbar extends Component {
  state = {
    open: false,
    width: window.innerWidth
  };

  updateWidth = () => {
    const newState = { width: window.innerWidth };

    if (this.state.open && newState.width > 991) {
      newState.open = false;
    }

    this.setState(newState);
  };

  toggleNav = () => {
    this.setState({ open: !this.state.open });
  };

  componentDidMount() {
    window.addEventListener("resize", this.updateWidth);
  }

  componentWillUnmount() {
    window.removeEventListener("resize", this.updateWidth);
  }

  render() {
    return (
      <nav className="navbar navbar-expand-lg navbar-light bg-light mb-2">
        <Link className="navbar-brand" to="/">
          App Name
        </Link>
        <button
          onClick={this.toggleNav}
          className="navbar-toggler"
          data-toggle="collapse"
          data-target="#navbarNav"
          aria-controls="navbarNav"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span className="navbar-toggler-icon" />
        </button>
        <div className={`${this.state.open ? "" : "collapse "}navbar-collapse`} id="navbarNav">
          <ul className="navbar-nav">
            <li className="nav-item">
              <Link
                onClick={this.toggleNav}
                className={window.location.pathname === "/" ? "nav-link active" : "nav-link"}
                to="/"
              >
                Search
              </Link>
            </li>
            <li className="nav-item pullRight">
              <Link
                onClick={this.toggleNav}
                className={window.location.pathname === "/saved" ? "nav-link active" : "nav-link"}
                to="/saved"
              >
                Saved
              </Link>
            </li>
          </ul>
        </div>
      </nav>
    );
  }
}

export default Navbar;