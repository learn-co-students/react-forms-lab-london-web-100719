import React from "react";

class LoginForm extends React.Component {
  constructor() {
    super();

    this.state = {
      username: "",
      password: ""
    };
  }

  handleChange = event => {
    this.setState({
      [event.target.name]: event.target.value
    });
  };

  handleSubmitIf = (event) => {
    event.preventDefault()
    if (this.state.username.length > 0 && this.state.password.length > 0){
      this.props.handleLogin()
    }
  };

  render() {
    return (
      <form onSubmit={event => this.handleSubmitIf(event)}>
        <div>
          <label>
            Username
            <input
              id="username"
              name="username"
              type="text"
              onChange={this.handleChange}
            />
          </label>
        </div>
        <div>
          <label>
            Password
            <input
              id="password"
              name="password"
              type="password"
              onChange={this.handleChange}
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
