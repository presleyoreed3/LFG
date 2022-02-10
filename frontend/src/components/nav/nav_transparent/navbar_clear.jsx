import React from "react";
import { Link } from "react-router-dom";
import './navbar_clear.scss'

class NavBarClear extends React.Component {
  constructor(props) {
    super(props);
    this.logoutUser = this.logoutUser.bind(this);
    this.getLinks = this.getLinks.bind(this);
  }

  checkCreate(){
    if (this.props.loggedIn){
      return (
        <Link className="hover-underline-animation">Create</Link>
      )
    }
  }

  logoutUser(e) {
    e.preventDefault();
    // this.props.history.push('/')
    this.props.logout();
  }

  // Selectively render links dependent on whether the user is logged in
  getLinks() {
    if (this.props.loggedIn) {
      return (
        <div className="navbar-logout">
          <Link className="hover-underline-animation" onClick={this.logoutUser}>Logout</Link>
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
      <header id="header-clear">
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

export default NavBarClear;
