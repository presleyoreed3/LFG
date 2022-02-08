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
          <button onClick={this.logoutUser}>Logout</button>
        </div>
      );
    } else {
      return (
        <div className="navbar-signup-login">
          <Link to={"/signup"}>Sign Up</Link>
          <Link to={"/login"}>Login</Link>
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
          <a className="hover-underline-animation">Home</a>
          <a className="hover-underline-animation">Calendar</a>
          <a className="hover-underline-animation">Create</a>
        </div>
        {this.getLinks()}
      </header>
    );
  }
}

export default NavBar;
