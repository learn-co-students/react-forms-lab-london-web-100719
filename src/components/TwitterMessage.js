import React from "react";

class TwitterMessage extends React.Component {
  constructor() {
    super();

    this.state = { content: "" };
  }

  handleChange = event => {
    this.setState({ content: event.target.value });
  };

  render() {
    return (
      <div>
        <p>
          Chars remaining: {this.props.maxChars - this.state.content.length}{" "}
        </p>
        <strong>Your message:</strong>
        <input
          onChange={this.handleChange}
          type="text"
          name="message"
          value={this.state.content}
        />
      </div>
    );
  }
}

export default TwitterMessage;
