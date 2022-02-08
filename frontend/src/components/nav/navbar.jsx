import React from "react";
import { Link } from "react-router-dom";
import './navbar.scss'

class NavBar extends React.Component {
  constructor(props) {
    super(props);
    this.logoutUser = this.logoutUser.bind(this);
    this.getLinks = this.getLinks.bind(this);
  }

  logoutUser(e) {
    e.preventDefault();
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
      <header id="header">
        <div id="header-links">
          <h1 className="main-logo">LFG</h1> 
          <span><hr id="seperator"/></span>
          <Link to={"/"} className="hover-underline-animation">Home</Link>
          <Link to={"/home"} className="hover-underline-animation">Calendar</Link>
          <a className="hover-underline-animation">Create</a>
        </div>
        {this.getLinks()}
      </header>
    );
  }
}

export default NavBar;
