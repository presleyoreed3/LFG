import React from "react";
import { Link } from "react-router-dom";
import './navbar.scss'

class NavBar extends React.Component {
  constructor(props) {
    super(props);
    this.logoutUser = this.logoutUser.bind(this);
    this.getLinks = this.getLinks.bind(this);
  }

  checkCreate(){
    if (this.props.loggedIn){
      return (
        <a className="hover-underline-animation" onClick={() => this.props.openModal('eventForm', 1)}>Create</a>
      )
    }
  }

  logoutUser(e) {
    e.preventDefault();
    this.props.logout();
  }

  // Selectively render links dependent on whether the user is logged in
  getLinks() {
    if (this.props.loggedIn) {
      return (
        <div className="navbar-signup-login">
          <a className="hover-underline-animation" onClick={this.logoutUser}>Logout</a>
        </div>
      );
    } else {
      return (
        <div className="navbar-signup-login">
          <Link className="hover-underline-animation" to={"/signup"}>Sign Up</Link>
          <Link className="hover-underline-animation" to={"/login"}>Login</Link>
        </div>
      );
    }
  }

  render() {
    return (
      <header id="header">
        <div id="header-links">
          <h1 className="main-logo"><img src="https://some-trails-aa-dev.s3.us-west-1.amazonaws.com/lfg-logo-green.png"/></h1> 
          <span><hr id="seperator"/></span>
          <Link to={"/"} className="hover-underline-animation">Home</Link>
          <Link to={"/home"} className="hover-underline-animation">Calendar</Link>
          {this.checkCreate()}
        </div>
        {this.getLinks()}
      </header>
    );
  }
}

export default NavBar;
