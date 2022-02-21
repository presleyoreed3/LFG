import React from "react";
import { withRouter } from "react-router-dom";
import './session_form.scss'

class SignupForm extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      email: "",
      username: "",
      password: "",
      password2: "",
      errors: {},
    };

    this.handleSubmit = this.handleSubmit.bind(this);
    this.handleErrors = this.handleErrors.bind(this);

  }

  componentWillReceiveProps(nextProps) {
    if (nextProps.signedIn === true) {
      this.setState({errors: {}})
      return;
    }

    this.setState({ errors: nextProps.errors });
  }

  update(field) {
    return (e) =>
      this.setState({
        [field]: e.currentTarget.value,
      });
  }

  handleSubmit(e) {
    e.preventDefault();
    let user = {
      email: this.state.email,
      username: this.state.username,
      password: this.state.password,
      password2: this.state.password2,
    };

    this.props.signup(user)
      .then(() => {
        if (Object.values(this.state.errors).length < 1) {
          this.props.login(user);
        }
      })
  }

  handleErrors(e){
    if (e.currentTarget.value.length > 0) {
      this.setState({errors: {}})
    }
  }

  renderErrors() {
    return (
      <ul>
        {Object.keys(this.state.errors).map((error, i) => (
          <li id="session-errors" key={`error-${i}`}>{this.state.errors[error]}</li>
        ))}
      </ul>
    );
  }

  render() {
    return (
      <div className="session-form-background">
        <div className="session-form-container">
          <form className="session-form" onSubmit={this.handleSubmit}>
            <h2>Sign Up</h2>
              <br />
              <input
                type="text"
                onKeyUp={this.handleErrors}
                value={this.state.email}
                onChange={this.update("email")}
                placeholder="Email"
              />
              <br />
              <input
                type="text"
                onKeyUp={this.handleErrors}
                value={this.state.username}
                onChange={this.update("username")}
                placeholder="Username"
              />
              <br />
              <input
                type="password"
                onKeyUp={this.handleErrors}
                value={this.state.password}
                onChange={this.update("password")}
                placeholder="Password"
              />
              <br />
              <input
                type="password"
                onKeyUp={this.handleErrors}
                value={this.state.password2}
                onChange={this.update("password2")}
                placeholder="Confirm Password"
              />
              <br />
              {this.renderErrors()}
              <button>Create Account</button>
          </form>
        </div>
      </div>
    );
  }
}

export default withRouter(SignupForm);
