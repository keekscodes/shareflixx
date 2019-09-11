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

import React, {Component} from "react";
import Navigation from "../../Navigation/index";
import {MDBContainer, MDBTabPane, MDBTabContent, MDBNav, MDBNavItem, MDBNavLink} from "mdbreact";
import axios from "axios";
import "./style.css";

class Profile extends Component {
  state = {
    activeItem: "1",
    firstName: "",
    lastName: "",
    email: "",
    username: "",
    image: "",
    user: []
  };


  componentDidMount() {
    // console.log(this.props.location.state.username);
    let token = sessionStorage.getItem("token");
    axios.get("/api/users/current", {
      headers: {
        'Content-Type': "application/json",
        'Authorization': "Token " + token
      }
    }).then(response => {
      console.log(response);
      this.setState({
        user: response.data.user
      });
      console.log(this.state.user)
    })
  }

  handleChange = (e) => {
    const {name, value} = e.target;
    this.setState({
      [name]: value
    })
  };

  handleSubmit = (e) => {
    e.preventDefault();
    const {firstName, lastName, email, username, image} = this.state;
    let updatedData;
    updatedData = {
      firstName,
      lastName,
      email,
      username,
      image
    };

    let token = sessionStorage.getItem("token");


    let headers = {
      'Content-Type': "application/json",
      'Authorization': "Token " + token
    };

    axios.post("/api/users/profile", updatedData, {
      headers: headers
    }).then(res => {
      console.log(res);
      // return res.json()
    });

    window.location.reload();
  };

  toggle = tab => e => {
    if (this.state.activeItem !== tab) {
      this.setState({
        activeItem: tab
      });
    }
  };

  //swap sections

  render() {
    let token = sessionStorage.getItem("token");

    const {email, firstName, lastName, username, _id, image} = this.state.user;
    return (
      <div className="container-fluid">
        {/*<Navigation user={this.state.user}/>*/}
        <Navigation>{username}</Navigation>
        <MDBContainer>
          <section>
            <h1 className="border-bottom border-dark text-left text-uppercase" id="boycott">Manage Your Account</h1>
          </section>
          <MDBNav className="nav-tabs mt-5">
            <MDBNavItem>
              <MDBNavLink to="#" active={this.state.activeItem === "1"} onClick={this.toggle("1")} role="tab">
                Profile
              </MDBNavLink>
            </MDBNavItem>
            <MDBNavItem>
              <MDBNavLink to="#" active={this.state.activeItem === "2"} onClick={this.toggle("2")} role="tab">
                Settings
              </MDBNavLink>
            </MDBNavItem>
          </MDBNav>
          <MDBTabContent activeItem={this.state.activeItem}>
            <MDBTabPane tabId="1" role="tabpanel">

              {
                token ?
                  (
                    <div className="container">
                      <h3>Edit your profile:</h3>
                      <div className="row">
                        <div className="col-md-6">
                          <label htmlFor="id" className="label-item">Id:</label>
                        </div>
                        <div className="col-md-6">
                          <input className="form-inp disabledId" type="text" name="id" placeholder={_id} disabled/>
                        </div>
                      </div>
                      <div className="row">
                        <div className="col-md-6">
                          <label htmlFor="firstName" className="label-item">First Name:</label>
                        </div>
                        <div className="col-md-6">
                          <input type="text" name="firstName" className="form-inp" placeholder={firstName}
                                 value={this.state.firstName} onChange={this.handleChange}/>
                        </div>
                      </div>
                      <div className="row">
                        <div className="col-md-6">
                          <label htmlFor="lastName" className="label-item">Last Name:</label>
                        </div>
                        <div className="col-md-6">
                          <input type="text" name="lastName" className="form-inp" placeholder={lastName}
                                 value={this.state.lastName} onChange={this.handleChange}/>
                        </div>
                      </div>
                      <div className="row">
                        <div className="col-md-6">
                          <label htmlFor="email" className="label-item">Email Address:</label>
                        </div>
                        <div className="col-md-6">
                          <input type="text" name="email" placeholder={email} className="form-inp"
                                 value={this.state.email} onChange={this.handleChange}/>
                        </div>
                      </div>
                      <div className="row">
                        <div className="col-md-6">
                          <label htmlFor="username" className="label-item">Username (Nickname):</label>
                        </div>
                        <div className="col-md-6">
                          <input type="text" name="username" placeholder={username} className="form-inp"
                                 value={this.state.username} onChange={this.handleChange}/>
                        </div>
                      </div>
                      <div className="row">
                        <div className="col-md-6">
                          <label htmlFor="image" className="label-item">Image (URL):</label>
                        </div>
                        <div className="col-md-6">
                          <input type="text" name="image" placeholder={image} className="form-inp"
                                 value={this.state.image} onChange={this.handleChange}/>
                        </div>
                      </div>
                      <button className="btn btn-success mt-3"
                              style={{width: "100%", padding: "10px", fontSize: "24px"}}
                              onClick={this.handleSubmit}>Update Profile
                      </button>
                    </div>
                  )
                  : <h2>Sorry, you are not authorized to view this page. Please sign in to view your profile.</h2>}
            </MDBTabPane>
            <MDBTabPane tabId="2" role="tabpanel">

              Lorem ipsum dolor sit amet, consectetur adipisicing elit. Aperiam eaque error hic itaque nulla optio quae
              recusandae repudiandae suscipit ut. Amet, similique temporibus. Ea in magni, nesciunt quis similique
              temporibus.
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
