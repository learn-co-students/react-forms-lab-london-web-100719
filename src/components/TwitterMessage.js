import React from "react";

class TwitterMessage extends React.Component {
  constructor() {
    super();

    this.state = {
      text: "",
      length: 0
    };
  }

  handleTextInput = formValue => {
    this.setState({
      length: formValue.length,
      text: formValue
    })
  }

  render() {
    return (
      <div>
        <strong>Your message:</strong>
        <input 
        onChange = {event => this.handleTextInput(event.target.value)} 
        value = {this.state.text}
        type="text" name="message" id="message" />
          <p>Max text: {this.props.maxChars}</p>
    <p>Text remaining: {this.props.maxChars - this.state.length}</p>
      </div>

    );
  }
}

export default TwitterMessage;
