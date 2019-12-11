import React from "react";

class LoginForm extends React.Component {
  constructor() {
    super();

    this.state = {
      username: "",
      password: ""
    };
  }

  handleSubmit = event => {
    event.preventDefault();
    let currentState = { ...this.state };
    if (this.state.username.length > 0 && this.state.password.length > 0) {
      this.props.handleLogin(currentState);
    }
  };

  handleTextInput = eventTarget => {
    let key = eventTarget.name;
    let value = eventTarget.value;
    this.setState({
      [key]: value
    });
  };

  render() {
    return (
      <form onSubmit={event => this.handleSubmit(event)}>
        <div>
          <label>
            Username:
            <input
              onChange={event => this.handleTextInput(event.target)}
              id="username"
              name="username"
              type="text"
              value={this.state.username}
            />
          </label>
        </div>
        <div>
          <label>
            Password:
            <input
              onChange={event => this.handleTextInput(event.target)}
              id="password"
              name="password"
              type="password"
              value={this.state.password}
            />
          </label>
        </div>
        <div>
          <button type="submit">Log in</button>
        </div>
      </form>
    );
  }
}

export default LoginForm;
