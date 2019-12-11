import React from "react";

class TwitterMessage extends React.Component {
  constructor() {
    super();

    this.state = {
      message: "",
      length: null
    };
  }

  charCount = event => {
   this.setState({
    message: event.target.value,
     length: event.target.value.length
     
   })
  }

  render() {
    return (
      <div>
        <p>Max Characters: {this.props.maxChars}</p>
        <strong>Your message:</strong>
        <input type="text" name="message" id="message" onChange={event => this.charCount(event)} value={this.state.message}/>
        <p>Characters Remaining: {this.props.maxChars - this.state.length }</p>
      </div>
    );
  }
}

export default TwitterMessage;
