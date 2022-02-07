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
          {/* <Link to={"/tweets"}>All Tweets</Link> */}
          {/* <Link to={"/profile"}>Profile</Link>
          <Link to={"/new_tweet"}>Write a Tweet</Link> */}
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
      <header>
        <h1 className="main-logo">LFG</h1>
        {this.getLinks()}
      </header>
    );
  }
}

export default NavBar;
