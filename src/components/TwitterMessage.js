import React from "react";

class TwitterMessage extends React.Component {
  constructor() {
    super();

    this.state = {
      message: ""
    };
  }

  remainingChars = () => this.props.maxChars - this.state.message.length;

  handleChange = event => {
    this.setState({
      message: event.target.value
    });
  };

  render() {
    return (
      <div>
        <strong>
          Your message: {parseInt(`${this.remainingChars()}`)} chars remaining
        </strong>
        <input
          type="text"
          name="message"
          id="message"
          value={this.state.message}
          onChange={event => this.handleChange(event)}
        />
      </div>
    );
  }
}

export default TwitterMessage;
